/*
setTimeout(function() {
    console.log('started')
    document.getElementById("7").addEventListener("click", function () {
        calculate('7');
    });
}, 5000); // msecond
*/


window.addEventListener('load', function() {   //page loaded event
    /*
    document.getElementById("7").addEventListener("click", function () {
        calculate('7');
    });
    */

    var buttons = document.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            calculate(event.target.id);
            console.log('button clicked')
        });
    }
});


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
    } else if (input.toLowerCase().trim() === 'clear') {
        document.getElementsByClassName('screen')[0].innerText = 0
    } else {   
        try {
            document.getElementsByClassName('screen')[0].innerText = eval(screenText)
        } catch (error) {
            document.getElementsByClassName('screen')[0].innerText = 'Error'
        }  
    }
}

