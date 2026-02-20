# ilw-footer

Links: **[ilw-footer in Builder](https://builder3.toolkit.illinois.edu/component/ilw-footer/index.html)** |
[Illinois Web Theme](https://webtheme.illinois.edu/) |
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The standard campus footer should appear at the bottom of every page of a campus website. The footer is placed in the footer slot of the ilw-page component.

The footer component defines an area at the bottom of the page which should contain (at a minimum) the site’s contact information and University-wide footer links. Additional features like social media icons, extra site navigation, and special highlighted content can be added either in columns or in a two-thirds-wide freeform area.

## Properties

| Property | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| `source` | Custom utm tracking code for campus links. Applied to the `ilw-footer` tag. |

## Slots

| Slot                    | Description                                                      |
|-------------------------|------------------------------------------------------------------|
| `slot="primary-unit"`   | Assigns unit name to left column.                                |
| `slot="site-name"`      | Assigns site name to left column.                                |
| `slot="address"`        | Assigns address to left column. (Note icon **DEPRECATION**.)     |
| `slot="social"`         | Assigns social media links to left column.                       |
| `slot="actions"`        | Assigns call to action links to right column.                    |
| `slot="cookies-button"` | **DEPRECATED** Includes cookie banner and button in lower edge.  |
| `slot="legal-link"`     | Adds additional links to legal and policy section in lower edge. |

## Customizations and Notes

### Columns or freeform space

You can choose between a multi-column layout or a freeform space in the right two-thirds of the footer.
Any standard HTML is allowed in this space, though it is recommended to focus on information of site-wide importance that doesn’t fit in the header.
For sites with multiple sponsorships, this is a common location to collect up the iconography of the various sponsors.

## Code Examples

### Unit Information

The footer contains slots for site name (`site-name`), primary unit (`primary-unit`), and address (`address`).

```html
<ilw-footer>
    <p slot="primary-unit"><a href="/">Strategic Communications and Marketing</a></p>

    <p slot="site-name"><a href="http://example.com/">Example Site Name</a></p>
    
    <address slot="address">
      <p>5678 West Example Street<br>
        MC-0000<br>
        Champaign, IL 61820</p>
      <p>Email: <a href="mailto:address@example.com">address@example.com</a></p>
      <p>Phone: <a href="tel:+12175551234">(217) 555-1234</a></p>
    </address>
</ilw-footer>
```

### Social Media

The social media slot (`social`) should be used for social media links. The use of [ilw-icon components](https://github.com/web-illinois/ilw-icon)
is recommended.

**DEPRECATED:** Automated icon support using the `data-service` attribute is deprecated.

```html
<ilw-footer>
    <p slot="site-name"><a href="/">Sample Footer</a></p>

    <nav slot="social" aria-label="Social media">
      <ul>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="bluesky"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="calendar"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="facebook"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="flickr"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="github"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="instagram"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="linkedin"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="mastodon"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="pinterest"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="reddit"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="snapchat"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="spotify"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="threads"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="tiktok"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="twitter"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="weibo"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="whatsapp"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="x"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="yelp"></ilw-icon></a></li>
        <li><a href="http://example.com/"><ilw-icon size="44px" icon="youtube"></ilw-icon></a></li>  
      </ul>
    </nav>
</ilw-footer>
```

### Action Links

Use the action slot (`actions`) for call-to-action links.

```html
<ilw-footer>
    <p slot="site-name"><a href="/">Sample Footer</a></p>

    <div slot="actions">
      <a href="/give">Give</a>
      <a href="/apply">Apply</a>
    </div>
</ilw-footer>
```

### Menu Columns

Up to three columns can be defined in the right two-thirds of the footer.

```html
<ilw-footer>
    <nav class="ilw-footer-menu" aria-labelledby="menu-1">
      <h2 id="menu-1">First Menu</h2>
      <ul>
        <li><a href="http://example.com/">Link one</a></li>
        <li><a href="http://example.com/">Link two</a></li>
        <li><a href="http://example.com/">Link three</a></li>
        <li><a href="http://example.com/">Link four</a></li>
      </ul>
    </nav>

    <nav class="ilw-footer-menu" aria-labelledby="menu-2">
      <h2 id="menu-2">Second Menu</h2>
      <ul>
        <li><a href="http://example.com/">Link one</a></li>
        <li><a href="http://example.com/">Link two</a></li>
        <li><a href="http://example.com/">Link three</a></li>
        <li><a href="http://example.com/">Link four</a></li>
      </ul>
    </nav>

    <nav class="ilw-footer-menu" aria-labelledby="menu-3">
      <h2 id="menu-3">Third Menu</h2>
      <ul>
        <li><a href="http://example.com/">Link one</a></li>
        <li><a href="http://example.com/">Link two</a></li>
        <li><a href="http://example.com/">Link three</a></li>
        <li><a href="http://example.com/">Link four</a></li>
      </ul>
    </nav>
</ilw-footer>
```

### Cookie Button

**Deprecated:** The Illinois cookie button and script are now included by default. During the deprecation period, existing cookie buttons will be honored. The Illinois cookie button will be added only if no content has been added to the `cookies-button` slot.

To add a cookie button, use the cookies button slot (`cookies-button`) and include the cookies consent script in the page header.

For consistency and future compatibility, the `.ilw-button` class should be added to the button or link element.

```html
<head>
    <!-- Illinois Cookies Consent Notice start for illinois.edu -->
    <script src="https://onetrust.techservices.illinois.edu/scripttemplates/otSDKStub.js" id="cookie-js"
    data-domain-script="uiuc"></script>
    <script>
    function OptanonWrapper() { }
    </script>
    <!-- Illinois Cookies Consent Notice end for illinois.edu -->
</head>

<!-- items removed for clarity -->

<ilw-footer>
<p slot="site-name"><a href="/">Site Name</a></p>
<button slot="cookies-button" id="ot-sdk-btn" class="ot-sdk-show-settings ilw-button">About Cookies</button>
</ilw-footer>
```

### Legal Links

The following tags will automatically populate with the University-wide link for these items.

- Privacy statement
- Copyright statement
- Accessibility statement

Additional legal links may be added by targeting the `legal-link` slot.

```html
<ilw-footer>
  <a href="#" slot="legal-link">Link 1</a>
  <a href="#" slot="legal-link">Link 2</a>
</ilw-footer>
```

### Custom Source Identifier

Links in the campus footer section (those added and maintained as part of the campus brand) contain a UTM code for better analysis of brand implementation. You may set a custom UTM source to distinguish your site's traffic within those reports. If no source is set, the default value (`Illinois_App`) will be used.

```html
<ilw-footer source="Sample_Site">
  <p slot="site-name">Sample Site</p>
</ilw-footer>
```

## Deprecations

**Cookies button slot:** The Illinois cookie button and script are now included by default. During the deprecation period, existing cookie buttons will be honored. Remove references to `slot="cookies-button"`.

**Social icon data-service:** Automated social media icon selection using the link's `data-service` attribute is no longer recommended. Existing `data-service`-enabled links will be honored during the deprecation period. Update links by removing `data-service="icon"` and replacing link text with the corresponding ilw-icon component.

## External References

- [HTML Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [Link accessibility](https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html)
- [Using aria-labelledby](https://www.w3.org/WAI/tutorials/forms/labels/#using-aria-labelledby)
