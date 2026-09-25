Hello!<br>
This is the documentation about the API 'jstools' (it has moved to jstools/jstools.js)<br>
**Also**: The old `easyimport.js` doesn't work anymore.

# Importing the tool
Use this:
```html
<script src="https://ahmedac1.github.io/fontgo/jstools/jstools.js"></script>
```

# Defining error type
Available options: `js`, `custom`.<br>
**Why this can be useful**: Sometimes the API can't respond, but because normally it throws a normal error without even putting what was the JS error, we have errorType.
`js`: Throws the normal JS errors (`TypeError`, `SyntaxError`, etc.).<br>
`custom`: Throws the custom ones.
Use this:
```html
window.errorType = 'js';
```

# Importing fonts fast
## JS
Use **fastImport**:
```html    
<script type="module">      
    const font = await fastImport("font name", "font+name");
    document.body.style.fontFamily = "font name";    
</script>
```
## CSS
Use **fastImportCSS**:
```html
<script type="module">      
    const link = await fastImportCSS("font+name"); 
    document.body.style.fontFamily = "font name";
</script>
```

# Getting info about fonts
Use **getInfo**:
```html
<script type="module">      
    const all = await getInfo("font+name");

    console.log(all.info.name);
</script>
```

# Getting ALL of the fonts
This one is easy because it just returns an array. You don't need to put any arguments.
Use **getAllFonts**:
```html
<script type="module">
    const all = await getAllFonts();

    console.log(all[0]);
</script>
```
