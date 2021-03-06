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
