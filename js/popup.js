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
		if( classie.has( overlay, 'open' ) ) {
			document.body.style.overflow = 'auto';
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
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