function rot13(str) {
    const arrPrimary = str.split('');
    const arrFinal= [];
    for (let i = 0; i < arrPrimary.length; i++) {
      if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
        arrFinal.push(String.fromCharCode(str.charCodeAt(i) + 13));
      } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
        arrFinal.push(String.fromCharCode(str.charCodeAt(i) - 13));
      } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 110) {
        arrFinal.push(String.fromCharCode(str.charCodeAt(i) + 13));
      } else if (str.charCodeAt(i) > 109 && str.charCodeAt(i) < 123) {
        arrFinal.push(String.fromCharCode(str.charCodeAt(i) - 13 ));
      } else {
        arrFinal.push(String.fromCharCode(str.charCodeAt(i)));
      }
    }
    return arrFinal.join('')
  }

function encrypt(text) {
    const result = document.getElementById("result");
    result.textContent = rot13(text);
}