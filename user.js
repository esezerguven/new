var isAuthentaced = localStorage.getItem("user");
if(!isAuthentaced) {
    window.location.href= '/'
}

var user = JSON.parse(JSON.parse(localStorage.getItem("user")).value);

console.log(user);

function createProductHtml(products) {
    products.forEach(function(product) {
        var html = '<div class="card col-4">' +
        '<img class="card-img-top" alt="Card image cap" src="'+ product.thumbnail +'">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' +product.title +'</h5>' +
        '<p class="card-text">Email: '+ product.description +'</p>' +
        '<a href="" class="btn btn-primary">'+product.stock+ '</a>' +
        '</div>' +
        '</div>';
        $('#users').append(html);
    })
}


window.searched = [];

window.addEventListener('load', function() {   //page loaded event
    $("#search").on("change", function(){
        var inputValue =  $("#search").val();
        console.log(inputValue)
        window.searched.push(inputValue)
        setWithExpiry("searchedItems", window.searched, 10000000);
    });

    $('#user-name').text(user.firstName + ' ' + user.lastName);


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((json) => {
console.log(json.products[0])

    
createProductHtml(json.products)
});

});
