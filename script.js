function rot13(str) {
    const arrPrimary = str.split('');
    const arrFinal= [];
    for (let i = 0; i < arrPrimary.length; i++) {
      if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
        arrFinal.push(String.fromCharCode(str.charCodeAt(i) + 13));
      } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
        arrFinal.push(String.fromCharCode(str.charCodeAt(i) - 13));
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

const textarea = document.getElementById("textarea");

textarea.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});
