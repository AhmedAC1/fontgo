window.errorType = 'custom';

async function fastImport(name, file) {
  if (typeof file !== "string") throw new Error("Sorry, file needs to be a string!");
  if (typeof name !== "string") throw new Error("Sorry, name needs to be a string!");
  try {
    const font = new FontFace(
      name,
      "url(https://ahmedac1.github.io/fontgo/v1/fonts/" + file + ".ttf)"
    );

    await font.load();
    document.fonts.add(font);
    return font;
  } catch (err) {
    if (window.errorType === 'custom') {
      throw new Error("Sorry, cannot fast import right now!");
    } else if (window.errorType === 'js') {
      throw err;
    }
  }
}

async function fastImportCSS(file) {
  if (typeof file !== "string") throw new Error("Sorry, file needs to be a string!");
  try {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "https://ahmedac1.github.io/fontgo/v1/fonts/css/" + file + ".css";

    document.head.appendChild(link);
    return link;
  } catch (err) {
    if (window.errorType === 'custom') {
      throw new Error("Sorry, cannot fast import the CSS right now!");
    } else if (window.errorType === 'js') {
      throw err;
    }
  }
}

async function getInfo(file) {
  try {
    const response = await fetch("https://ahmedac1.github.io/fontgo/v1/fonts/apigetjson/" + file + ".json");
    const all = await response.json();

    return all;
  } catch (err) {
    if (window.errorType === 'custom') {
      throw new Error("Sorry, cannot get info about this file!");
    } else if (window.errorType === 'js') {
      throw err;
    }
  }
}

async function getAllFonts() {
  try {
    const response = await fetch("https://api.github.com/repos/ahmedac1/fontgo/contents/v1/fonts/");
    const all = await response.json();

    console.log(all);
    return;
    
    let fonts = [];
    for (const child of all) {
      if (child.type === "file") {
        fonts.push(child.name);
      }
    }
    
    return fonts;
  } catch (err) {
    if (window.errorType === 'custom') {
      throw new Error("Sorry, API cannot respond!");
    } else if (window.errorType === 'js') {
      throw err;
    }
  }
}
