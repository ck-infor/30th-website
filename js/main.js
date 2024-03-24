var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
        Theory by TEMPLATED
        templated.co @templatedco
        Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
        */

(function($) {

    // Breakpoints.
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Off-Canvas Navigation.

        // Navigation Panel.
        $(
                '<div id="navPanel">' +
                $('#nav').html() +
                '<a href="#navPanel" class="close"></a>' +
                '</div>'
            )
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'left'
            });

        // Fix: Remove transitions on WP<10 (poor/buggy performance).
        if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
            $('#navPanel')
            .css('transition', 'none');

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0) {

            $window.on('resize', function() { $window.trigger('scroll'); });

            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function() { $header.addClass('alt'); },
                enter: function() { $header.removeClass('alt'); },
                leave: function() { $header.addClass('alt'); }
            });

        }
    });

})(jQuery);

}
/*
     FILE ARCHIVED ON 16:13:45 Jul 17, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:04:18 Feb 26, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.059
  cdx.remote: 0.093
  esindex: 0.01
  LoadShardBlock: 212.938 (6)
  PetaboxLoader3.datanode: 196.397 (8)
  PetaboxLoader3.resolve: 1140.932 (3)
  load_resource: 1178.145 (2)
*/