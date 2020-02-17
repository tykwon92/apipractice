var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')
var icon = document.querySelector('.icon')




button.addEventListener('click', function () {

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=1bc4eb7927d34346d10dd2bfacb702f0')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];

            var tempValue = data['main']['temp'];
            let realTemp = ((tempValue - 273.15) * 9/5) + 32

            var descValue = data['weather'][0]['description'];

            var iconValue = data['weather'][0]['icon'];
            var iconUrl = "http://openweathermap.org/img/w/" + iconValue + ".png";

            console.log(iconUrl)

            name.innerHTML = nameValue;
            temp.innerHTML = realTemp.toFixed() +' F';
            desc.innerHTML = descValue;
            icon.innerHTM = iconUrl;

        })
        .catch(err => alert("Wrong Name!"))

        animateCSS()
        
}); 



function animateCSS(){
    const searchBar = document.querySelector('#search')
    searchBar.classList.add('animated','bounce')
}
