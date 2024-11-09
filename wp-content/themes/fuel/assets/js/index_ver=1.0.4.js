document.addEventListener("DOMContentLoaded", function() {
	'use strict';

	var offset = 100;
	var speed = 500;
	var duration = 900;

	// Scroll event
	window.addEventListener('scroll', function() {
		var scrollToTopButtons = document.querySelectorAll('.scroll-to-top');
		if (window.scrollY < offset) {
			scrollToTopButtons.forEach(function(button) {
				button.style.transition = `opacity ${duration}ms`;
				button.style.opacity = 0;
				setTimeout(function() {
					button.style.display = 'none';
				}, duration);
			});
		} else {
			scrollToTopButtons.forEach(function(button) {
				button.style.display = 'block';
				setTimeout(function() {
					button.style.transition = `opacity ${duration}ms`;
					button.style.opacity = 1;
				}, 10); // small delay to ensure display change before transition
			});
		}
	});

	// Click event for scroll to top
	document.querySelectorAll('.scroll-to-top').forEach(function(button) {
		button.addEventListener('click', function(event) {
			event.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	});

    // Toggle content on trigger click
    var triggers = document.querySelectorAll('.trigger');
    var contents = document.querySelectorAll('.content');

    triggers.forEach(function(trigger) {
        trigger.style.cursor = 'pointer';
    });

    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
