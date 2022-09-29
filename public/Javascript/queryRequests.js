const { response } = require("../../app");

let xhr = new XMLHttpRequest();
//const url = "http://localhost:3000/fileHandler";
const url = "https://ukcistartyounguk.azurewebsites.net/fileHandler"

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
    let xhr = new XMLHttpRequest();
    const url = "https://ukcistartyounguk.azurewebsites.net/fileHandler"
    //const url = "http://localhost:3000/fileHandler";
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



function getQueries() {
    let xhr = new XMLHttpRequest();
    //const url = "http://localhost:3000/fileHandler";
    const url = "https://ukcistartyounguk.azurewebsites.net/fileHandler"
    xhr.open("GET", url, false);
    xhr.send();


    var data = xhr.responseText;
    var jsonResponse = JSON.parse(data);

    console.log(jsonResponse);




    //queries = JSON.parse(response);
    //queries = queries.body.queries; // that makes no sense

    console.log("Qs are " + jsonResponse);

    formBox = document.getElementById("queryForms");

    var paragraphs = "";

    for (var i = 0; i < jsonResponse.queries.length; i++) {
        console.log(jsonResponse.queries[i].firstName)
         paragraphs += "<p>" + JSON.stringify(jsonResponse.queries[i]) +"</p><br>";
    }

    console.log(paragraphs)
    formBox.innerHTML = paragraphs;

    // formBox already exists, every form needs a wrapper
    // a form inside of it
    // then a bunch of inputs
    /*
    for (var i = 0; i < response.length; i++) {
        console.log("are we in loop?");
        container = document.createElement('div');
        container.setAttribute("class", "container");
        form = document.createElement("form");
        container.appendChild(form);


        firstName = document.createElement("input").setAttribute("id", "first_name")
        form.appendChild(firstName);

        form.appendChild(document.createElement("input").setAttribute("id", "last_name"));

        form.appendChild(document.createElement("input").setAttribute("id", "email"));

        form.appendChild(document.createElement("input").setAttribute("id", "phone_number"));

        form.appendChild(document.createElement("input").setAttribute("id", "message"));

        container.appendChild(form);

        formBox.appendChild(container);
    }
    */

}