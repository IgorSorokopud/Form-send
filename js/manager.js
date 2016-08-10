var Manager = {
    elementQty: 0,
    resultTable: '#resultTableID',
    attachedLinks: '#attached-links',

    eventsManager: function () {

//        event-checkbox
        var self = this;
        jQuery('.button-add').toggle(function () {
            self.buttonAddAll(this);
        }, function () {
            self.buttonRemoveAll(this);
        });

//        event-all-checked
        jQuery('input[type=checkbox]').change(function () {
            self.changeCheckbox(this);
            self.addElements(this);
        });

//        delete
        jQuery(self.attachedLinks).on('click', '.block-checkbox', function () {
            event.preventDefault();
            jQuery(this).remove();
            var sumRemove = jQuery(this).length;
            self.elementCounter(sumRemove * -1);
        });

        jQuery('form').submit(function () {
            event.preventDefault();
            self.infoCustomer();
        });
    },

    buttonAddAll: function (value) {
        var parentButton = '#' + jQuery(value).text('remove all').parent().attr('id');
        allChecked = jQuery(parentButton + " input:checkbox:not(:checked)").attr('checked', 'true');
        Manager.addElements(allChecked);
    },

    buttonRemoveAll: function (value) {
        allChecked.removeAttr('checked');
        jQuery(value).text('add all');
        Manager.cleaningForm();
    },

//    when-checked-all
    changeCheckbox: function (changeCheckbox) {
        var idParent = "#" + jQuery(changeCheckbox).parent().closest('section').attr('id');
        var sumChecked = jQuery(idParent + ' input:checked').length;
        var allCheckbox = jQuery(idParent + ' input').length;
        if (sumChecked == allCheckbox) {
            var idButton = '#' + jQuery(idParent + ' a').attr('id');
            Manager.buttonAddAll(idButton);
        }
    },

    addElements: function (changeCheckbox) {
        qty = 1;
        if (changeCheckbox.length) {
            qty = changeCheckbox.length;
        }
        var checkboxText = jQuery(changeCheckbox).parent().clone().append('<a href="#"></a>');
        jQuery(checkboxText).appendTo(Manager.attachedLinks);
        Manager.elementCounter(qty)
    },

    cleaningForm: function () {
        var sumRemove = jQuery(Manager.attachedLinks + ' .block-checkbox').remove().length;
        Manager.elementCounter(sumRemove * -1);
    },

    infoCustomer: function () {
       var result = jQuery(Manager.resultTable + ' .field');
        result.each(function() {
            alert("Your " + jQuery(this).attr('name')+ ": " + jQuery(this).val());
        });
        alert(jQuery(Manager.resultTable + ' h3').text());
    },

    elementCounter: function (qty) {
        this.elementQty = this.elementQty + qty;
        jQuery(Manager.resultTable + ' h3').text(this.elementQty + " attached links");
    },

    init: function () {
        this.eventsManager();
    }
}
