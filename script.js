let inputbox = document.querySelector(".container .searchbox input")
let button = document.querySelector(".container .searchbox .btn")
let temperature = document.querySelector(".container .info .temp h2")
let city = document.querySelector(".container .info .cname h2")
let humidity = document.querySelector(".container .info .humidity h2")
button.addEventListener("click",function(){
    let value = inputbox.value
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=213d045350441f5776c5007f9ea38b7a&units=metric`
    fetch(apiurl)
    .then(res=>res.json())
    .then(data=>{
        if(data.cod === 200){
            temperature.textContent = data.main.temp 
            city.textContent = data.name 
            humidity.textContent = data.main.humidity
        }
        else {
            alert("Data not found")
        }
    })
    .catch(error=>{
        console.log("This is the error")
    })
})
