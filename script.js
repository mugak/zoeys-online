const swup = new Swup({
    linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
});
// document.addEventListener('DOMContentLoaded', function () {
//     el = document.querySelector("#container");
//     if(el) {
//         el.addEventListener("click", () => { window.location.assign("/pricing.html")}, false);
//     }
// });

