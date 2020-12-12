const d = new Date();
const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";




const apiURL = '//api.openweathermap.org/data/2.5/forecast?id=5779816&appid=79bd2333fd9bc8d04d4c15b8edc1c9b7&units=imperial';

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    let mylist = weatherInfo.list;
    console.log(mylist.length);

    
    let forecastDayNumber = todayDayNumber;
    console.log(forecastDayNumber);

    for (i = 0; i < mylist.length; i++){
        
        var time = mylist[i].dt_txt;
        console.log(time)
        if (time.includes('18:00:00')){
            forecastDayNumber += 1;
            console.log(forecastDayNumber)
            
            if(forecastDayNumber === 7){
                forecastDayNumber = 0;
            }

            let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
            console.log(">"+weekday[forecastDayNumber]);

            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

            let theDiv = document.createElement("div");
            theDiv.className = "container";
            theDiv.appendChild(theDayName);
            theDiv.appendChild(theTemp);

            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img");
            theIcon.src=iconPath

            let theDay = document.createElement("div");
            theDay.className = "card";
            theDay.appendChild(theDiv);
            theDay.appendChild(theIcon);

            document.getElementById('weatherforecast').appendChild(theDay);

        }
        



    }
    
    
}); //end of "then" fat arrow function