(function () {
    'use strict';

    var organizations = [
        { name: "Mila \u2013 Qu\u00e9bec AI Institute", sector: "academic", activities: ["research", "network-events"], desc: "Academic deep learning research center with 140+ affiliated professors. Technical alignment, interpretability, responsible AI development.", desc_fr: "Centre de recherche acad\u00e9mique en apprentissage profond avec plus de 140 professeurs affili\u00e9s. Alignement technique, interpr\u00e9tabilit\u00e9, d\u00e9veloppement responsable de l\u2019IA.", focus: "Deep learning research, technical alignment, interpretability, responsible AI", focus_fr: "Recherche en apprentissage profond, alignement technique, interpr\u00e9tabilit\u00e9, IA responsable", url: "https://mila.quebec/en" },
        { name: "Krueger AI Safety Lab (KASL)", sector: "academic", activities: ["research"], desc: "Technical AI safety research group at Mila led by David Krueger. Research in misgeneralization, mechanistic interpretability, and reward specification.", desc_fr: "Groupe de recherche en s\u00e9curit\u00e9 de l\u2019IA \u00e0 Mila dirig\u00e9 par David Krueger. Recherche sur la g\u00e9n\u00e9ralisation erron\u00e9e, l\u2019interpr\u00e9tabilit\u00e9 m\u00e9caniste et la sp\u00e9cification des r\u00e9compenses.", focus: "Technical alignment, misgeneralization, scalable oversight, interpretability, goal misalignment", focus_fr: "Alignement technique, g\u00e9n\u00e9ralisation erron\u00e9e, supervision \u00e9volutive, interpr\u00e9tabilit\u00e9, d\u00e9salignement des objectifs", url: "https://www.kasl.ai" },
        { name: "IVADO \u2014 R\u00b3AI / R10: AI Safety & Alignment", sector: "academic", activities: ["research"], desc: "Multi-year research program on AI safety across axes: evaluating harmful behaviors, understanding AI decision-making, algorithmic approaches for safe AI.", desc_fr: "Programme de recherche pluriannuel sur la s\u00e9curit\u00e9 de l\u2019IA selon plusieurs axes : \u00e9valuation des comportements nuisibles, compr\u00e9hension de la prise de d\u00e9cision de l\u2019IA, approches algorithmiques pour une IA s\u00fbre.", focus: "AI evaluation, alignment, scalable oversight, evaluating and mitigating LLM biases", focus_fr: "\u00c9valuation de l\u2019IA, alignement, supervision \u00e9volutive, \u00e9valuation et att\u00e9nuation des biais des grands mod\u00e8les de langage", url: "https://ivado.ca/en/regroupements/ai-safety-and-alignment/" },
        { name: "LawZero", sector: "nonprofit", activities: ["research"], desc: "Nonprofit AI safety research organization launched by Yoshua Bengio. Focuses on non-agentic \u2018Scientist AI\u2019 architecture as alternative to frontier lab approaches.", desc_fr: "Organisation de recherche \u00e0 but non lucratif en s\u00e9curit\u00e9 de l\u2019IA lanc\u00e9e par Yoshua Bengio. Se concentre sur l\u2019architecture \u00ab IA scientifique \u00bb non agentique comme alternative aux approches des laboratoires de pointe.", focus: "Safe-by-design systems, truth-seeking AI, non-agentic Scientist AI, safety architectures", focus_fr: "Syst\u00e8mes s\u00fbrs par conception, IA en qu\u00eate de v\u00e9rit\u00e9, IA scientifique non agentique, architectures de s\u00e9curit\u00e9", url: "https://lawzero.org/en" },
        { name: "AI Safety Reading Group (Mila)", sector: "academic", activities: ["research"], desc: "Biweekly research seminar series at Mila inviting authors to present their own AI safety papers.", desc_fr: "S\u00e9rie de s\u00e9minaires de recherche bihebdomadaires \u00e0 Mila invitant des auteurs \u00e0 pr\u00e9senter leurs propres articles sur la s\u00e9curit\u00e9 de l\u2019IA.", focus: null, focus_fr: null, url: "https://mila.quebec/en/prospective-students-postdocs/student-life-and-resources" },
        { name: "Canadian AI Safety Institute (CAISI)", sector: "government", activities: ["research", "governance-policy", "standards-assurance"], desc: "Federal government AI safety institute. Funds research through CIFAR and NRC programs, develops safety tools/guidance. Member of International Network of AI Safety Institutes.", desc_fr: "Institut f\u00e9d\u00e9ral de s\u00e9curit\u00e9 de l\u2019IA. Finance la recherche via les programmes CIFAR et CNRC, d\u00e9veloppe des outils et des lignes directrices de s\u00e9curit\u00e9. Membre du R\u00e9seau international des instituts de s\u00e9curit\u00e9 de l\u2019IA.", focus: "AI safety research, risk assessment, tools/guidance development", focus_fr: "Recherche en s\u00e9curit\u00e9 de l\u2019IA, \u00e9valuation des risques, d\u00e9veloppement d\u2019outils et de lignes directrices", url: "https://cifar.ca/ai/caisi/" },
        { name: "Montr\u00e9al AI Governance, Ethics & Safety Meetup", sector: "nonprofit", activities: ["network-events"], desc: "Public meetup community hosting talks, workshops, discussions on AI governance, ethics and safety. Co-organized with Horizon Omega.", desc_fr: "Communaut\u00e9 de rencontres publiques organisant des conf\u00e9rences, ateliers et discussions sur la gouvernance, l\u2019\u00e9thique et la s\u00e9curit\u00e9 de l\u2019IA. Co-organis\u00e9 avec Horizon Omega.", focus: null, focus_fr: null, url: "https://luma.com/montreal-ai-safety-ethics-governance?k=c" },
        { name: "PauseAI Montr\u00e9al", sector: "nonprofit", activities: ["advocacy", "network-events"], desc: "Volunteer community advocating to mitigate AI risks and pause development of superhuman AI until safe.", desc_fr: "Communaut\u00e9 de b\u00e9n\u00e9voles plaidant pour att\u00e9nuer les risques de l\u2019IA et suspendre le d\u00e9veloppement de l\u2019IA surhumaine jusqu\u2019\u00e0 ce qu\u2019elle soit s\u00fbre.", focus: "AI risk awareness, policy advocacy for pausing superhuman AI, public education", focus_fr: "Sensibilisation aux risques de l\u2019IA, plaidoyer pour suspendre l\u2019IA surhumaine, \u00e9ducation publique", url: "https://pauseai.ca/montreal.html" },
        { name: "AI Alignment McGill (AIAM)", sector: "community-student", activities: ["education-training", "network-events"], desc: "Student club at McGill focused on AI alignment and safety; organizes reading groups, hackathons and related activities.", desc_fr: "Club \u00e9tudiant \u00e0 McGill ax\u00e9 sur l\u2019alignement et la s\u00e9curit\u00e9 de l\u2019IA ; organise des groupes de lecture, des hackathons et des activit\u00e9s connexes.", focus: null, focus_fr: null, url: "https://www.alignmentforum.org/groups/TLbuSuKccZThdvDBo" },
        { name: "Horizon Omega (H\u03a9)", sector: "nonprofit", activities: ["network-events"], desc: "Montr\u00e9al-based nonprofit hub supporting local AI safety, ethics and governance community through meetups, coworking, workshops and collaborations.", desc_fr: "Hub \u00e0 but non lucratif bas\u00e9 \u00e0 Montr\u00e9al soutenant la communaut\u00e9 locale en s\u00e9curit\u00e9, \u00e9thique et gouvernance de l\u2019IA par des rencontres, du cotravail, des ateliers et des collaborations.", focus: "Ecosystem building, event coordination (GSAI, AISU), community resources, accelerating AI safety R&D", focus_fr: "D\u00e9veloppement d\u2019\u00e9cosyst\u00e8me, coordination d\u2019\u00e9v\u00e9nements (GSAI, AISU), ressources communautaires, acc\u00e9l\u00e9ration de la R&D en s\u00e9curit\u00e9 de l\u2019IA", url: "https://www.horizonomega.org/" },
        { name: "Montr\u00e9al AI Ethics Institute (MAIEI)", sector: "nonprofit", activities: ["governance-policy"], desc: "International non-profit founded 2018 that equips citizens concerned about AI and its societal impacts to take action. Produces AI Ethics Brief and State of AI Ethics reports.", desc_fr: "Organisation internationale \u00e0 but non lucratif fond\u00e9e en 2018 qui \u00e9quipe les citoyens pr\u00e9occup\u00e9s par l\u2019IA et ses impacts soci\u00e9taux pour agir. Produit des r\u00e9sum\u00e9s d\u2019\u00e9thique de l\u2019IA et des rapports sur l\u2019\u00e9tat de l\u2019\u00e9thique de l\u2019IA.", focus: "AI ethics research, educational resources, policy analysis, democratizing AI ethics literacy", focus_fr: "Recherche en \u00e9thique de l\u2019IA, ressources \u00e9ducatives, analyse des politiques, d\u00e9mocratisation de la litt\u00e9ratie en \u00e9thique de l\u2019IA", url: "https://montrealethics.ai/" },
        { name: "CEIMIA", sector: "nonprofit", activities: ["governance-policy"], desc: "Independent organization managing Montr\u00e9al hub of GPAI Network of Centres. Implements high-impact applied projects for responsible AI based on ethics and human rights.", desc_fr: "Organisation ind\u00e9pendante g\u00e9rant le hub montr\u00e9alais du R\u00e9seau de centres du PMIA. Met en \u0153uvre des projets appliqu\u00e9s \u00e0 fort impact pour une IA responsable bas\u00e9e sur l\u2019\u00e9thique et les droits humains.", focus: "International AI governance, inclusive policy development, multi-stakeholder coordination, manages GPAI Montr\u00e9al hub", focus_fr: "Gouvernance internationale de l\u2019IA, d\u00e9veloppement de politiques inclusives, coordination multipartite, g\u00e8re le hub PMIA Montr\u00e9al", url: "https://ceimia.org/en/" },
        { name: "OBVIA", sector: "academic", activities: ["research", "governance-policy"], desc: "Inter-university observatory on societal impacts of AI. Network of researchers from Quebec institutions publishing research across 7 thematic hubs.", desc_fr: "Observatoire interuniversitaire sur les impacts soci\u00e9taux de l\u2019IA. R\u00e9seau de chercheurs d\u2019institutions qu\u00e9b\u00e9coises publiant des recherches \u00e0 travers 7 p\u00f4les th\u00e9matiques.", focus: "Societal impacts of AI, policy research, public engagement, interdisciplinary research", focus_fr: "Impacts soci\u00e9taux de l\u2019IA, recherche en politiques, engagement public, recherche interdisciplinaire", url: "https://www.obvia.ca/" },
        { name: "CIFAR \u2014 AI & Society", sector: "academic", activities: ["research", "governance-policy"], desc: "Program under Pan-Canadian AI Strategy that convenes interdisciplinary meetings and publishes reports on AI\u2019s societal impacts for policymakers and public.", desc_fr: "Programme dans le cadre de la Strat\u00e9gie pancanadienne en mati\u00e8re d\u2019IA qui organise des r\u00e9unions interdisciplinaires et publie des rapports sur les impacts soci\u00e9taux de l\u2019IA pour les d\u00e9cideurs et le public.", focus: "AI societal impacts, governance frameworks, interdisciplinary research, responsible AI deployment", focus_fr: "Impacts soci\u00e9taux de l\u2019IA, cadres de gouvernance, recherche interdisciplinaire, d\u00e9ploiement responsable de l\u2019IA", url: "https://cifar.ca/ai/ai-and-society/" },
        { name: "Encode Canada", sector: "community-student", activities: ["education-training", "network-events"], desc: "Youth-led group that builds AI literacy and early-career capacity through student fellowships, hands-on workshops, public events, and creative programs.", desc_fr: "Groupe dirig\u00e9 par des jeunes qui d\u00e9veloppe la litt\u00e9ratie en IA et les capacit\u00e9s en d\u00e9but de carri\u00e8re par des bourses \u00e9tudiantes, des ateliers pratiques, des \u00e9v\u00e9nements publics et des programmes cr\u00e9atifs.", focus: "AI literacy and governance advocacy; workshops and speaker series; \u2018Ethics Decoded\u2019 podcast; public performances like \u2018System Reboot.\u2019", focus_fr: "Plaidoyer pour la litt\u00e9ratie et la gouvernance de l\u2019IA ; ateliers et s\u00e9ries de conf\u00e9renciers ; balado \u00ab Ethics Decoded \u00bb ; performances publiques comme \u00ab System Reboot \u00bb.", url: "https://encodecanada.ca/" },
        { name: "McGill Centre for Media, Technology & Democracy (CMTD)", sector: "academic", activities: ["research", "governance-policy"], desc: "Research centre at McGill\u2019s Max Bell School focused on AI governance, transparency and democratic oversight. Publishes analyses and convenes workshops informing Canadian and international policy.", desc_fr: "Centre de recherche de l\u2019\u00c9cole Max Bell de McGill ax\u00e9 sur la gouvernance de l\u2019IA, la transparence et la surveillance d\u00e9mocratique. Publie des analyses et organise des ateliers \u00e9clairant les politiques canadiennes et internationales.", focus: "AI & Democracy initiative, facial recognition policy, AIDA analysis, impact assessments, high-risk AI regulation", focus_fr: "Initiative IA et d\u00e9mocratie, politique de reconnaissance faciale, analyse de la LIAD, \u00e9valuations d\u2019impact, r\u00e9glementation de l\u2019IA \u00e0 haut risque", url: "https://www.mediatechdemocracy.com/" }
    ];

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
            var activityBadges = org.activities.map(function (a) {
                return '<span class="tag tag-' + a + '">' + (activityLabels[lang][a] || a) + '</span>';
            }).join('');
            var description = isFrench ? (org.desc_fr || org.desc) : org.desc;
            var focus = isFrench ? (org.focus_fr || org.focus) : org.focus;

            return '<li data-activities="' + org.activities.join(',') + '">' +
                '<div class="directory-card">' +
                    '<div class="entry-topline">' +
                        '<a href="' + esc(org.url) + '" class="entry-name"' + external(org.url) + '>' + esc(org.name) + '</a>' +
                        '<span class="entry-tags">' + activityBadges + '</span>' +
                    '</div>' +
                    '<div class="entry-desc">' + esc(description) + '</div>' +
                    (focus ? '<div class="entry-focus">' + esc(focus) + '</div>' : '') +
                '</div>' +
            '</li>';
        }).join('');

        updateDirectoryCount();
    }

    function updateDirectoryCount() {
        var allItems = document.querySelectorAll('#directory-list li[data-activities]');
        var visibleCount = 0;
        for (var i = 0; i < allItems.length; i++) {
            if (allItems[i].style.display !== 'none') visibleCount++;
        }
        var totalCount = organizations.length;
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
        renderDirectory();

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
                    var shouldShow = selectedActivity === 'all' || orgActivities.indexOf(selectedActivity) !== -1;
                    items[k].style.display = shouldShow ? '' : 'none';
                }

                updateDirectoryCount();
            });
        }
    });
})();
