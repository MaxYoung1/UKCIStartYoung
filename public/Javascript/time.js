// OPEN THE CONSOLE BELOW TO SEE THE JAVASCRIPT RUNNING

// find out what time it is
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];


var currenttime = new Date();
var currenthour = currenttime.getHours();


console.log(currenthour);

// do a conditional

var emailmessage = "You are <strong>OK</strong> to email me now";

if (currenthour < 8 || currenthour > 16 || daylist[day] != "Friday"  ) {
  emailmessage = "sorry this is out of work hours, try again " + day ;
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);
