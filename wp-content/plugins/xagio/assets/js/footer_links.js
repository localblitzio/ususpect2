(function ($) {
    'use strict';
    $(document).ready(function () {
        if (xag_data.ps_user_membership == 'Free Trial' || xag_data.ps_user_membership == 'Forever Free') {
            $.post(xag_data.wp_get, 'action=xag_footer_links')
                .done(function (d) {
                    $('body').append(d.message)
                });
        }
    });

})(jQuery);
