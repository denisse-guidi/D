$(document).ready(function () {
    var burgerOpen = $ ('.js-burger-open');
});
burgerOpen.click(function () {
    $('html').toggleClass('burger-is-open');
});