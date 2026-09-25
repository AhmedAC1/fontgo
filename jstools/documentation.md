Hello!<br>
This is the documentation about the API 'jstools' (it has moved to jstools/jstools.js)<br>
**Also**: The old `easyimport.js` doesn't work anymore.

# Importing the tool
Use this:
```html
<script src="https://ahmedac1.github.io/fontgo/jstools/jstools.js"></script>
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
