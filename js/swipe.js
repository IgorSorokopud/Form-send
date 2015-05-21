var Swipe = {

    events: function (swipe, animate) {

//        event-swipe
        var self = this;
        jQuery(swipe).on('swipeleft', function () {
            self.moveRight(animate);
            self.indicatorMoveRight()
        });

        jQuery(swipe).on('swiperight', function () {
            self.moveLeft(animate);
            self.indicatorMoveLeft()
        });
    },

    //    swipe
    moveLeft: function (animate) {
        jQuery(animate).animate({
            marginLeft: 0
        }, 200, function () {
        });
    },

    moveRight: function (animate) {
        jQuery(animate).animate({
            marginLeft: -1048
        }, 200, function () {
        });
    },

    indicatorMoveRight: function () {
        jQuery('#indicator').children().removeClass('active').next().addClass('active');
    },

    indicatorMoveLeft: function () {
        jQuery('#indicator').children().removeClass('active').prev().addClass('active');
    },

    init: function (swipe, animate) {
        this.events(swipe, animate);
    }
};

