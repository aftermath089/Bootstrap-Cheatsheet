
var counter = 1;
var request = new XMLHttpRequest();
request.open("GET", "https://learnwebcode.github.io/json-example/animals-3.json");


//load on page onload
// request.onload = function () {
//     console.log(request.responseText);
//     var data = JSON.parse(request.responseText);
//     console.log(data[0]);
// }
// request.send();


//load on click
var btn = document.getElementById("button");
var container = document.getElementById("list");

btn.addEventListener("click", function () {
    var request = new XMLHttpRequest();
    request.open("GET", "https://learnwebcode.github.io/json-example/animals-"+counter+".json");
    request.onload = function () {
        if(request.status>=200 && request.status<400){
            console.log(request.responseText);

            var data = JSON.parse(request.responseText);
            console.log(data[0]);
    
            render(data);
        }else{
            console.log("error: "+request.status);
        }
    }

    request.send();
    counter++;
});

//fungsi untuk inject html
function render(data){
    var string = "";

    for(i = 0; i<data.length; i++){
        string += "<p> name: "+data[i].name+" likes to eat: ";
        for(j=0; j<data[i].foods.likes.length; j++){
            string+= data[i].foods.likes[j]+", ";
        }
    }
    string += "</p>";

    container.insertAdjacentHTML('beforeend', string);
}