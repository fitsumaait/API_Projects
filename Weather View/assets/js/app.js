const db = new Database();
const wLocation = db.getfromDb();
const weather = new WeatherAPI(wLocation.city);
const ui = new WeatherUI();

// On Dom load 
document.addEventListener('DOMContentLoaded',getWeatherData);
// change the city 
document.getElementById('w-change-btn').addEventListener('click',(e)=>{

    const city = document.getElementById('city').value;

    weather.changeLocation(city);
    
    // store to db 
    db.setDb(city);
    // get 
    getWeatherData();

    // close the modo
    $('#locModal').modal('hide');
  


});

// get weather Data
function getWeatherData()
{
    weather.getWeatherInfo()
    .then(data=>{
        ui.displayData(data[0]);
    })
    .catch(err=>{
        console.log(err)
    })

}

