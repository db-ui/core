---
title: Button
state: complete
---

## Variations/configurability

### Variant

#### SCSS (recommended)

Extend one of the variant placeholders: `%variant-secondary-inverted`, `%variant-secondary` or `%variant-tertiary`

#### HTML attribute

You could set the different button variants via the `data-variant` attribute.

### Size

#### SCSS (recommended)

Extend one of the size SCSS placeholders in case that you don't want the default (medium): `%size-XSmall`, `%size-Small` or `%size-Large`

#### HTML attribute

You could set the different button sizes via the `data-size` attribute, the default is "medium" and in that case is optional.

### Width

#### SCSS (recommended)

Extend the width placeholders in case that you don't want the default (content-length sized): `%width-Full`

#### HTML attribute

You could differentiate the button width via the `data-width` attribute, choose value "full" for a button taking the whole containers width; the default is "auto" and in that case is optional.

## Usability

> Buttons should be used in situations where users might need to:
>
> - submit a form
> - begin a new task
> - trigger a new UI element to appear on the page
> - specify a new or next step in a process

### Button vs. Link

> The HTML elements for buttons and links describe a very specific type of action that is going to be taken when they are used. It is important you know when to use which, as the distinction matters:
>
> - Use a link when you’re navigating to another place, such as: a "view all" page, "Jane Chen" profile, a page "skip link" etc.
> - Use buttons when you are performing an action, such as: "submit," "merge," "create new," "upload," etc.
> - An action is almost always on the same page

Source: <https://www.lightningdesignsystem.com/components/buttons/#About-Buttons>

Further argumentations:

- <https://medium.com/simple-human/but-sometimes-links-look-like-buttons-and-buttons-look-like-links-9b371c57b3d2>
- <https://uxmovement.com/buttons/when-to-use-a-button-or-link/>

### "Hand" cursor / pointer

We don't use the "hand" cursor / pointer for our buttons, as this is reserved for links even only; for more information have a look at articles like <https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b> and <https://hiddedevries.nl/en/blog/2016-08-06-some-pointers-on-default-cursors> or people who though this through like <https://ux.stackexchange.com/questions/105024/why-dont-button-html-elements-have-a-css-cursor-pointer-by-default#105027> or <https://github.com/necolas/normalize.css/issues/371#issuecomment-60072171> and the UI guidelines from Apple, Microsoft, Google, etc.

[Microsoft’s design guides](https://docs.microsoft.com/de-de/windows/win32/uxguide/inter-mouse) talk about weak affordance:

> Text and graphics links use a hand […] pointer […] because of their weak affordance. While links may have other visual clues to indicate that they are links (such as underlines and special placement), displaying the hand pointer on hover is the definitive indication of a link. To avoid confusion, it is imperative not to use the hand pointer for other purposes. For example, command buttons already have a strong affordance, so they don’t need a hand pointer. The hand pointer must mean “this target is a link” and nothing else.

Apple’s Human Interface Guidelines states that the hand cursor should be used when “the content is a URL link”.

[W3C User Interface guidelines](https://www.w3.org/TR/css-ui-3/#cursor) says the same thing again with “The cursor is a pointer that indicates a link”.

### Disabled button state

The disabled state of the button is defined by a change in opacity for good reasons:

> A transparent button blends into the background more, while a gray one remains in the foreground (unless the background is gray). Foreground elements are more noticeable to users. They tend to view them as interactive, which means they’re more likely to interact with a grayed out disabled button.

For much more information visit <https://uxmovement.com/buttons/why-you-shouldnt-gray-out-disabled-buttons/>.

In general disabling buttons is a controversial topic in UX Design, and should get only used well-considered; compare to these articles on how to use `disabled` buttons only selectively: <https://stories.justinewin.com/disabled-buttons-dont-have-to-suck-10da0bb6d37e>, <https://axesslab.com/disabled-buttons-suck/> and <https://www.smashingmagazine.com/2021/08/frustrating-design-patterns-disabled-buttons/>

## Ambiguous labels

Please keep in mind to use unambiguous labels: <https://ebay.gitbook.io/mindpatterns/antipatterns/ambiguous-label>

[inspirational sources for this page]: # "https://uxmovement.com/buttons/why-you-shouldnt-gray-out-disabled-buttons/"
[inspirational sources for this page]: # "https://uxmovement.com/buttons/the-challenges-with-single-toggle-buttons/"
[inspirational sources for this page]: # "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
[inspirational sources for this page]: # "https://www.uiguideline.com/components/button"
[inspirational sources for this page]: # "https://designsystem.gov.au/components/buttons/"
[inspirational sources for this page]: # "http://uxmovement.com/buttons/when-to-use-a-button-or-link/"
[inspirational sources for this page]: # "https://medium.com/simple-human/but-sometimes-links-look-like-buttons-and-buttons-look-like-links-9b371c57b3d2"
