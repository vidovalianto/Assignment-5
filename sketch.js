let radio
let button
let slider
let options = ['Simple', 'Detail']

let radioVal = 0
let sliderVal = 0
const bottomPad = 50

let sounds = []
let curWeather = -1

let heroFont

function preload() {
  soundFormats('mp3', 'ogg');

  sounds.push(loadSound('Sound/sunny.mp3'))
  sounds.push(loadSound('Sound/cloudy.mp3'))
  sounds.push(loadSound('Sound/rain.mp3'))
    
  heroFont = loadFont('fonts/Raleway/Raleway-SemiBold.ttf')
}

function setup() {
    createCanvas(windowWidth, windowHeight-bottomPad);
    
    genRandomData()
    
    drawRadio()
    drawButton()
    drawSlider()
}

function draw() {
  background(255);
  
  sliderVal = slider.value()
  radioVal = radio.value()
  
  radio.position(width/2 - 70, height*1/4 + height/50)
  button.position(width/2 - 60, height*4/5)
  slider.position(width/2 - 60, height*3/4)
  
  const wpos = {
    x: width/2,
    y: height/2 - height/3,
    size: min(width,height)/5
  }
  
  fill(0)
    textSize(min(width,height)/30);
  textFont(heroFont)
  text(dummyDatas[sliderVal].name, width/2, height/2 - height/3 - min(width,height)/20)
    if (radioVal == options[0]) {
        tempCard(dummyDatas[sliderVal], wpos)
    } else {
        weatherCard(dummyDatas[sliderVal], wpos)
    }
  
  
  let pos = {
    x: width/2,
    y: height/2,
    size: min(width,height)/4
  }
  
  let temp = curWeather 
  curWeather = iconConverter[dummyDatas[sliderVal].weather[0].icon]
    if (temp !== curWeather) {
        valChange()
    }
    
  if (curWeather[0]) {
      sunny(pos)
  } else {
      cloudy(pos, curWeather[1], curWeather[2])
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-bottomPad)
}

function drawRadio() {
  radio = createRadio();
  radio.option(options[0])
  radio.option(options[1])
  radio.selected(options[0])
  textAlign(CENTER);
  fill(255, 0, 0);
}

function drawButton() {
    button = createButton('Generate Weather')
    button.mousePressed(genRandomData)
}

function drawSlider() {
    slider = createSlider(0, dummyDatas.length-1, 0, 1);
}

function valChange() {
    sounds.forEach((sound) => sound.stop())
        if (curWeather[0]) {
          sounds[0].loop()
      } else {
          if (curWeather[2]) {
            sounds[2].loop()
          } else {
            sounds[1].loop()
          }
      }
}

function genRandomData() {
    dummyDatas = Object.keys(cities).map( (num) => {
     return {"coord":{"lon": floor(random(-180,180)),"lat":floor(random(-180,180))},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":Object.keys(iconConverter)[floor(random(0,Object.keys(iconConverter).length-1))]}],"base":"stations","main":{"temp":floor(kelvinToFahr(random(273,303))),"feels_like":floor(kelvinToFahr(random(273,303))),"temp_min":floor(kelvinToFahr(random(273,303))),"temp_max":floor(kelvinToFahr(random(273,303))),"pressure":floor(random(0,36)),"humidity":floor(random(0,100)),"sea_level":floor(random(700,1000)),"grnd_level":floor(random(700,1000))},"visibility":10000,"wind":{"speed":floor(random(0,10)),"deg":floor(random(0,360))},"rain":{"1h":0.25},"clouds":{"all":42},"dt":1603552535,"sys":{"country":"BR","sunrise":1603529262,"sunset":1603575363},"timezone":-10800,"id":3465881,"name":Object.keys(cities)[floor(random(0,Object.keys(cities).length-1))],"cod":200}
    })
}