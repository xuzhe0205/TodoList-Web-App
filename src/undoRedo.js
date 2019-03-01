var tablelist = new Array();
var todoListArr = new Array();
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