// OPEN THE CONSOLE BELOW TO SEE THE JAVASCRIPT RUNNING

// find out what time it is

var currenttime = new Date();
var currenthour = currenttime.getHours();


console.log(currenthour);

// do a conditional

var emailmessage = "You are <strong>OK</strong> to email me now";

if (currenthour < 8 || currenthour > 16 || calObj.get(Calendar.DAY_OF_WEEK) != Calendar.FRIDAY ) {
  emailmessage = "sorry this is out of work hours, try again " + Calendar.FRIDAY ;
}

var getheading = document.querySelector("Contact Me");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);
