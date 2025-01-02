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
- Whatsapp
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

```html
<ilw-footer></ilw-footer>
```

## Accessibility Notes and Use

Consider accessibility, both for building the component and for its use:

- Is there sufficient color contrast?
- Can the component be fully understood without colors?
- Does the component need alt text or ARIA roles?
- Can the component be navigated with a keyboard? Is the tab order correct?
- Are focusable elements interactive, and interactive elements focusable?
- Are form fields, figures, fieldsets and other interactive elements labelled?

## External References
