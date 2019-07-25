---
title: Manipulating SVGs using CSS
date: '2019-03-24T22:30:27.000Z'
---

At the [company I currently work for](https://raceroster.com), I've been experimenting with using SVGs to show real-time theme updates as a user changes the theme colours in their branding settings. A more traditional approach would require using a set of `<div>` and `<span>` elements with border or background color CSS attributes to achieve this. I opted instead to try using SVGs instead, since path and color manipulation seemed to be one of their strong points. Here's a very basic example SVG:

<!-- end -->

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><path fill="#fff" d="M-1-1h202v202H-1z"/><g><path stroke="#040944" fill-opacity="null" stroke-opacity="null" stroke-width="10" fill="#00b9ed" d="M.5.438h199v199H.5z"/></g></svg>

After inspecting the SVG structure using the browser's devtools, I can target the `<path>` element I care about in CSS and modify the `fill` and `stroke` attributes like so:

```css
<style>
#arbitrary-id-of-path-element {
  fill: hsla(335, 52%, 89%, 1);
  stroke: hsla(335, 52%, 56%, 1);
}
</style>
```

This gives me an SVG that looks like this:

<style>
#modified {
  fill: hsla(335, 52%, 89%, 1);
  stroke: hsla(335, 52%, 56%, 1);
}
</style>

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><path fill="#fff" d="M-1-1h202v202H-1z"/><g><path id="modified" stroke="#040944" fill-opacity="null" stroke-opacity="null" stroke-width="10" fill="#00b9ed" d="M.5.438h199v199H.5z"/></g></svg>

Pretty simple! It also allows me to export an SVG from a visual design file and manipulate in the browser. Very cool.
