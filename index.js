/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
 let this_time = time.split(":");
 let hour = this_time[0];
 let minute = this_time[1];
  
 let this_hour = parseInt(hour);
 let this_minute = parseInt(minute);
 
  
  if(this_hour<12){
    return "Good Morning";
  }
  else if((this_hour > 12) && (this_minute<17) && this_minute<01 ){
     return "Good Afternoon";
  }
  else if (time>17){
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
