alert(`
Here are the rules to play this game:

1. You will have 60 seconds to play.
2. Click on the bubble that appears in the hit box.
3. Clicking on a bubble will move the position of other bubbles.
4. Each correct hit will earn you 10 points.
5. Try to collect as many points as possible within the 60 seconds.

`);





var timer=60;
var score=0;
var hitrn

function increaseScore(){
    score+=10;
    document.querySelector('#scoreval').textContent=score;
}

function makeBubble(){
    var clutter="";
    for(var i=1;i<=114;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector('#pbtm').innerHTML=clutter;
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector('#newHit').textContent=hitrn;

}

 function runTimer(){

    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerval').innerText=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1 style="color: #402E7A;">Game Over</h1>`;
            document.querySelector('#newHit').textContent=`Refresh to restart`;
        }
    },1000);
 }

 document.querySelector("#pbtm")
 .addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
 });

 document.querySelector('#startbtn')
 .addEventListener("click",function(){
    makeBubble();
    runTimer();
    getNewHit();
 });

 

