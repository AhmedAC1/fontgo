# Fontgo
## License
Fontgo's source code is licensed under the **MIT License**.
>[!NOTE]
>Fonts included in Fontgo may have their own licenses. Check each font's license before redistributing or modifying it.
## What is Fontgo?
Fontgo is an open-source website designed for fonts.
You can use <link> to import the fonts into your site. That's literally how it's designed.
## How to import a font?
You can import a font using HTML or JS.

### HTML (<link>)
Add this inside your `head`:
```html
<link rel="stylesheet" href="https://ahmedac1.github.io/fontgo/v1/fonts/css/font+name.css">
```
Then use it in **CSS**:
```css
body {
  font-family: "font name", sans-serif;
}
```
*(you can also put it in <style>)*
### JS
>[!NOTE]
>You need to use <script type="module"> OR an asynchronous (`async`) function because this uses `await`.
```js
const font = new FontFace(
  "font name",
  "url(https://ahmedac1.github.io/fontgo/v1/fonts/font+name.ttf)"
);

await font.load();

document.fonts.add(font);

document.body.style.fontFamily = "font name";
```

>[!NOTE]
>These URLs don't work yet; we're still making the files, folders and etc.
