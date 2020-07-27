// let colors = [Snow, GhostWhite, WhiteSmoke, Gainsboro, FloralWhite, OldLace, Linen, AntiqueWhite, PapayaWhip, BlanchedAlmond, Bisque, PeachPuff, NavajoWhite, Moccasin, Cornsilk, Ivory, LemonChiffon, Seashell, Honeydew, MintCream, Azure, AliceBlue, lavender, LavenderBlush, MistyRose, White, Black, DarkSlateGray, DimGrey, SlateGrey, LightSlateGray, Grey, LightGray, MidnightBlue, NavyBlue, CornflowerBlue, DarkSlateBlue, SlateBlue, MediumSlateBlue, LightSlateBlue, MediumBlue, RoyalBlue, Blue, DodgerBlue, DeepSkyBlue, SkyBlue, LightSkyBlue, SteelBlue, LightSteelBlue, LightBlue, PowderBlue, PaleTurquoise, DarkTurquoise, MediumTurquoise, Turquoise, Cyan, LightCyan, CadetBlue, MediumAquamarine, Aquamarine, DarkGreen, DarkOliveGreen, DarkSeaGreen, SeaGreen, MediumSeaGreen, LightSeaGreen, PaleGreen, SpringGreen, LawnGreen, Green, Chartreuse, MedSpringGreen, GreenYellow, LimeGreen, YellowGreen, ForestGreen, OliveDrab, DarkKhaki, PaleGoldenrod, LtGoldenrodYello, LightYellow, Yellow, Gold, LightGoldenrod, goldenrod, DarkGoldenrod, RosyBrown, IndianRed, SaddleBrown, Sienna, Peru, Burlywood, Beige, Wheat, SandyBrown, Tan, Chocolate, Firebrick, Brown, DarkSalmon, Salmon, LightSalmon, Orange, DarkOrange, Coral, LightCoral, Tomato, OrangeRed, Red, HotPink, DeepPink, Pink, LightPink, PaleVioletRed, Maroon, MediumVioletRed, VioletRed, Magenta, Violet, Plum, Orchid, MediumOrchid, DarkOrchid, DarkViolet, BlueViolet, Purple, MediumPurple, Thistle, Snow1]

// Aqui começa a verificação de item por item para ver se o client já tem alguma configuração gravada em seu browser

if (localStorage.getItem('bgcolor') !== null) {
  let bodyBg = document.getElementsByTagName('body')[0];
  bodyBg.style.backgroundColor = localStorage.getItem('bgcolor');
}

if (localStorage.getItem('fontcolor') !== null) {
  let article = document.getElementsByTagName('article')[0];
  article.style.color = localStorage.getItem('fontcolor');
}

if (localStorage.getItem('fontsize') !== null) {
  let article = document.getElementsByTagName('article')[0];
  article.style.fontSize = localStorage.getItem('fontsize');
}

if (localStorage.getItem('linespacing') !== null) {
  let article = document.getElementsByTagName('article')[0];
  article.style.lineHeight = localStorage.getItem('linespacing');
}

if (localStorage.getItem('fontfamily') !== null) {
  let article = document.getElementsByTagName('article')[0];
  article.style.fontFamily = localStorage.getItem('fontfamily');
}


// Abaixo são os eventos que modificam o estio da página

let chosenbgColor = document.getElementById('chosen-bg-color');
chosenbgColor.addEventListener('change', function() {
  let bodyBg = document.getElementsByTagName('body')[0];
  bodyBg.style.backgroundColor = chosenbgColor.value;
  localStorage.setItem('bgcolor', chosenbgColor.value);
});

let chosenfontColor = document.getElementById('chosen-font-color');
chosenfontColor.addEventListener('change', function() {
  let article = document.getElementsByTagName('article')[0];
  article.style.color = chosenfontColor.value;
  localStorage.setItem('fontcolor', chosenfontColor.value);
});

let chosenFontSize = document.getElementById('chosen-font-size');
chosenFontSize.addEventListener('change', function() {
  let article = document.getElementsByTagName('article')[0];
  article.style.fontSize = chosenFontSize.value;
  localStorage.setItem('fontsize', chosenFontSize.value);
});

let chosenLineSpacing = document.getElementById('chosen-line-spacing');
chosenLineSpacing.addEventListener('change', function() {
  let article = document.getElementsByTagName('article')[0];
  article.style.lineHeight = chosenLineSpacing.value;
  localStorage.setItem('linespacing', chosenLineSpacing.value);
});

let chosenFontFamily = document.getElementById('chosen-font-family');
chosenFontFamily.addEventListener('change', function() {
  let article = document.getElementsByTagName('article')[0];
  article.style.fontFamily = chosenFontFamily.value;
  localStorage.setItem('fontfamily', chosenFontFamily.value);
});