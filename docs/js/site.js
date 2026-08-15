/* ==========================================================================
   Silver Glass — site.js
   Runtime include system: injects the shared header and footer partials so
   navigation lives in one file and every page stays in sync.
   Authority: .agents/design/design-system.md (section 6).

   A page sets two globals in <head> before loading this script:
     window.SITE_ROOT    relative path back to the site root ("", "../", "../../")
     window.PAGE_SECTION section id used to highlight the active nav link

   and provides the mount points:
     <div id="site-header"></div>   <div id="site-footer"></div>

   Uses fetch(), so preview over HTTP — a file:// page falls back to a minimal
   header rather than rendering with no navigation at all.
   ========================================================================== */

(function () {
    "use strict";

    var ROOT = typeof window.SITE_ROOT === "string" ? window.SITE_ROOT : "";
    var SECTION = window.PAGE_SECTION || "";

    /* --- Favicon: inline so the site makes no external request ------------- */

    function injectFavicon() {
        if (document.querySelector('link[rel="icon"]')) {
            return;
        }
        var svg =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
            '<rect width="64" height="64" rx="14" fill="#5b7189"/>' +
            '<text x="32" y="43" font-family="Segoe UI,Helvetica,Arial,sans-serif"' +
            ' font-size="27" font-weight="700" fill="#ffffff" text-anchor="middle">jwz</text>' +
            "</svg>";
        var link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/svg+xml";
        link.href = "data:image/svg+xml," + encodeURIComponent(svg);
        document.head.appendChild(link);
    }

    /* --- Partial loading --------------------------------------------------- */

    function load(name, mountId) {
        var mount = document.getElementById(mountId);
        if (!mount) {
            return Promise.resolve(null);
        }
        return fetch(ROOT + "partials/" + name + ".html")
            .then(function (res) {
                if (!res.ok) {
                    throw new Error("partial " + name + ": " + res.status);
                }
                return res.text();
            })
            .then(function (html) {
                mount.innerHTML = html.split("{{ROOT}}").join(ROOT);
                return mount;
            })
            .catch(function (err) {
                fallback(mount, mountId);
                if (window.console) {
                    window.console.warn("site.js:", err.message, "- serve over HTTP");
                }
                return null;
            });
    }

    /* A page with no navigation is a dead end, so degrade to a brand link. */
    function fallback(mount, mountId) {
        if (mountId === "site-header") {
            mount.innerHTML =
                '<header class="site-header"><nav class="nav container" aria-label="Primary">' +
                '<a class="nav__brand" href="' + ROOT + 'index.html">' +
                '<span class="nav__brand-mark" aria-hidden="true">jwz</span>' +
                '<span class="nav__brand-text">Documentation</span></a>' +
                "</nav></header>";
        } else {
            mount.innerHTML =
                '<footer class="site-footer"><div class="container">' +
                '<div class="site-footer__bar"><p>jwz documentation</p></div>' +
                "</div></footer>";
        }
    }

    /* --- Active navigation ------------------------------------------------- */

    function markActive(scope) {
        if (!scope) {
            return;
        }

        if (SECTION) {
            var owners = scope.querySelectorAll('[data-section="' + SECTION + '"]');
            for (var i = 0; i < owners.length; i++) {
                owners[i].classList.add("is-active");
                if (owners[i].tagName === "A") {
                    owners[i].setAttribute("aria-current", "page");
                }
            }
        }

        /* Highlight the exact page inside a dropdown by comparing resolved URLs. */
        var here = window.location.href.split("#")[0].split("?")[0];
        var links = scope.querySelectorAll(".nav__dd-menu a");
        for (var j = 0; j < links.length; j++) {
            if (links[j].href.split("#")[0].split("?")[0] === here) {
                links[j].classList.add("is-active");
                links[j].setAttribute("aria-current", "page");
            }
        }
    }

    /* --- Mobile menu ------------------------------------------------------- */

    function wireMenu(scope) {
        if (!scope) {
            return;
        }
        var toggle = scope.querySelector(".nav__toggle");
        var links = scope.querySelector(".nav__links");
        if (!toggle || !links) {
            return;
        }
        toggle.addEventListener("click", function () {
            var open = links.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }

    /* --- Dropdowns --------------------------------------------------------- */

    /* CSS already opens these on hover and focus-within; this adds click for
       touch devices, which have neither. */
    function wireDropdowns(scope) {
        if (!scope) {
            return;
        }
        var dds = scope.querySelectorAll(".nav__dd");

        function closeAll(except) {
            for (var k = 0; k < dds.length; k++) {
                if (dds[k] === except) {
                    continue;
                }
                dds[k].classList.remove("is-open");
                var b = dds[k].querySelector(".nav__dd-btn");
                if (b) {
                    b.setAttribute("aria-expanded", "false");
                }
            }
        }

        for (var i = 0; i < dds.length; i++) {
            (function (dd) {
                var btn = dd.querySelector(".nav__dd-btn");
                if (!btn) {
                    return;
                }
                btn.addEventListener("click", function (event) {
                    event.preventDefault();
                    closeAll(dd);
                    var open = dd.classList.toggle("is-open");
                    btn.setAttribute("aria-expanded", open ? "true" : "false");
                });
            })(dds[i]);
        }

        document.addEventListener("click", function (event) {
            if (!event.target.closest || !event.target.closest(".nav__dd")) {
                closeAll(null);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeAll(null);
            }
        });
    }

    /* --- Footer year ------------------------------------------------------- */

    function stampYear(scope) {
        if (!scope) {
            return;
        }
        var slots = scope.querySelectorAll("[data-year]");
        for (var i = 0; i < slots.length; i++) {
            slots[i].textContent = String(new Date().getFullYear());
        }
    }

    /* --- Boot -------------------------------------------------------------- */

    function boot() {
        injectFavicon();
        load("header", "site-header").then(function (scope) {
            markActive(scope);
            wireMenu(scope);
            wireDropdowns(scope);
        });
        load("footer", "site-footer").then(stampYear);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }
})();
