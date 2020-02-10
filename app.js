var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')



button.addEventListener('click', function () {

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=1bc4eb7927d34346d10dd2bfacb702f0')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description']

            let realTemp = ((tempValue - 273.15) * 9/5) + 32
            var farenheit = realTemp.toFixed() +' F';

            name.innerHTML = nameValue;
            temp.innerHTML = farenheit;
            desc.innerHTML = descValue;

        })



        .catch(err => alert("Wrong Name!"))

}, function animateCSS(){
    const searchBar = document.querySelector('.bar')
    searchBar.classList.add('animated','bounce')
});
