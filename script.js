let gold = 0;
let miners = 0;
let gps = miners / 20;
let wagecost = miners * 12;

const mines = document.getElementById('mines');

//var minerElement = document.createElement(img);
//minerElement.setAttribute('src', 'images/miner.png'); //L

function createImageMiner() {
  var createminerimage = document.createElement('img');
  createminerimage.src =
    'images/miner.png';
  document.getElementById('mines').appendChild(img);
}

var goldperseconds = window.setInterval(function() {
  makegoldMiners();
}, 20000);

function updateStats() {
  document.getElementById("goldcounter").innerHTML = gold;
  document.getElementById("minercount").innerHTML = miners;
  document.getElementById("gpscount").innerHTML = Math.round(gps * 100) / 100;
}

var updateTimer = window.setInterval(function() {
  updateStats();
}, 20);



function goldbutton() {
  gold += 100;
}

function addminers() {
  console.log("Adding miner..");
  if (gold >= 100) {
    miners += 1
    gold -= 100;
    gps += (0.05);
    createImageMiner();
  } else {
    console.log("FUCK!")
  }
}
function makegoldMiners() {
  if (miners >= 1) {
    for (let i = 0; i < miners; i++) {
      gold += 1;
    }
  }
}
