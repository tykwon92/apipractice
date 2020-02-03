var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1bc4eb7927d34346d10dd2bfacb702f0')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description']

        name.innerHTML = nameValue;
        desc.innerHTML = descValue;

    })
    
    

    .catch(err => alert("Wrong Name!"))
    
})


