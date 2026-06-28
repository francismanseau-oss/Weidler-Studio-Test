(function () {
    if (document.querySelector(".home-bg-deco")) return;

    var script = document.currentScript;
    var base = script && script.src ? script.src.replace(/[^/]+$/, "") : "js/";
    var url = base + "site-bg.html";

    fetch(url)
        .then(function (response) {
            if (!response.ok) throw new Error("site-bg.html");
            return response.text();
        })
        .then(function (html) {
            if (document.querySelector(".home-bg-deco")) return;
            var template = document.createElement("template");
            template.innerHTML = html.trim();
            var node = template.content.firstElementChild;
            if (node) document.body.insertBefore(node, document.body.firstChild);
        })
        .catch(function () { /* fond décoratif optionnel */ });
})();
