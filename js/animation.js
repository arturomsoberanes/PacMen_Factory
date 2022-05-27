let pacmans = [];

window.onload = animation;

function animation(){
  for(let i = 0; i<=5;i++){
    pacmans.push(makeBackground());
  }
  move();
  
}
function move(){
    focus = (focus + 1) % 2;
    pacmans.forEach((item) => {
      checkBorder(item)
      item.position.x += item.velocity.x;
      item.position.y += item.velocity.y;

      item.pac.style.left = item.position.x + "px";
      item.pac.style.top = item.position.y + "px";
      item.pac.src = pacArray[focus];
    })
  if(!started){
    setInterval(move, 100);
    started = true;
  }
}

function checkBorder(item){
  if(item.position.x + item.velocity.x + item.pac.width > window.innerWidth || item.position.x + item.velocity.x < 0){
    item.velocity.x = -item.velocity.x;
  }
  if(item.position.y + item.velocity.y + item.pac.height > window.innerHeight || item.position.y + item.velocity.y < 0 ){ 
    item.velocity.y = -item.velocity.y;
  }
}

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale
  }
}
function makeBackground(){

  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  let body = document.getElementById("body");
  let pac = document.createElement('img');
  pac.width = 200;
  pac.src = "./img/pacman.png" 

  pac.style.position = 'absolute';
  pac.style.left = position.x + "px";
  pac.style.top = position.y + "px";
  pac.style.opacity = 0.4;
  pac.style.zIndex = "-1";
  

  body.appendChild(pac);

  return {
    position,
    velocity,
    pac
  }

}
