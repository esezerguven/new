/*
var dersler = ['matematik', 'fizik'];

var matematikKonuları = ['trigonometri', 'açılar'];
var fizikKonuları = ['Tork', 'Denge', 'Radyoactivity']

*/

/*

var derslerHtml = '';

var dersler = [
    {
        dersAdi : 'Matematik',
        konulari : ['trigonometri', 'açılar']
    },
    {
        dersAdi : 'Fizik',
        konulari : ['Tork', 'Denge', 'Radyoactivity']
    },
]


for(i = 0; i < dersler.length; i++) {
    derslerHtml += '<div class="row">' + dersler[i].dersAdi + '</div>';
}

console.log(derslerHtml);

*/ 


var dersler = {
    'Matematik' : ['trigonometri', 'açılar'],
    'Fizik' : ['Tork', 'Denge', 'Radyoactivity']
}

var derslerHtml = '';

for(i = 0; i < Object.keys(dersler).length; i++) {
    derslerHtml += '<div class="row">' + Object.keys(dersler)[i] + '</div>';
}

window.addEventListener('load', function() {   //page loaded event
    $("#dersler").html(derslerHtml);

    $('#dersler .row').click(function (event) {
        console.log(dersler[$(event.target).text()])
    });
});