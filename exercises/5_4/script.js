// let colors = [Snow, GhostWhite, WhiteSmoke, Gainsboro, FloralWhite, OldLace, Linen, AntiqueWhite, PapayaWhip, BlanchedAlmond, Bisque, PeachPuff, NavajoWhite, Moccasin, Cornsilk, Ivory, LemonChiffon, Seashell, Honeydew, MintCream, Azure, AliceBlue, lavender, LavenderBlush, MistyRose, White, Black, DarkSlateGray, DimGrey, SlateGrey, LightSlateGray, Grey, LightGray, MidnightBlue, NavyBlue, CornflowerBlue, DarkSlateBlue, SlateBlue, MediumSlateBlue, LightSlateBlue, MediumBlue, RoyalBlue, Blue, DodgerBlue, DeepSkyBlue, SkyBlue, LightSkyBlue, SteelBlue, LightSteelBlue, LightBlue, PowderBlue, PaleTurquoise, DarkTurquoise, MediumTurquoise, Turquoise, Cyan, LightCyan, CadetBlue, MediumAquamarine, Aquamarine, DarkGreen, DarkOliveGreen, DarkSeaGreen, SeaGreen, MediumSeaGreen, LightSeaGreen, PaleGreen, SpringGreen, LawnGreen, Green, Chartreuse, MedSpringGreen, GreenYellow, LimeGreen, YellowGreen, ForestGreen, OliveDrab, DarkKhaki, PaleGoldenrod, LtGoldenrodYello, LightYellow, Yellow, Gold, LightGoldenrod, goldenrod, DarkGoldenrod, RosyBrown, IndianRed, SaddleBrown, Sienna, Peru, Burlywood, Beige, Wheat, SandyBrown, Tan, Chocolate, Firebrick, Brown, DarkSalmon, Salmon, LightSalmon, Orange, DarkOrange, Coral, LightCoral, Tomato, OrangeRed, Red, HotPink, DeepPink, Pink, LightPink, PaleVioletRed, Maroon, MediumVioletRed, VioletRed, Magenta, Violet, Plum, Orchid, MediumOrchid, DarkOrchid, DarkViolet, BlueViolet, Purple, MediumPurple, Thistle, Snow1]



let bgColor = document.getElementById('chosen-bg-color');
bgColor.addEventListener('change', function() {
  let bodyBg = document.getElementsByTagName('body')[0];
  bodyBg.style.backgroundColor = bgColor.value;
});

let fontColor = document.getElementById('chosen-font-color');
fontColor.addEventListener('change', function() {
  let fontArticle = document.getElementsByTagName('article')[0];
  fontArticle.style.color = fontColor.value;
});

let ftSize = document.getElementById('chosen-font-size');
ftSize.addEventListener('change', function() {
  let fontSizeArticle = document.getElementsByTagName('article')[0];
  fontSizeArticle.style.fontSize = ftSize.value;
});