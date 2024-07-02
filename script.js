const apikey="4253a773bafcdd31f731fdbc338dc9a2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".Flex-input-search input");
const searchbtn=document.querySelector(".Flex-input-search button");
const weathericon=document.querySelector(".Weather-icon");

async function weatherchecher(city){
    const response= await fetch(apiUrl + city + `&appid=${apikey}`);
    var data= await response.json()
    console.log(data);

    document.querySelector(".new-york").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".data-humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".data-Wind").innerHTML=data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
       weathericon.src="images/clouds.png";
   }
   else if(data.weather[0].main == "Clear"){
       weathericon.src="images/clear.png";
   }
   else if(data.weather[0].main == "Rain"){
        weathericon.src="images/rain.png";
    }
     else if(data.weather[0].main == "Mist"){
        weathericon.src="images/mist.png";
    }
     else if(data.weather[0].main == "Snow"){
        weathericon.src="images/snow.png";
    }
     else if(data.weather[0].main == "Drizzle"){
        weathericon.src="images/drizzle.png";
    }
     else if(data.weather[0].main == "Haze"){
        weathericon.src="images/Haze.png";
    }
}
searchbtn.addEventListener("click",()=>{
    weatherchecher(searchBox.value);
});

 