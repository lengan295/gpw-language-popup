// POPUP SELECT LANGAGE
(function ($) {
    var u_class = '.gtranslate_wrapper';

    $(document).ready(function () {
        // debugger;
        if ($('.logged-in').length) return;

        const modalConantainer = $('.modal-select-language');
        const selectedLanguage = localStorage.getItem('selectedLanguage');

        if (modalConantainer.length === 0 || selectedLanguage) {
            return;
        }
        $('.modal-select-language .kt-blocks-modal-link').click();

        function fire_event(element, event) {
            try {
                if (document.createEventObject) {
                    var evt = document.createEventObject();
                    element.fireEvent('on' + event, evt)
                } else {
                    var evt = document.createEvent('HTMLEvents');
                    evt.initEvent(event, true, true);
                    element.dispatchEvent(evt)
                }
            } catch (e) {
            }
        }

        $('#submit-lang-button').click(function () {
            debugger;
            let selectedLanguage = $('#lang-selector').val();

            let gt_selected = $(u_class + ' div.gt-selected')[0];
            fire_event(gt_selected, 'pointerenter');
            fire_event(gt_selected, 'click');

            let selector = u_class + ' a[data-gt-lang="' + selectedLanguage + '"]';
            let a = $(selector)[0];

            fire_event(a, 'click');
            fire_event(document, 'click');

            localStorage.setItem('selectedLanguage', selectedLanguage);
            modalConantainer.find('.kt-modal-close').click();
        });

    });
})(jQuery);
