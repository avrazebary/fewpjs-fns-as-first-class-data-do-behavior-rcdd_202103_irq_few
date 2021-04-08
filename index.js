/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  // We're converting the time below to hours minutes and seconds then will check the if con
  var a  = time.split(':');
  var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
  
  if(time>=12){
    console.log("Good Morning");
  }
  else if(time>=12 && time <=17 ){
     console.log("Good Afternoon");
  }
  else if (time>17){
    console.log("Good Evening");
  }
}
/* Write your implementation of displayMessage() */
