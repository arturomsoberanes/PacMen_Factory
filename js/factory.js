const pacArray = ['./img/pacman.png', './img/pacman2.png'];
var focus = 0;

const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale
  }
}
// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);
  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.width = 100;
  newimg.src = "./img/pacman.png" 

  newimg.style.position = 'absolute';
  newimg.style.left = position.x + "px";
  newimg.style.top = position.y + "px";

  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg
  }
}

function update() {
  focus = (focus + 1) % 2;
  pacMen.forEach((item) => {
    checkCollisions(item)
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x + "px";
    item.newimg.style.top = item.position.y + "px";
    item.newimg.src = pacArray[focus];
  })
  setTimeout(update, 100);
  let MusicPac = document.getElementById("MusicPac");
  MusicPac.play();
}

function checkCollisions(item) {
  let gameArea = document.getElementById("game");
  let borderX = gameArea.clientWidth;
  let borderY = gameArea.clientHeight;
  let itemPVW_X = item.position.x + item.velocity.x + item.newimg.width;
  let itemPVW_Y = item.position.y + item.velocity.y + item.newimg.height; 

  if( itemPVW_X > borderX || item.position.x + item.velocity.x < 0){
    return item.velocity.x = -item.velocity.x;
  }
  if( itemPVW_Y > borderY || item.position.y + item.velocity.y < 0 ){
    return item.velocity.y = -item.velocity.y;
  } 
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
  let MusicEat = document.getElementById("MusicEat");
  MusicEat.play();
}

