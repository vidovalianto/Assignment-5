function weatherCard(obj, pos) {
  push()
  textSize(pos.size/3)
  text(obj.main.temp + "°", pos.x + pos.size, pos.y + pos.size/5)
  pop()
  push()
  textSize(pos.size/10)
  text("Feels Like " + obj.main.feels_like + "°", pos.x + pos.size, pos.y +  pos.size*2/5)
    textAlign(LEFT)
  text("Humidity: " + obj.main.humidity, pos.x - pos.size*5/4, pos.y )
  text("Pressure: " + obj.main.pressure, pos.x - pos.size*5/4, pos.y +  pos.size/5)
  text("💨 Speed: " +  + obj.wind.speed + " Angle: " + obj.wind.deg, pos.x - pos.size*5/4, pos.y +  pos.size*2/5)
  pop()
}

function tempCard(obj, pos) {
  push()
  textSize(pos.size/3)
  text(obj.main.temp + "°", pos.x, pos.y + pos.size/5)
  pop()
  push()
  textSize(pos.size/10)
  text("Feels Like " + obj.main.feels_like + "°", pos.x, pos.y +  pos.size*2/5)
  pop()
}

function cloudy(pos, hasSun, isRaining) {
  push()
  noStroke()
  if (hasSun) {
    fill('yellow')
    circle(pos.x+pos.size/4, pos.y-pos.size/10, pos.size/4)
  }
  
  fill(220)
  
  if (isRaining) {
    push()
    rectMode(CENTER)
    translate(pos.x, pos.y + pos.size/2.5)
    rect(0, 0, pos.size/20, pos.size/10, 25)
    rect(-pos.size/10, 0, pos.size/20, pos.size/10, 25)
    rect(-pos.size*2/10, 0, pos.size/20, pos.size/10, 25)
    rect(pos.size/10, 0, pos.size/20, pos.size/10, 25)
    rect(pos.size*2/10, 0, pos.size/20, pos.size/10, 25)
    pop()
  }
  
  
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
  fill('yellow')
  circle(pos.x, pos.y, pos.size/3)
  
  push()
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