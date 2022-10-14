let gold = 0;
let miners = 0;
let gps = 0;

var intervalId = window.setInterval(function(){
  makegoldMiners();
}, 1000);

var intervalId2 = window.setInterval(function(){
  updateGoldCount();
}, 20);

function updateGoldCount() {
  document.getElementById("goldcounter").innerHTML = gold;
}

function goldbutton() {
  gold += 1;
}

function addminers() {
  console.log("Adding miner..");
  if (gold >= 100) {
    miners += 1
    gold -= 100;
    gps += 1;
  } else {

  }
}
function makegoldMiners() {
  if (miners >= 1) {
    for (let i = 0; i < miners; i++) {
      gold += 1;
    }
  } else {
    // do nothing
  }
}

