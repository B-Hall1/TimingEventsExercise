setTimeout(() => {
    const p1 = document.querySelector("#first");
    p1.append("Hi");
  }, 1000);

  setTimeout(() => {
    const p2 = document.querySelector("#timeout-nesting");
    p2.append("One");
    setTimeout(() => {
      const p2 = document.querySelector("#timeout-nesting");
      p2.append("Two");
    }, 1000);
  }, 2000);
 
  let intervalId;
  
  let num = 1;
  intervalId = setInterval(() => {
    console.log(num);
    num++;
  }, 1000);
  
  function stopCounter() {
    clearInterval(intervalId);
  }
  
  document.querySelector("button").addEventListener("click", stopCounter);
  
  min = 2;
  sec = 00;
  const countdownDiv = document.getElementById('countdown');
  
  const clock = setInterval(() => {
      
      countdownDiv.innerText = `${min}:${sec}`
      if(min != 0){
          if(sec != 0){
              sec--;
          }else{
              min--;
              sec = 59;
          }
      }else{
          console.log("times up");
          clearInterval(clock);
      }
  },1000)