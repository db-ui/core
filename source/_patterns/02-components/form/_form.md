---
title: Forms
state: complete
---

## General information

Forms in general are being built out of elements like form, input, textarea, button and fieldset.

For more information reach out to <https://developer.mozilla.org/en-US/docs/Learn/Forms>

## Best practices

Best practice, research insights and examples: <https://gerireid.com/forms.html>

## Form validation

It's best to use the built-in and standard form validation, as these are standards based API implementations, that are as well providing compatible and consistent states both for CSS and JS:

- Interoperability
- semantic (machine readable/understandable) state, even also keep a11y in mind
- Single source of truth regarding the form (elements) state within the browser itself
- Built-in localized validation messages

Additionally this way you're following the principles of Progressive Enhancement - and in other words, any JavaScript only solution doesn't provide a graceful degradation and puts that whole functionality to the weakest layer in the stack even only.

Nevertheless additionally to the browser built-in pseudo-selector `:user-invalid` we're providing styling for the [`aria-invalid="true"` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute) on the elements `input`, `radio`, `select` and `textarea`.
We can't toggle any given/static attribute in the DB UI Core product itself, as we don't want to use JavaScript in this basic product. As you'd also need to add individual error messages, please find some inspiration on the necessary HTML code implementation e.g. on <http://mars.dequecloud.com/demo/form-alert3.htm>

Please find some more informations on the following pages:

- <https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation>
- <https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation>

## Accessibility

Forms can be tricky, so read through the [W3C forms WAI tutorials](https://www.w3.org/WAI/tutorials/forms/) for some guidance around how to implement accessibility successfully.

[inspirational sources for this page]: # "https://getbootstrap.com/docs/5.0/forms/overview/"
