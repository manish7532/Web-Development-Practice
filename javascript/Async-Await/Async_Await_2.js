let waitaingForInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Was Waiting for U")
        }, 5000)
    })
}

function puneWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather in pune 27 °C 🌡")
        }, 3000)
    })
}


function mumbaiWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Weather in Mumbai 29 °C 🌡")
        }, 3000)
    })
}


async function getWeatherInfo() {

    const puneWeather1 = await puneWeather();
    console.log(puneWeather1);

    const mumbaiWeather1 = await mumbaiWeather();
    console.log(mumbaiWeather1);

    let waiter1 = await waitaingForInfo();
    console.log(waiter1);

    // setTimeout(() => {
    //     console.log("Fetched all weather info.")
    // }, 3000)

}


getWeatherInfo();

console.log("Not gonna wait for U.")

