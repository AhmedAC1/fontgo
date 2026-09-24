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
    throw new Error("Sorry, cannot fast import right now!");
  }
}
