(function () {
    'use strict';

    var monthsFr = {
        'JAN': 'jan', 'FEB': 'fév', 'MAR': 'mars', 'APR': 'avr',
        'MAY': 'mai', 'JUN': 'juin', 'JUL': 'juil', 'AUG': 'août',
        'SEP': 'sep', 'OCT': 'oct', 'NOV': 'nov', 'DEC': 'déc'
    };

    function updateCalendarMonths() {
        var isFr = document.body.classList.contains('french');
        var els = document.querySelectorAll('.post-card-date .post-card-date-month');
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (!el.hasAttribute('data-original-month')) {
                el.setAttribute('data-original-month', el.textContent.trim());
            }
            var original = el.getAttribute('data-original-month');
            el.textContent = isFr ? (monthsFr[original] || original) : original;
        }
    }

    function setLanguage(lang) {
        var isFr = lang === 'fr';
        document.body.classList.toggle('french', isFr);

        var html = document.getElementById('html-root') || document.documentElement;
        html.setAttribute('lang', isFr ? 'fr' : 'en');

        var btnFr = document.getElementById('btn-fr');
        var btnEn = document.getElementById('btn-en');
        if (btnFr) btnFr.setAttribute('aria-pressed', String(isFr));
        if (btnEn) btnEn.setAttribute('aria-pressed', String(!isFr));

        // Re-render directory if it exists on the page
        if (typeof window.renderDirectory === 'function') {
            window.renderDirectory();
        }

        updateCalendarMonths();

        try {
            localStorage.setItem('language', lang);
            document.cookie = 'lang=' + lang + '; path=/; max-age=31536000';
        } catch (e) {}
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Restore saved preference
        try {
            var saved = localStorage.getItem('language');
            if (saved === 'fr' || saved === 'en') {
                setLanguage(saved);
            }
        } catch (e) {}

        updateCalendarMonths();

        // Button click handlers
        var btnFr = document.getElementById('btn-fr');
        var btnEn = document.getElementById('btn-en');
        if (btnFr) btnFr.addEventListener('click', function () { setLanguage('fr'); });
        if (btnEn) btnEn.addEventListener('click', function () { setLanguage('en'); });
    });

    window.setLanguage = setLanguage;
})();
