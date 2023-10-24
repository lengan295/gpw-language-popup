
// POPUP SELECT LANGAGE
(function ($) {
    $(document).ready(function () {
        // debugger;
        if ($('.logged-in').length) return;

        const modalConantainer = $('.modal-select-language');
        const selectedLanguage = localStorage.getItem('selectedLanguage');

        if (modalConantainer.length == 0 || selectedLanguage) {
            return;
        }
        $('.modal-select-language .kt-blocks-modal-link').click();

        $('#select_currency').change(function () {
            let selectedCurrency = $(this).val();
            if (selectedCurrency !== 'VND') {
                $('.confirm_currency_wrapper').show();
            } else {
                $('.confirm_currency_wrapper').hide();
            }
        });

        $(document).on('click', '.popup-language-currency-submit', function () {
            let selectedCurrency = $('#select_currency').val();
            let confirm_checkbox = $('#confirm_currency');

            if (selectedCurrency !== 'VND' && !confirm_checkbox.is(':checked')) {
                $('.confirm_currency_wrapper label').css("color", "red");
                return;
            }

            let selectedLanguage = $('#select_language').val();

            const uris = window.location.pathname.split('/');
            localStorage.setItem('selectedLanguage', selectedLanguage);

            if (selectedLanguage === 'en') {
                window.location.replace('/?site_currency=' + selectedCurrency);
            } else {
                window.location.replace(addReplaceLangCode(window.location.href, selectedLanguage) + '?site_currency=' + selectedCurrency);
            }
        });

    });

    function addReplaceLangCode(url, langCode) {
        var a = document.createElement('a');
        a.href = url;

        var paths = a.pathname.split('/');
        paths.shift();

        if (paths[0].length == 2) {
            paths[0] = langCode;
        } else {
            paths.unshift(langCode);
        }
        return a.protocol + '//' +
            a.host + '/' + paths.join('/') +
            (a.search != '' ? a.search : '') +
            (a.hash != '' ? a.hash : '');
    }
})(jQuery);
