# ilw-footer

Links: **[ilw-footer in Builder](https://builder3.toolkit.illinois.edu/component/ilw-footer/index.html)** |
[Illinois Web Theme](https://webtheme.illinois.edu/) |
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The standard campus footer should appear at the bottom of every page of a campus website. The footer is placed in the footer slot of the ilw-page component.

The footer component defines an area at the bottom of the page which should contain (at a minimum) the site’s contact information and University-wide footer links. Additional features like social media icons, extra site navigation, and special highlighted content can be added either in columns or in a two-thirds-wide freeform area.

## Customizations and Notes

### Structured additions: Social media, University footer links

Social media section: The following sites’ URLs will be recognized and automatically replaced with the correct icon when contained in a Social Media div. (See the code examples for more details.)

- Facebook
- Instagram
- LinkedIn
- Pinterest
- Snapchat
- Twitter
- Weibo
- WhatsApp
- X
- YouTube

University standard footer elements: The following tags will automatically populate with the University-wide link for these items.

- Cookies management (necessary for GDPR compliance)
- Privacy statement
- Copyright statement
- Accessibility statement

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

The social media slot (`social`) should be used for social media links. Site icons will be added automatically for supported sites.

```html
<ilw-footer>
    <p slot="site-name"><a href="/">Sample Footer</a></p>

    <nav slot="social" aria-label="Social media">
      <ul>
        <li><a data-service="bluesky" href="http://example.com/">Bluesky</a></li>
        <li><a data-service="calendar" href="http://example.com/">Calendar</a></li>
        <li><a data-service="facebook" href="http://example.com/">Facebook</a></li>
        <li><a data-service="flickr" href="http://example.com/">flickr</a></li>
        <li><a data-service="instagram" href="http://example.com/">Instagram</a></li>
        <li><a data-service="linkedin" href="http://example.com/">LinkedIn</a></li>
        <li><a data-service="pinterest" href="http://example.com/">Pinterest</a></li>
        <li><a data-service="reddit" href="http://example.com/">Reddit</a></li>
        <li><a data-service="snapchat" href="http://example.com/">Snapchat</a></li>
        <li><a data-service="spotify" href="http://example.com/">Spotify</a></li>
        <li><a data-service="threads" href="http://example.com/">Threads</a></li>
        <li><a data-service="tiktok" href="http://example.com/">TikTok</a></li>
        <li><a data-service="twitter" href="http://example.com/">Twitter</a></li>
        <li><a data-service="weibo" href="http://example.com/">Weibo</a></li>
        <li><a data-service="whatsapp" href="http://example.com/">WhatsApp</a></li>
        <li><a data-service="x" href="http://example.com/">X</a></li>
        <li><a data-service="yelp" href="http://example.com/">Yelp</a></li>
        <li><a data-service="youtube" href="http://example.com/">YouTube</a></li>
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

To add a cookie button, use the cookies button slot (`cookies-button`) and include the OneTrust cookies consent script in the page header.

```html
<head>
    <!-- OneTrust Cookies Consent Notice start for illinois.edu -->
    <script src="https://onetrust.techservices.illinois.edu/scripttemplates/otSDKStub.js" id="onetrust-js"
    data-domain-script="26be7d61-2017-4ea7-8a8b-8f1704889763"></script>
    <script>
    function OptanonWrapper() { }
    </script>
    <!-- OneTrust Cookies Consent Notice end for illinois.edu -->
</head>

<!-- items removed for clarity -->

<ilw-footer>
<p slot="site-name"><a href="/">Site Name</a></p>
<button slot="cookies-button" id="ot-sdk-btn" class="ot-sdk-show-settings">About Cookies</button>
</ilw-footer>
```

### Custom Source Identifier

Links in the campus footer section (those added and maintained as part of the campus brand) contain a UTM code for better analysis of brand implementation. You may set a custom UTM source to distinguish your site's traffic within those reports. If no source is set, the default value (`Illinois_App`) will be used.

```html
<ilw-footer source="Sample_Site">
  <p slot="site-name">Sample Site</p>
</ilw-footer>
```

## External References

- [HTML Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [Link accessibility](https://www.w3.org/WAI/WCAG21/Techniques/html/H30.html)
- [Using aria-labelledby](https://www.w3.org/WAI/tutorials/forms/labels/#using-aria-labelledby)
