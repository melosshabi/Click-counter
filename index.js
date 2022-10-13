
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
        resetBtn.disabled = false;
        resetBtn.className = "reset-btn";
    }
});

resetBtn.addEventListener('click', ()=>{
  
    if(timesClicked.innerText > 0)
    {
      timesClicked.innerText = 0;
      clickCount = 0;
      lowerBtn.disabled = true;
      lowerBtn.className = 'disabled-btn';
      resetBtn.disabled = true;
      resetBtn.className = 'disabled-btn';
      
    }
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
    resetBtn.disabled = true;
 } 
});