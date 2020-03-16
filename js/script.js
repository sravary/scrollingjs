function animateItems(items) {
    items.each(function(i) {
        let $this = $(this);
        setTimeout(function() {
            $this.addClass('animate'); //addClass is a jquery method
        }, 100 * i); //100 x i is the index of each loop multiplied by 100ms to delay each and every item.
    });
}
animateItems($('.card'));