const displayApp = document.querySelector(".container");
const apiKey = "3db98542680c4b908f770057250610";

//fetch data from api
export async function forecast(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=yes&alerts=no`);

    //clearing div before showing new error
    displayApp.innerHTML = "";

    //error handling for invalid city name
    if (!response.ok) {
        let errorbox = document.createElement("div")
        errorbox.classList.add("errorBox");
        errorbox.innerText = `Invalid City Name....`
        displayApp.appendChild(errorbox);
        return;
    } else {
        const data = await response.json();
        //clearing div before printing new data
        displayApp.innerHTML = "";

        //loop through days
        for (let i = 0; i < data.forecast.forecastday.length; i++) {
            const forecastStatus = document.createElement("div");
            forecastStatus.classList.add("foreCard");
            let dayData = data.forecast.forecastday[i];
            forecastStatus.innerHTML = `
                <p>${dayData.day.maxtemp_c}</p>
                <p>Temperature</p>
                <div class="img-icon"><img src="${dayData.day.condition.icon}" alt="this is an img">
                <p>${dayData.day.condition.text}</p></div>
                <div class="area-time"><p>${data.location.country}, ${data.location.name}</p>
                <p>${dayData.date}</p></div>`
            displayApp.appendChild(forecastStatus);
        }
    }
}
