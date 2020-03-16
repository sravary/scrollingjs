function animateItems(items) {
    items.each(function(i) {
        let $this = $(this);
        setTimeout(function() {
            $this.addClass('animate'); //addClass is a jquery method
        }, 100 * i); //100 x i is the index of each loop multiplied by 100ms to delay each and every item.
    });
}
animateItems($('.services .card'));

function isFullyVisible(element) {
    let bottomOfElement = element.offset().top + element.height();
    let isVisible = bottomOfElement <= ($(window).scrollTop() + $(window).height());
    return isVisible;
}

$(window).scroll(function() {
    if (isFullyVisible($('.feature').first())) {
        animateItems($('.feature'));
    }
});