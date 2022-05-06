---
title: Dialog
state: complete
---

## Usage notes

The `<dialog>` element is a native HTML element that provides a common JavaScript API with events, properties and methods: <https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement>

> The `::backdrop` CSS pseudo-element can be used to style behind a `<dialog>` element, for example to dim inaccessible content whilst a modal dialog is active. The backdrop is only drawn when the dialog element is displayed with `HTMLDialogElement.showModal()`.

> `<form>` elements can be integrated within a dialog by specifying them with the attribute `method="dialog"`. When such a form is submitted, the dialog is closed with its `returnValue` attribute set to the `value` of the form's submit button that was used.

Source: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#Usage_notes>

## JavaScript dependencies

- Dialog polyfill: As some [older browsers don't fully support the native dialog HTML tag so far](https://caniuse.com/#feat=dialog) we'll [have to use a polyfill](https://github.com/GoogleChrome/dialog-polyfill), that is being included into the file `source/js/plugins.min.js` during build, as well as [a snippet that enforces to return focus to the previously focused element on the page after closing the dialog](https://gist.github.com/samthor/babe9fad4a65625b301ba482dad284d1), which is included within `source/js/plugins.min.js` as well. Good news: With Safari 15.4 the last remaining of the modern browsers shipped the `dialog` elements support: <https://webkit.org/blog/12209/introducing-the-dialog-element/>
- The dialog polyfill itself is being initialized via our individually developed [`dialog.script.js`](https://github.com/db-ui/core/blob/main/source/_patterns/02-components/dialog/dialog.script.js), which is being included into `source/js/main.min.js`during build.

**Please feel free to include and initialize all of those scripts according to your JavaScript ecosystem individually, and especially develop the logic out of [`dialog.script.js`](https://github.com/db-ui/core/blob/main/source/_patterns/02-components/dialog/dialog.script.js) on your own for your specific context and techstack.**

## Accessibility

This pattern has been tested and approved regarding accessibility.

[inspirational sources for this page]: # "https://www.uiguideline.com/components/modal"
