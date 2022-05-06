---
title: Input
state: complete
---

## `label` and `input` elements code structure

We're using the construct of `label` and `input` elements shown below (both their order and not nesting them, as a few other frameworks do) for two good reasons:

- "Generally, explicit labels are better supported by assistive technology." - compare to the [W3C spec](https://www.w3.org/WAI/tutorials/forms/labels/#associating-labels-implicitly), seems to be a [WCAG criteria](https://www.w3.org/TR/WCAG20-TECHS/H44.html) that for, too.
- We could easily control the styling depending on the `input` elements (pseudo-)states w/o the need for JavaScript

## Autofill

For heavily supporting the user on autofilling form fields (not only, but especially on mobile browsing) with information even already available on their devices, you could use the `autocomplete` attribute, as described e.g. here <https://cloudfour.com/thinks/autofill-what-web-devs-should-know-but-dont/>

The attribute doesn't even only take boolean values, but even also a list of specific field types, as described in the specification: <https://html.spec.whatwg.org/multipage/forms.html#inappropriate-for-the-control>

## Form validation

Please have a look especially at the section for form validation within the overall [components/forms](../components-form/index.html) page.

Additionally to the browser built-in pseudo-selector `:invalid` we're providing styling for the [`aria-invalid="true"` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute) as well.

## Accessibility support

For our special construct (the order of the `label` and `input` HTML tags) we need to additionaly set some further attributes on those HTML tags to better support assistive tools (screenreaders like JAWS and VoiceOver); set the `aria-labelledby`-attribute on the `input` and related `id` on the `label` as well as `aria-hidden="true"`, e.g. like this:

```html
<input
	type="text"
	class="elm-input"
	placeholder="Projekt Name"
	name="input01"
	id="input01"
	aria-labelledby="input01-label"
/>
<label class="elm-label" for="input01" aria-hidden="true" id="input01-label"
	>Textlabel</label
>
```

We've conducted some tests with those assistive tools that lead to the conclusion that either the labels content hasn't been read out to the screenreader user on those form fields directly, but the labels content has been read again after the form field e.g. on VoiceOver. So those declarations are necessary for this kind of HTML construct, that is especially relevant for form validation and floating label functionality via CSS only.

[inspirational sources for this page]: # "https://www.uiguideline.com/components/input"
[inspirational sources for this page]: # "https://www.bbc.co.uk/gel/guidelines/inputs"
