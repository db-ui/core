---
title: Link
state: inreview
---

## Variations/configurability

### Size

#### SCSS (recommended)

Extend one of the size placeholders in case that you don't want the default (regular): `%size-Small` or `%size-Large`

#### HTML attribute

You could set the different button sizes via the `data-size` attribute, the default is "regular" and is in that case optional.

### Icons

The following three `rel=*` annotated links even already include an icon by default - you could enhance those by your own declarations for further patterns of linked pages.

```css
[rel="configuration"]
[rel="messages"]
[rel="account"]
```

## Title attribute

Advice: Don't provide title attributes to links with identical text nodes. Since the text node is already perfectly visible, this is completely redundant. It doesn't even add anything for screen readers except — in some cases — repetition.

## Button vs. Link

> The HTML elements for buttons and links describe a very specific type of action that is going to be taken when they are used. It is important you know when to use which, as the distinction matters:
>
> - Use a link when you’re navigating to another place, such as: a "view all" page, "Jane Chen" profile, a page "skip link" etc.
> - Use buttons when you are performing an action, such as: "submit," "merge," "create new," "upload," etc.
> - An action is almost always on the same page

Source: <https://www.lightningdesignsystem.com/components/buttons/#About-Buttons>

Further argumentations:

- <https://medium.com/simple-human/but-sometimes-links-look-like-buttons-and-buttons-look-like-links-9b371c57b3d2>
- <https://uxmovement.com/buttons/when-to-use-a-button-or-link/>

### JavaScript "links"

> Never use `"javascript:" "#"` or similar as the value of an `href` attribute. The purpose of the `href` attribute is to specify a URL only. If you wish to run JavaScript on an element click, use a `button` instead.

Source: <https://ebay.gitbook.io/mindpatterns/antipatterns/javascript-href>

## Further relevant attributes

Source: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a>

### hreflang

> This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt).

### ping

> Contains a space-separated list of URLs to which, when the hyperlink is followed, `POST` requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking/analytics.

### rel

> Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).

### target

> Specifies where to display the linked URL. It is a name of, or keyword for, a browsing context: a tab, window, or `<iframe>`

> Note: When using `target`, consider adding `rel="noreferrer"` to avoid exploitation of the `window.opener API`. See [Security concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Security_and_privacy_concerns) section.

> Note: Linking to another page using `target="_blank"` will run the new page on the same process as your page. If the new page is executing expensive JS, your page's performance may suffer. To avoid this use `rel="noopener"`.

### `aria-disabled`

Instead of the `disabled`-attribute we're using for the `button` pattern to define a disabled state, we couldn't use this attribute on the `link` pattern, as `disabled` isn't a valid attribute an `a` HTML element, compare to e.g. the [W3C ARIA documentation](https://w3c.github.io/html-aria/#att-disabled) and the [W3C spec](https://html.spec.whatwg.org/#the-a-element):

> Use the disabled attribute on any element that is allowed the disabled attribute in HTML.

> Only use the aria-disabled attribute for elements that are not allowed to have a disabled attribute in HTML.

Please keep in mind to only include a disabled link sparly, as it's not recommended at all, compare to e.g. <https://css-tricks.com/how-to-disable-links/#aa-just-dont-do-it>

## Ambiguous labels

Please keep in mind to use unambiguous labels: <https://ebay.gitbook.io/mindpatterns/antipatterns/ambiguous-label>

## Link functionality caveat

> The `aria-disabled="true"` uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.

Adapted from: <https://getbootstrap.com/docs/4.3/components/buttons/#link-functionality-caveat>

[inspirational sources for this page]: # "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
[inspirational sources for this page]: # "https://www.uiguideline.com/components/link"
[inspirational sources for this page]: # "http://uxmovement.com/buttons/when-to-use-a-button-or-link/"
[inspirational sources for this page]: # "https://medium.com/simple-human/but-sometimes-links-look-like-buttons-and-buttons-look-like-links-9b371c57b3d2"
[inspirational sources for this page]: # "https://gomakethings.com/better-more-accessible-active-link-styling/"
