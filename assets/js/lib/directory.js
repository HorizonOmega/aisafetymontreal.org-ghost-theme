(function () {
    'use strict';

    var organizations = [];

    var activityLabels = {
        en: {
            "research": "Research",
            "governance-policy": "Policy",
            "advocacy": "Advocacy",
            "education-training": "Education",
            "network-events": "Events",
            "standards-assurance": "Standards"
        },
        fr: {
            "research": "Recherche",
            "governance-policy": "Politique",
            "advocacy": "Plaidoyer",
            "education-training": "\u00c9ducation",
            "network-events": "\u00c9v\u00e9nements",
            "standards-assurance": "Normes"
        }
    };

    var sectorLabels = {
        en: {
            "academic": "Academic",
            "nonprofit": "Nonprofit",
            "government": "Government",
            "community-student": "Community",
            "startup": "Startup"
        },
        fr: {
            "academic": "Acad\u00e9mique",
            "nonprofit": "OBNL",
            "government": "Gouvernement",
            "community-student": "Communaut\u00e9",
            "startup": "Startup"
        }
    };

    function esc(s) {
        var map = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'};
        return s.replace(/[&<>"']/g, function (m) { return map[m]; });
    }

    function external(url) {
        return url.indexOf('http') === 0 ? ' target="_blank" rel="noopener noreferrer"' : '';
    }

    function renderDirectory() {
        var list = document.getElementById('directory-list');
        if (!list) return;

        var isFrench = document.body.classList.contains('french');
        var lang = isFrench ? 'fr' : 'en';

        list.innerHTML = organizations.map(function (org) {
            var sectorBadge = org.sector
                ? '<span class="sector-badge sector-badge-' + org.sector + '">' + (sectorLabels[lang][org.sector] || org.sector) + '</span>'
                : '';
            var activityBadges = org.activities.map(function (a) {
                return '<span class="activity-badge activity-badge-' + a + '">' + (activityLabels[lang][a] || a) + '</span>';
            }).join('');
            var description = isFrench ? (org.desc_fr || org.desc) : org.desc;

            return '<li data-activities="' + org.activities.join(',') + '" data-sector="' + (org.sector || '') + '">' +
                '<div class="directory-card">' +
                    '<div class="entry-topline">' +
                        '<a href="' + esc(org.url) + '" class="entry-name"' + external(org.url) + '>' + esc(org.name) + '</a>' +
                        '<span class="entry-tags">' + sectorBadge + activityBadges + '</span>' +
                    '</div>' +
                    '<div class="entry-desc">' + esc(description) + '</div>' +
                '</div>' +
            '</li>';
        }).join('');
    }

    function updateDirectoryCount() {
        var allItems = document.querySelectorAll('#directory-list li[data-activities]');
        var visibleCount = 0;
        for (var i = 0; i < allItems.length; i++) {
            if (allItems[i].style.display !== 'none') visibleCount++;
        }
        var totalCount = allItems.length;
        var countEl = document.getElementById('directory-count');
        var isFrench = document.body.classList.contains('french');
        if (countEl) {
            countEl.textContent = isFrench
                ? visibleCount + ' sur ' + totalCount
                : visibleCount + ' of ' + totalCount;
        }
    }

    // Expose globally so language.js can call it
    window.renderDirectory = renderDirectory;

    document.addEventListener('DOMContentLoaded', function () {
        var list = document.getElementById('directory-list');
        var sourceUrl = list && list.getAttribute('data-source');

        function init(data) {
            organizations = data;
            renderDirectory();
            updateDirectoryCount();
        }

        if (sourceUrl) {
            fetch(sourceUrl)
                .then(function (r) { return r.json(); })
                .then(function (json) {
                    var rows = Array.isArray(json) ? json : (json.list || []);
                    return rows.map(function (r) {
                        return {
                            name: r.Name || r.name || '',
                            sector: r.Sector || r.sector || '',
                            activities: r.Activities
                                ? (typeof r.Activities === 'string' ? r.Activities.split(',') : r.Activities)
                                : (r.activities || []),
                            desc: r.Desc || r.desc || '',
                            desc_fr: r.Desc_fr || r.desc_fr || '',
                            focus: r.Focus || r.focus || null,
                            focus_fr: r.Focus_fr || r.focus_fr || null,
                            url: r.Url || r.url || ''
                        };
                    });
                })
                .then(init)
                .catch(function () { init(window.directoryData || []); });
        } else {
            init(window.directoryData || []);
        }

        var filterBtns = document.querySelectorAll('.filter-btn');
        for (var i = 0; i < filterBtns.length; i++) {
            filterBtns[i].addEventListener('click', function (e) {
                var selectedActivity = e.currentTarget.dataset.filter;

                var allBtns = document.querySelectorAll('.filter-btn');
                for (var j = 0; j < allBtns.length; j++) {
                    allBtns[j].classList.remove('active');
                }
                e.currentTarget.classList.add('active');

                var items = document.querySelectorAll('#directory-list li[data-activities]');
                for (var k = 0; k < items.length; k++) {
                    var orgActivities = items[k].dataset.activities.split(',');
                    var orgSector = items[k].dataset.sector || '';
                    var shouldShow = selectedActivity === 'all'
                        || orgActivities.indexOf(selectedActivity) !== -1
                        || orgSector === selectedActivity;
                    items[k].style.display = shouldShow ? '' : 'none';
                }

                updateDirectoryCount();
            });
        }
    });
})();
