(function() {
	var triggerBttns = document.getElementsByClassName( 'trigger-overlay'),
		overlay = document.getElementsByClassName('overlay'),
		closeBttns = document.getElementsByClassName( 'overlay-close' ),
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay(whichid) {
		overlay = document.getElementById(whichid +"_");
		console.log("hi");
		if( overlay.classList.contains('open')) {
			document.body.style.overflow = 'auto';
			overlay.classList.remove('open');
			overlay.classList.add('close');
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				overlay.classList.remove('close');
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !overlay.classList.contains('close')) {
			overlay.classList.add('open');
			document.body.style.overflow = 'hidden';
		}
	}

	Array.from(triggerBttns).forEach(function(triggerBttn) {
		triggerBttn.addEventListener( 'click', function() { toggleOverlay(triggerBttn.id); });
	});
	
	Array.from(closeBttns).forEach(function(closeBttn) {
		closeBttn.addEventListener( 'click', function() { toggleOverlay(closeBttn.id) });
	});

})();