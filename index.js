
const container = document.getElementById('container');
const timesClicked = document.getElementById('click-amount');
const resetBtn = document.getElementById('reset-btn');
let lowerBtn = document.getElementById('lower-btn');
let clickCount = 0;
container.addEventListener('click', () =>{
    clickCount++;
    timesClicked.innerText = clickCount;
    if(timesClicked.innerText > 0)
    {
        lowerBtn.className = 'lower-btn';
        lowerBtn.disabled = false;
    }
});

resetBtn.addEventListener('click', ()=>{
    timesClicked.innerText = 0;
    clickCount = 0;

});

lowerBtn.addEventListener('click', ()=>{
  if(timesClicked.innerText > 0)
  {
    clickCount -= 1;
    timesClicked.innerText = clickCount;
  }
 if(clickCount == 0){
    lowerBtn.className = 'disabled-btn';
    lowerBtn.disabled = true;
 } 
});