let gold = 0;
let miners = 0;
let gps = miners / 20;
let wagecost = miners * 12;
let minercooldown = 20000 / miners;
let minercost = 100;

const mines = document.getElementById('mines');
const minerimg = document.getElementById('minerimgid');

var img = document.createElement("img");
img.src = "images/miner.png";

var minerproduction = window.setInterval(function() { minersmakegold(); }, minercooldown);

/*var wage = window.setInterval(function() {
  wage();
}, 300000);

function wage() {
  if (gold >= miners * 10) {
    gold -= miners * 10;
  } else {
    //add code here for removing certain amount of miners
  }
}*/

// ^ commented bc we dont know how to do this yet -L

function upgrade1() {
  if (gold >= 300) {
    gold -= 300;
    minercooldown -= 10000;
    wagecost = wagecost * 1.7;
    gps = gps * 2;

    //this upgrade works now
  }
}

var updateTimer = window.setInterval(function() { updateStats(); }, 20);

function goldbutton() {
  gold += 100;
}

function addminers() {
  if (gold >= 100) {
    miners += 1
    gold -= minercost;
    gps += (0.05);
  }
}
function minersmakegold() {
  if (miners >= 1) {
    gold += 1;
  }
}

var goldchecker = window.setInterval(function() { checkgold(); }, 1000);

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function checkgold() {
  let goldlast = gold;
  delay(1000);
  let goldnew = gold;
  let newgps = goldlast - goldnew;
} //the goal was this would measure the change in gold in the last second and set gps to that, but it just don't work so idk -L

function updateStats() {
  document.getElementById("goldcounter").innerHTML = gold;
  document.getElementById("minercount").innerHTML = miners;
  document.getElementById("gpscount").innerHTML = Math.round(newgps * 100) / 100;
}