var btn = document.querySelector("#btn");
var fullname = document.querySelector("#fullname");
var usrname = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var img = document.querySelector("#avatar");
btn.addEventListener("click",function(){
    var url="https://randomuser.me/api/";
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        fullname.innerHTML= data.results[0].name.first +" "+ data.results[0].name.last ;
        usrname.innerHTML= data.results[0].login.username;
        email.innerHTML= data.results[0].email;
        city.innerHTML= data.results[0].location.city;
        img.src=data.results[0].picture.thumbnail;
        console.log(data);
        
    })
    .catch(function(error){
        console.log(error);
    })
});