# Call button widget

Files added:

- `call-button.css` — styles for a floating call button
- `call-button.js` — small script to track clicks
- `call-button-snippet.html` — the HTML snippet to paste into your site

How to use

1. Copy the contents of `call-button-snippet.html` into your site's HTML. Place it near the end of the `<body>` so it loads last.
2. Ensure the two files `call-button.css` and `call-button.js` are served at `/call-button.css` and `/call-button.js` (they are in the repo root already). If your site serves assets from a subfolder, update the `href` / `src` paths accordingly.
3. The phone number is set to `+61 468 046 283` (international format). The visible label is `0468 04 MATE`.

Notes

- The snippet uses `tel:+61468046283` — mobile devices will dial automatically; desktop browsers show the handler options.
- If you want the button hidden on desktop, uncomment the `.call-button{display:none}` line in `call-button.css` under the `@media(min-width:900px)` block.
- If you want to send click events to a different analytics system, modify `call-button.js`.
