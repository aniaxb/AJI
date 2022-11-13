"use strict"
let todoList = []; //declares a new array for Your todo list
const BASE_URL = "https://api.jsonbin.io/v3/b/635d507c0e6a79321e386d57";
const SECRET_KEY = "$2b$10$1Ye37fR7QQT3Qq0EAknBu.E92RX3Olc/tBc/vziYzmH7tFU7c2RO6";

let initList = function () {
    $.ajax({
        // copy Your bin identifier here. It can be obtained in the dashboard
        url: BASE_URL,
        type: 'GET',
        headers: { //Required only if you are trying to access a private bin
            'X-Master-Key': SECRET_KEY
        },
        success: (data) => {
            if (data != null) {
                //console.log(data);
                todoList = data['record'];
                updateTodoList();
            }
        },
        error: (err) => {
            console.log(err.responseJSON);
        }
    })
};

initList();

let updateJSONbin = function () {
    $.ajax({
        url: BASE_URL,
        type: 'PUT',
        headers: { //Required only if you are trying to access a private bin
            'X-Master-Key': SECRET_KEY
        },
        contentType: 'application/json',
        data: JSON.stringify(todoList),
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err.responseJSON);
        }
    })
}

let getterTime = (task) => {
    return new Date(task.dueDate).getTime();
};

let updateTodoList = function () {
    let itemlist = [];
    let id = 1;
    let table = $("#tableList").find("tbody");
    const inputStartDate = $("#inputStartDate");
    const inputEndDate = $("#inputEndDate");
    let filterInput = $("#inputSearch").val();
    let startDate = new Date(inputStartDate.val()).getTime();
    let endDate = new Date(inputEndDate.val()).getTime();
    //remove all elements
    table.empty();

    for (let todo in todoList) {
        if ((filterInput == "" || todoList[todo].title.toLowerCase().includes(filterInput.toLowerCase()) || todoList[todo].description.toLowerCase().includes(filterInput.toLowerCase())) &&
            (($(inputStartDate).val() == "" || startDate <= getterTime(todoList[todo])) && ($(inputEndDate).val() == "" || endDate >= getterTime(todoList[todo])))) {
            itemlist.push(todoList[todo]);
        }
    }
    console.log(itemlist);
    //add all elements
    for (let todo in itemlist) {
        table.append(
            "<tr>" +
            "<td>" + id + "</td>" +
            "<td>" + itemlist[todo].title + "</td>" +
            "<td>" + itemlist[todo].description + "</td>" +
            "<td>" + itemlist[todo].place + "</td>" +
            "<td>" + itemlist[todo].dueDate + "</td>" +
            "<td>" + "<input class='btn delete' type='button' value='Delete' onclick='deleteTodo(" + todo + ")'/>" + "</td>" +
            "</tr>"
        );
        id++;
    }
}
// setInterval(updateTodoList, 3000);

let addTodo = function () {
    //get the elements in the form
    let inputTitle = $("#inputTitle");
    let inputDescription = $("#inputDescription");
    let inputPlace = $("#inputPlace");
    let inputDate = $("#inputDate");
    //get the values from the form
    let newTitle = inputTitle.val();
    let newDescription = inputDescription.val();
    let newPlace = inputPlace.val();
    let newDate = new Date(inputDate.val());
    //create new item
    let newTodo = {
        title: newTitle,
        description: newDescription,
        place: newPlace,
        dueDate: newDate
    };
    //add item to the list
    todoList.push(newTodo);
    updateJSONbin();
    updateTodoList();
    window.localStorage.setItem("todos", JSON.stringify(todoList));
}

let deleteTodo = function (index) {
    todoList.splice(index, 1);
    updateJSONbin();
    updateTodoList();
}
