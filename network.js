const base = "http://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "135770bcd37e66027735e6a3a26973cc"

function getRequest(city) {
    let url = base + city + "&appid=" + API_KEY
    var request = new XMLHttpRequest()
    request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200)
            console.log(city, request.responseText)
    }
    request.open("GET", url, true); // true for asynchronous 
    request.send(null);
}

getRequest("new york")
//datas = cities.map((city) => getRequest(city))