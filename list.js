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
    'Matematik' : {
        desc: '',
        clickedCount: '',
        categories: ['Popüler', 'the best']
    },
    'Fizik' : ['Tork', 'Denge', 'Radyoactivity'],
    'Kimya' : ['Asit', 'Baz', 'Gazlar', 'H2S04', 'Mol']
}

var derslerHtml = '';

for(i = 0; i < Object.keys(dersler).length; i++) {
    derslerHtml += '<div class="row visible">' + Object.keys(dersler)[i] + '</div>';
}

window.addEventListener('load', function() {   //page loaded event
    $("#dersler").html(derslerHtml);
   // document.getElementById('dersler').innerHTML = derslerHtml;

    $('#dersler .row').click(function (event) {
        $('#dersler .row').removeClass('bg-color-red')
        $(event.target).addClass('bg-color-red')

        var konularHtml = '';
        var konular = dersler[$(event.target).text()];

        for(i = 0; i < konular.length; i++) {

            var konularHtml = '';
            konularHtml += '<div class="row">' + konular[i] + '</div>';
        }

        $("#konular").html(konularHtml);
    
        console.log(dersler[$(event.target).text()])
    });
});

/*
function changeText(age) {
    //function scope var
    var type = '';

    if(age > 12) {
        // Block scope let
        let text = 'You are abover 12 years old';

    }

    console.log(text);
}
*/



var names = ['sezer', 'ahmet', 'efe', 'ayşe', 'fatma', 'hayri']

names.forEach(function(name) {
    console.log(name);
})

names.some(function(name) {
    return name === 'ayşe';

    console.log(name);
})

var numbers = [13,26,2,5,12,23]

// arrayde 12 den büyük olanları dön
numbers.filter(function(number) {
    return number > 12;
})

// arrayın bütün elemanları 2 ile çarp
numbers.map(function(number) {
    return number * 2;
})


// key event listener 
// input change listener 
// var dersler = ['matematik', 'fizik', 'kimya']
// var visibleDersler = ['matematik', 'fizik', 'kimya']
// m harfi bastığımda derslerden name m içeren leri dön (filter function)
// dönen array visibleDersler eşitle


/*
console.time("test");
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd("test");
*/