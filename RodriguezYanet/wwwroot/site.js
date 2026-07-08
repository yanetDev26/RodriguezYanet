(function () {
    var STORAGE_KEY = 'portfolio-lang';

    function applyLang(lang) {
        document.body.classList.remove('lang-en', 'lang-es');
        document.body.classList.add('lang-' + lang);
        document.documentElement.setAttribute('lang', lang);
    }

    function initLang() {
        var saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
        var lang = saved || 'en';
        applyLang(lang);

        document.querySelectorAll('.lang-switch button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var next = btn.getAttribute('data-lang');
                applyLang(next);
                try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
            });
        });
    }

    function initNavToggle() {
        var toggle = document.querySelector('.nav-toggle');
        if (!toggle) return;
        toggle.addEventListener('click', function () {
            document.body.classList.toggle('nav-open');
        });
        document.querySelectorAll('.nav-links a').forEach(function (link) {
            link.addEventListener('click', function () {
                document.body.classList.remove('nav-open');
            });
        });
    }

    function initReveal() {
        var items = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window) || items.length === 0) {
            items.forEach(function (el) { el.classList.add('in-view'); });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        items.forEach(function (el) { observer.observe(el); });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initLang();
        initNavToggle();
        initReveal();
    });
})();
