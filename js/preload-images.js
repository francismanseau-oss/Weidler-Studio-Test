/**
 * Précharge une liste d’images (URLs absolues ou relatives à la page).
 * Usage :
 *   <body data-preload-images="../assets/a.png,../assets/b.png">
 *   ou window.WeidlerPreload.images(["../assets/a.png"]);
 */
(function () {
    function preloadImages(urls) {
        if (!urls || !urls.length) return;
        urls.forEach(function (url) {
            if (!url) return;
            var img = new Image();
            img.decoding = "async";
            img.src = url;
        });
    }

    function fromDataAttribute() {
        var host = document.body;
        if (!host) return;
        var raw = host.getAttribute("data-preload-images");
        if (!raw) return;
        preloadImages(
            raw.split(",").map(function (part) {
                return part.trim();
            }).filter(Boolean)
        );
    }

    window.WeidlerPreload = {
        images: preloadImages
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", fromDataAttribute);
    } else {
        fromDataAttribute();
    }
})();
