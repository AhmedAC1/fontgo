# Fontgo
## License
Fontgo's source code is licensed under the **MIT License**.
>[!NOTE]
>Fonts included in Fontgo may have their own licenses. Check each font's license before redistributing or modifying it.
## What is Fontgo?
Fontgo is an open-source website designed for fonts.
You can use \<link> to import the fonts into your site. That's literally how it's designed.
## How to import a font?
You can import a font using HTML or JS.

### HTML (\<link>)
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
*(you can also put it in \<style>)*
### JS
>[!NOTE]
>You need to use \<script type="module"> OR an asynchronous (`async`) function because this uses `await`.
```js
const font = new FontFace(
  "font name",
  "url(https://ahmedac1.github.io/fontgo/v1/fonts/font+name.ttf)"
);

await font.load();

document.fonts.add(font);

document.body.style.fontFamily = "font name";
```

## How to fetch the JSON of those font files?
You only have one way to do this: JS.<br>
How to do it? Use `/apigetjson` and `.json`.
>[!NOTE]
>This is an another asynchronous.
```js
const response = await fetch("https://ahmedac1.github.io/fontgo/v1/fonts/apigetjson/font+name.json");
const all = await response.json();
```
*(you can also use .then(r => r.json()); on response and skip creating all though you'll have to use response now not all)*<br>
Then you can access its information:
```js
console.log(all.info.name);
```

## How to import font styles?
Put this in your `<head>`:
```html
<link rel="stylesheet" href="https://ahmedac1.github.io/fontgo/v1/fontstyles/classes.css">
```
Then you can use it:
```html
<div class="italic strike">Hello</div>
```

>[!NOTE]
>These URLs don't work yet; we're still making the files, folders and etc.
>This project is in early development (alpha)<br>
>[!NOTE]
>You can do most of what's here much simpler by using `jstools.js`.
