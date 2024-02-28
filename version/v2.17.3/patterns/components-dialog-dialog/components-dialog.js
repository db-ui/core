/* global dialogPolyfill */

(function () {
	// Bind the click events for links (that we'll check for later on)
	document.addEventListener('click', (event) => {
		// Determine whether the target of the current link is a dialog
		if (
			event.target &&
			event.target.tagName &&
			event.target.tagName.toLowerCase() === 'a' &&
			event.target.attributes.href.value.slice(0, 1) === '#'
		) {
			const link = event.target;
			let type, dialog;

			// Determine whether the link is included within a dialog and is the close link
			if (
				link.attributes.href.value === '#' &&
				link.closest('dialog') &&
				link.matches('.elm-link.is-close')
			) {
				type = 'close';
				dialog = link.closest('dialog');
			} else if (
				link.hash &&
				document.querySelector(link.hash) &&
				document.querySelector(link.hash).tagName.toLowerCase() ===
					'dialog'
			) {
				type = 'dialog';
				dialog = document.querySelector(link.hash);
			} else {
				return;
			}

			// Check for whether the dialog has been registered even already
			if (type === 'dialog') {
				if (!dialog.dataset.polyfilled) {
					// Initially registering the dialog
					dialogPolyfill.registerDialog(dialog);

					dialog.dataset.polyfilled = true;
				}

				dialog.showModal();
			} else {
				dialog.close();
			}

			// Prevent the default behaviour of the link
			event.preventDefault();
		}
	});
})();
var mo = new MutationObserver(function() {
      if (!dialog.hasAttribute('open')) {
        registered.set(dialog, null);
      } else {
        // if open was cleared/set in the same frame, then the dialog will still be a modal (Y)
      }
    });
    mo.observe(dialog, {attributes: true, attributeFilter: ['open']});

    // on close, try to focus saved, if possible
    dialog.addEventListener('close', function(ev) {
      if (dialog.hasAttribute('open')) {
        return;  // in native, this fires the frame later
      }
      var savedFocus = registered.get(dialog);
      if (document.contains(savedFocus)) {
        var wasFocus = document.activeElement;
        savedFocus.focus();
        if (document.activeElement !== savedFocus) {
          wasFocus.focus();  // restore focus, we couldn't focus saved
        }
      }
      savedFocus = null;
    });

    // FIXME: If a modal dialog is readded to the page (either remove/add or .appendChild), it will
    // be a non-modal. It will still have its 'close' handler called and try to focus on the saved
    // element.
    //
    // These could basically be solved if 'close' yielded whether it was a modal or non-modal
    // being closed. But it doesn't. It could also be solved by a permanent MutationObserver, as is
    // done inside the polyfill.
  }
}());
