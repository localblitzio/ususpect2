(function ($) {
    'use strict';

    let actions = {
        trackAffiliateClicks: function () {
            $(document).on('click', '.xag-tracking', function (e) {
                let id = $(this).data('id');
                let ms = $(this).hasClass('masked') ? '&masked=yes' : '';
                $.post(xag_data.wp_post, 'action=xag_trackShortcode&id=' + id + ms);
            });
        }
    };

    /**
     *  Global doc.ready function
     */
    $(document).ready(function () {
        actions.trackAffiliateClicks();
    });

})(jQuery);