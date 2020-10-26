const titleFont = "Raleway"
const subtitleFont = "Open Sans"

function weatherCard(obj, pos) {
  push()
    fill('#090730')
  textSize(pos.size/3)
  textFont(titleFont)
  text(obj.main.temp + "°F", pos.x + pos.size, pos.y + pos.size/5)
  pop()
  push()
    fill('#090730')
  textSize(pos.size/10)
  textFont(subtitleFont)
  text("Feels Like " + obj.main.feels_like + "°F", pos.x + pos.size, pos.y +  pos.size*2/5)
    textAlign(LEFT)
  text("Humidity: " + obj.main.humidity, pos.x - pos.size*5/4, pos.y )
  text("Pressure: " + obj.main.pressure, pos.x - pos.size*5/4, pos.y +  pos.size/5)
  text("💨 Speed: " +  + obj.wind.speed + " Angle: " + obj.wind.deg, pos.x - pos.size*5/4, pos.y +  pos.size*2/5)
  pop()
}

function tempCard(obj, pos) {
  push()
    fill('#090730')
  textSize(pos.size/3)
  textFont(titleFont)
  text(obj.main.temp + "°F", pos.x, pos.y + pos.size/5)
  pop()
  push()
    fill('#090730')
  textSize(pos.size/10)
  textFont(subtitleFont)
  text("Feels Like " + obj.main.feels_like + "°F", pos.x, pos.y +  pos.size*2/5)
  pop()
}

function cloudy(pos, hasSun, isRaining) {
  push()
  noStroke()
  if (hasSun) {
    fill('#FADA04')
    circle(pos.x+pos.size/4, pos.y-pos.size/10, pos.size/4)
  }
  
  if (isRaining) {
    push()
    rectMode(CENTER)
    fill('#040786')
    translate(pos.x, pos.y + pos.size/2.5)
    rect(0, 0, pos.size/50, pos.size/10, 25)
    rect(-pos.size/10, 0, pos.size/50, pos.size/10, 15)
    rect(-pos.size*2/10, 0, pos.size/50, pos.size/10, 15)
    rect(pos.size/10, 0, pos.size/50, pos.size/10, 15)
    rect(pos.size*2/10, 0, pos.size/50, pos.size/10, 15)
    pop()
  }
  
  fill('#040786')
  circle(pos.x, pos.y, pos.size/2)
  circle(pos.x-pos.size/5, pos.y+pos.size/8, pos.size/3)
  circle(pos.x+pos.size/5, pos.y+pos.size/8, pos.size/3)
  
  rectMode(CENTER)
  rect(pos.x, pos.y + pos.size/8, pos.size/2, pos.size/3, 50 )
  pop()
}

function sunny(pos) {
  push()
  noStroke()
  fill('#FADA04')
  circle(pos.x, pos.y, pos.size/3)
  
  push()
  fill('#FADA04')
  rectMode(CENTER)
  translate(pos.x, pos.y)
  rotate(QUARTER_PI)
  rect(0, pos.size/3, pos.size/20, pos.size/10, 25)
  pop()
  
  push()
  rectMode(CENTER)
  translate(pos.x, pos.y)
  rotate(HALF_PI)
  rect(0, pos.size/3, pos.size/20, pos.size/10, 25)
  pop()
  
  push()
  rectMode(CENTER)
  translate(pos.x, pos.y)
  rotate(TWO_PI)
  rect(0, pos.size/3, pos.size/20, pos.size/10, 25)
  pop()
  
  push()
  rectMode(CENTER)
  translate(pos.x, pos.y)
  rotate(-QUARTER_PI)
  rect(0, pos.size/3, pos.size/20, pos.size/10, 25)
  pop()
  
  push()
  rectMode(CENTER)
  translate(pos.x, pos.y)
  rotate(-HALF_PI)
  rect(0, pos.size/3, pos.size/20, pos.size/10, 25)
  pop()
    pop()
}