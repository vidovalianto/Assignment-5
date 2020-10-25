let iconConverter = {
    "11d" : [false, false, true],
    "09d" : [false, true, true],
    "10d" : [false, true, true],
    "13d" : [false, true, true],
    "50d" : [false, true, true],
    "01d" : [true, true, true],
    "01n" : [true, true, true],
    "02d" : [false, true, false],
    "02n" : [false, true, false],
    "04d" : [false, true, false],
    "04n" : [false, true, false],
}

let kelvinToFahr = (temp) => {
    return (temp - 273.15)*9/5 + 32
}