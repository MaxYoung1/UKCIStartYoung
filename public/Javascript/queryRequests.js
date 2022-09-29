let xhr = new XMLHttpRequest();


function sendPost() {
  // build JSON string
  console.log("queryRequests");

  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("phone_number").value;
  var message = document.getElementById("message").value;

  var queryJSON = {
    "firstName": firstName,
    "lastName": lastName,
    "email": email,
    "telephone": tel,
    "message": message
  };

  console.log(queryJSON);

  postToFile(queryJSON);

};

function postToFile(jsonData) {
    //var url = "http://localhost:3000/fileHandler";
    var url = "https://ukcistartyounguk.azurewebsites.net/fileHandler"
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    
    //xhr.onreadystatechange = () => {
    //    if (xhr.readyState === 4) {
    //        console.log(xhr.status);
    //        console.log(xhr.responseText);
    //    }
    //};

    //let data = `{ "name": "John", "age": 22, "gender": "female"}`;

    console.log(jsonData);
    xhr.send(JSON.stringify(jsonData));

    xhr.onload = () => {
        console.log(xhr.response); 
    };
}