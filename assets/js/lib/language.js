(function () {
    'use strict';

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

        // Button click handlers
        var btnFr = document.getElementById('btn-fr');
        var btnEn = document.getElementById('btn-en');
        if (btnFr) btnFr.addEventListener('click', function () { setLanguage('fr'); });
        if (btnEn) btnEn.addEventListener('click', function () { setLanguage('en'); });
    });

    window.setLanguage = setLanguage;
})();
