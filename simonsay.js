let gameseq=[];
let userseq=[];
let h2=document.querySelector("h2");

let btn=[ "box1" , "box2","box3","box4"];

let started=false;
let level=0;
document.addEventListener("keypress" , function(){
    if(started== false){
        started=true;
        console.log("game is started");

    levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250);
}

function levelUp() {
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ran= Math.floor(Math.random()*4);
    let ranname = btn[ran];
    let ranbtn= document.querySelector(`.${ranname}`);
    gameseq.push(ranname);
    btnflash(ranbtn);
}


function matching(idx){
    
        if(gameseq[idx] ===  userseq[idx]){
            if(userseq.length == gameseq.length)
            {
                    setTimeout(levelUp , 1000);
            }

        }else{
            h2.innerHTML=`<b>GAME OVER<b> yuor score is<b>${level}<b> Press any key to start`;
            reset();
        }
    
}

function btnpress(){
    let btn=this;
    btnflash(btn);

    userseq.push(btn.getAttribute("id"));
    matching(userseq.length-1);
}

let allbtns = document.querySelectorAll(".boxes div");

for(allbtn of allbtns){
    allbtn.addEventListener("click" , btnpress);
    
}

function reset() {
    gameseq=[];
    userseq=[];
    started= false;
    level=0;
}
/*let gameseq = [];
let userseq = [];
let h2 = document.querySelector("h2");

let btn = ["box1", "box2", "box3", "box4"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    console.log("game is started");
    levelUp();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let ran = Math.floor(Math.random() * 4);
  let ranname = btn[ran];
  let ranbtn = document.querySelector("." + ranname);
  gameseq.push(ranname);
  btnflash(ranbtn);
}

function matching(idx) {
  if (gameseq[idx] === userseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = "<b>GAME OVER</b> Press any key to start";
  }
}

function btnpress() {
  let clickedBtn = this;
  btnflash(clickedBtn);
  userseq.push(clickedBtn.getAttribute("id"));
  matching(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".boxes div");

for (let i = 0; i < allbtns.length; i++) {
  allbtns[i].addEventListener("click", btnpress);
}*/
