var userName = 'kminchelle';
var password = '0lelplR';

var isAuthentaced = localStorage.getItem("user");
if(isAuthentaced) {
    window.location.href= '/user.html'
}

function login() {
    var userEmail = $('[type*="email"]').val()
    var userPassword = $('[type*="password"]').val()
        
    console.log(userEmail);
    console.log(userPassword);

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: userEmail ,
            password: userPassword,
            // expiresInMins: 60, // optional
        })
        })
        .then(res => res.json())
        .then(
            (json) => {
                if (json.message) {
                    console.log('Invalid USer')

                    return;
                }
                
                setWithExpiry('user', JSON.stringify(json), 60*60*60*24*365)

                window.location.href = '/user.html';
            }
        );
}



function setWithExpiry(key, value, ttl) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}



fetch("https://dummyjson.com/users?limit=50")
  .then((response) => response.json())
  .then(
    function(json){
        createUsersHtml(json.users)
    });




function createUsersHtml(users) {
    users.forEach(function(user) {
        var html = '<div class="card col-4">' +
        '<img class="card-img-top" alt="Card image cap" src="'+ user.image +'">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' +user.firstName + ' ' + user.lastName + '</h5>' +
        '<p class="card-text">Email: '+ user.email +'</p>' +
        '<a href="mailto:' + user.email + '" class="btn btn-primary">Kullanıcıya git</a>' +
        '</div>' +
        '</div>';
        $('#users').append(html);
    })
}


var user = {
    "id":1,
    "firstName":"Terry",
    "lastName":"Medhurst",
    "maidenName":"Smitham",
    "age":50,
    "gender":"male",
    "email":"atuny0@sohu.com",
    "phone":"+63 791 675 8914",
    "username":"atuny0",
    "password":"9uQFF1Lh",
    "birthDate":"2000-12-25",
    "image":"https://robohash.org/hicveldicta.png",
}
window.searched = [];

window.addEventListener('load', function() {   //page loaded event
    $("#search").on("change", function(){
        var inputValue =  $("#search").val();
        console.log(inputValue)
        window.searched.push(inputValue)
        setWithExpiry("searchedItems", window.searched, 10000000);

    }); 

});
