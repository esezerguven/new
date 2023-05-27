function arrangeHtml(visibleDersler) {
    var derslerHtml = '';
    for(i = 0; i < visibleDersler.length; i++) {
        derslerHtml += '<div class="row visible">' + visibleDersler[i] + '</div>';
    }

    $("#dersler").html(derslerHtml);
    
}

var dersler = ['Matematik', 'Fizik','Kimya',"Biyoloji", "Geometri","Felsefe","Ingilizce" ];



window.addEventListener('load', function() {   //page loaded event
    arrangeHtml(dersler);

    $("#search").on("keyup", function(){
        var inputValue =  $("#search").val();
        console.log(inputValue);

        var filteredDersler = dersler.filter(function(ders) {
            return ders.toLowerCase().includes(inputValue);
        })

        arrangeHtml(filteredDersler);
    });

});

/* 
var value = '';
setInterval(function () {
    if(value !== $("#search").val()) {

    }

    value = $("#search").val();

}, 100);
*/