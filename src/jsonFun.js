import "./undoRedo";

let closeNav = document.getElementById('closeNav');
let loGin = document.getElementById('loGin');
let hideAndShow = document.getElementById('hideAndShow');
let openNav = document.getElementById('openNav');
var tbalelist = new Array();
var statuslist = new Array();


//show the side nav bar upon clicking on "open" button
openNav.addEventListener('click', (event) => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
});

//close the side bar upon clicking on "X" button
closeNav.addEventListener('click', (event) => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
});

//hide the content until the certain tag is clicked on the nav bar
hideAndShow.addEventListener('click', (event) => {
    var x = document.getElementById("todoApp");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    readFile();
});

//The login function that prompt users for their username
loGin.addEventListener('click', (event) => {
    var x = document.getElementById("todoApp");
    x.style.display = "none";
    var user = prompt("Please enter your username", "");
    if (user != null) {
        document.getElementById("username").innerHTML =
            "Hello " + user + "!";
    }
});

//this function will be called in function "hideAndShow()"
function readFile() {
    var rawFile = new XMLHttpRequest();
    //rawFile.overrideMimeType("application/json");
    //rawFile.open('GET', "./todoData.json", true);
    rawFile.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == "200") {
            //Seccessfully load the JSON file, now parse the file into arrays
            var jsonData = JSON.parse(this.responseText);
            //Manipulate data loaded from the json file
            inputJson(jsonData);
            //return tbalelist;
        }
    };
    
    rawFile.open('GET', "https://api.myjson.com/bins/d5p9u", true);
    rawFile.send();
};

////this function will be called in function "readFile() for reading details"
function inputJson(data) {
    var todoList = data.todoList;
    //get init title
    var title1 = todoList[0].title;
    document.getElementById("todoTitle0").innerHTML = "Title: " + title1;
    var items = todoList[0].items;
    //get init item lists
    var items1 = items[0].item1;
    var items2 = items[0].item2;
    var items3 = items[0].item3;
    var items4 = items[0].item4;
    tbalelist.push(items1);
    tbalelist.push(items2);
    tbalelist.push(items3);
    tbalelist.push(items4);
    getTable(tbalelist);
    //get init date
    var date = todoList[0].date;
    document.getElementById("date").innerHTML = "Date: " + date;
    //get init complete status
    var complete1 = items[0].complete1;
    var complete2 = items[0].complete2;
    var complete3 = items[0].complete3;
    var complete4 = items[0].complete4;
    console.log(complete1);
    statuslist.push(complete1);
    statuslist.push(complete2);
    statuslist.push(complete3);
    statuslist.push(complete4);
    for (var i = 0; i < 4; i++) {
        var id = "clr" + (i + 1);
        if (statuslist[i] == "ture") {
            document.getElementById("tablebody0").getElementsByTagName("TR")[i].setAttribute("style", "background-color: green;");
        }
    }
    //get init author info
    var initAuthor = todoList[0].author;
    document.getElementById("author0").innerHTML = "Author: " + initAuthor;
};

