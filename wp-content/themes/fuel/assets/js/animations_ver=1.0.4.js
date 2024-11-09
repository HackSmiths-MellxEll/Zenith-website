(function() {
    'use strict';

    // Calculate clients viewport
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0];

    var x = w.innerWidth || e.clientWidth || g.clientWidth; // Viewport Width
    var y = w.innerHeight || e.clientHeight || g.clientHeight; // Viewport Height

    // Global vars
    var htmlEl = document.documentElement;
    var body = document.body;

    document.addEventListener('DOMContentLoaded', function() {

        // On scroll
        var fnOnScroll = function() {
            var animateBlocks = document.querySelectorAll('.image-animation-from-bottom, .image-animation-from-top, .image-animation-from-left, .image-animation-from-right, .animate-from-top, .animate-from-bottom, .animate-from-left, .animate-from-right');

            animateBlocks.forEach(function(block) {
                block.classList.remove('is-loading');

                var blockRect = block.getBoundingClientRect();
                var animateBlockOffsetTop = blockRect.top + window.pageYOffset;
                var activationOffset;

                // Determine distance to initiate animation relative to viewport height
                if (block.dataset.offset) {
                    activationOffset = parseFloat(block.dataset.offset);
                } else if (block.classList.contains('image-animation-from-bottom')) {
                    activationOffset = 1.2;
                } else {
                    activationOffset = 1.1;
                }

                if (window.scrollY > animateBlockOffsetTop - (y / activationOffset)) {
                    block.classList.add('scrolled-to');
                }
            });
        };

        fnOnScroll();

        window.addEventListener('scroll', function() {
            setTimeout(function() {
                fnOnScroll();
            }, 300);
        });
    });
})();
