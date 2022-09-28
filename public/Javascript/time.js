// OPEN THE CONSOLE BELOW TO SEE THE JAVASCRIPT RUNNING

// find out what time it is
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];


var currenttime = new Date();
var currenthour = currenttime.getHours();


console.log(currenthour);

// do a conditional

var emailmessage = "You are <strong>OK</strong> to contact me now and I will respond shortly";

if (currenthour < 9 || currenthour > 17 || daylist[day] != "Friday"  ) {
  emailmessage = "Sorry it is currently out of our working hours, i will try respond on Friday 9am-5pm UK" ;
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message"> <strong>' + emailmessage + "</strong></p>" 
);
