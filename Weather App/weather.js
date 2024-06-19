const apiKey="0bd1ef7bd9b8363948b507aba34ec333";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const icon=document.querySelector(".icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").textContent=data.name;
    document.querySelector(".temp").textContent=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").textContent=data.main.humidity+"%";
    document.querySelector(".wind").textContent=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        icon.src="clouds.png";
    }
    if(data.weather[0].main=="Rain"){
        icon.src="rain.png";
    }
    if(data.weather[0].main=="Clear"){
        icon.src="clear.png";
    }
    if(data.weather[0].main=="Mist"){
        icon.src="mist.png";
    }
    if(data.weather[0].main=="Drizzle"){
        icon.src="drizzle.png";
    }

}
addEventListener("keydown",event=>{
    if(event.key=="Enter"){
        checkWeather(searchBox.value);
    }
})

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();