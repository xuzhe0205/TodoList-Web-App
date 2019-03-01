/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_jsonFun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/jsonFun */ "./src/jsonFun.js");
/* harmony import */ var _src_undoRedo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/undoRedo */ "./src/undoRedo.js");
/* harmony import */ var _src_undoRedo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_undoRedo__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/jsonFun.js":
/*!************************!*\
  !*** ./src/jsonFun.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _undoRedo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./undoRedo */ "./src/undoRedo.js");
/* harmony import */ var _undoRedo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_undoRedo__WEBPACK_IMPORTED_MODULE_0__);


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



/***/ }),

/***/ "./src/undoRedo.js":
/*!*************************!*\
  !*** ./src/undoRedo.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tablelist = new Array();
var todoObj = {};
var cnt = 0;
var addCnt = 0;
var isDelete = false;
//create title's name with extension/id as for example: "errands0"
todoObj["title"] = (document.getElementById("todoTitle"+cnt).innerHTML.slice(7)) + cnt;
todoObj["item"] = tablelist;
todoListArr.push(todoObj);
var clone;
//var new_i = 0;
//var addAuthor = document.getElementById('addAuthor'+cnt);
var original = document.getElementById("tableContainer0");

function addItem(e) {
    //get the associated txtItem's id!
    var txtItemID = "txtItem"+e.target.id.replace(/\D/g,'');
    //add item
    addCnt++;
    if (tablelist.length < 100) {
        if (document.getElementById(txtItemID).value != "") {
            var inputText = document.getElementById(txtItemID).value;
            //tablelist.push(inputText);
            for (let i = 0; i<todoListArr.length; i++){
                //check association by the match of title's name's extension
                if (todoListArr[i].title[todoListArr[i].title.length-1] == e.target.id.replace(/\D/g,'')){
                    todoListArr[i].item.push(inputText);
                    todoListArr[i].item.push(e.target.id.replace(/\D/g,''));
                    //console.log(todoListArr[i].item);
                    getTable(todoListArr[i].item);
                }
            }
            //todoObj["item"] = tablelist;
            document.getElementById(txtItemID).value = "";
            
        }
        else {
            alert("Input text cannot be empty!");
            return;
        }

    }
};

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function duplicate(todoTitle) {
    
    clone = original.cloneNode(true); // "deep" clone div with id: tableContainer
    clone.id = "tableContainer" + ++cnt; // there can only be one element with an ID
    var newList = new Array();
    var titleStr = '<td colspan=3>' + "Title: " + todoTitle + '</td>';
    clone.getElementsByTagName("TR")[0].innerHTML = titleStr;

    clone.getElementsByTagName("TBODY")[0].innerHTML = '';
    clone.getElementsByClassName("author")[0].innerHTML = "Author:";
    clone.getElementsByTagName("TR")[0].id = "todoTitle"+cnt;
    clone.getElementsByTagName("TBODY")[0].id = "tablebody" + cnt
    var str;
    for (var i = 0; i < 10; i++) {
        str = addTableElement(newList, i, cnt, str);
        clone.getElementsByTagName("TBODY")[0].innerHTML += str;
    }
    insertAfter(original,clone);
    original = clone;
    return clone;
}

function addTable(){
    var todoTitle = document.getElementById("addTitle").value;
    clone = duplicate(todoTitle);
    var todoObj = {};
    var tablelist = new Array();
    todoObj["title"] = todoTitle + cnt;
    todoObj["item"] = tablelist;
    todoListArr.push(todoObj);
    clone.getElementsByTagName("INPUT")[0].id = "txtItem" + cnt;
    clone.getElementsByTagName("INPUT")[1].id = "txtAuthor" + cnt;
    clone.getElementsByTagName("BUTTON")[0].id = "addItem" + cnt;
    clone.getElementsByTagName("BUTTON")[1].id = "addAuthor" + cnt;
    clone.getElementsByClassName("author")[0].id = "author" + cnt;
    
};

//add table body element
function addTableElement(data, i, currID, str){
    if (data[i]) {
        str = '<tr id="clr' + (i + 1) + '" onclick="changeColor(this)">' +
            '<td>' + '<input type = "checkbox">' + (i + 1 )+ '</td>' +
            '<td name="A1" id="a' + (i + 1) + currID + '">' + data[i] +
            '</td>' +
            '<td style="display: table-cell" id="b' + (i + 1) + currID + '">' +
            '<button class = "' + currID + '" id="' + i + '" onclick="deletes(event)">Delete</button></td>' +
            '</tr>';
    } else {
        str = '<tr id="clr' + (i + 1) + '" onclick="changeColor(this)">' +
            '<td>' + '<input type = "checkbox">' + (i + 1) + '</td>' +
            '<td name="A1" id="a' + (i + 1) + currID + '"></td>' +
            '<td style="display: table-cell" id="b' + (i + 1) + currID + '">' +
            '<button class = "' + currID + '" id="' + i + '" onclick="deletes(event)">Delete</button></td>' +
            '</tr>';
    }
    return str;
}

//update the table
function getTable(data) {
    //set up table
    var currentTodoID;
    if (addCnt != 0 || isDelete == true){
        currentTodoID = data[data.length-1];
        //delete the trailing extension/id of current todoItem
        data.pop();
    }
    else{
        currentTodoID = cnt;
    }
    document.getElementById("tablebody"+currentTodoID).innerHTML = '';
    var str = "";
    for (var i = 0; i < data.length; i++) {
        
        str = addTableElement(data, i, currentTodoID, str);
        document.getElementById("tablebody"+currentTodoID).innerHTML += str;
        tablelist = data;
    }
    if (addCnt == 0 && isDelete == false){
        for (var j = 0; j<todoListArr.length; j++){
            if (todoListArr[j].title.replace(/\D/g,'') == cnt){
                for (var m = 0; m<data.length; m++){
                    todoListArr[j].item.push(data[m]);
                }
            }
        }
    }
    var date = new Date();
    document.getElementById("date").innerHTML = "Date: " + date;
};

//delete item
function deletes(e) {
    isDelete = true;
    for (var i = 0; i < todoListArr.length; i++){
        //find the element being deleted by the match of extension id of title's name
        if (todoListArr[i].title[todoListArr[i].title.length-1] == e.target.className){
            if ((todoListArr[i].item).length > 0){
                (todoListArr[i].item).splice(parseInt(e.target.id), 1);
                todoListArr[i].item.push(e.target.className);
            }
            getTable(todoListArr[i].item);
            isDelete = false;
            return;
        }
    }
};

//change color and mark as complete
function changeColor(e) {
    if (e.style.backgroundColor != "green") {
        e.style.backgroundColor = "green";
    } else {
        e.style.backgroundColor = "antiquewhite";
    }
};

//Add author
function addAuthor(e){
    var txtAuthorID = "txtAuthor" + e.target.id.replace(/\D/g,'');
    if (document.getElementById(txtAuthorID).value !== "") {
        var inputText = document.getElementById(txtAuthorID).value;
        //document.getElementById('txtAuthor'+cnt).value = "";
        document.getElementById("author" + e.target.id.replace(/\D/g,'')).innerHTML = "Author: " + inputText;
    }
    else {
        alert("Input text cannot be empty!");
        return;
    }
    document.getElementById(txtAuthorID).value = "";
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map