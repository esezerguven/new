function calculate (input) {
    var islemler = ['-', '+', '*', '/', ','];
    var screenText = document.getElementsByClassName('screen')[0].innerText;
    if(parseInt(input)  || parseInt(input) === 0) {
        if (screenText === '0') {
            document.getElementsByClassName('screen')[0].innerText = input
        } else {
            document.getElementsByClassName('screen')[0].innerText += input
        }
    } else if (islemler.includes(input)) {
        var lastCharacterOfScreenText = screenText.charAt(screenText.length - 1);

        if(screenText !== '0' && !islemler.includes(lastCharacterOfScreenText)) {
            document.getElementsByClassName('screen')[0].innerText += input
        }
    }
}

