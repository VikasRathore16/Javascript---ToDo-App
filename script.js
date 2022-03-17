in_todo = Array()
com_todo = Array()
var link = document.getElementById('update');
link.style.display = 'none'; //or
link.style.visibility = 'hidden';
function add() {
    var add = document.getElementById('add');
    add.style.display = ''; //or
    add.style.visibility = '';


    var link = document.getElementById('update');
    link.style.display = 'none'; //or
    link.style.visibility = 'hidden';


    
    new_task = document.getElementById('new-task').value
    in_todo.push(new_task)
    in_display(in_todo)
    console.log(in_todo)

}

function in_edit(item) {
    console.log(item)
    document.getElementById("new-task").value = item;
    var index = in_todo.indexOf(item);
    console.log(index)
    if (index !== -1) {
        in_todo.splice(index, 1);
    }
    var update = document.getElementById('update');
    update.style.display = ''; //or
    update.style.visibility = '';


    var add = document.getElementById('add');
    add.style.display = 'none'; //or
    add.style.visibility = 'hidden';
    in_display(in_todo)
    com_display(com_todo)

}

function com_edit(item) {
    console.log(item)
    document.getElementById("new-task").value = item;
    var index = com_todo.indexOf(item);
    console.log(index)
    if (index !== -1) {
        com_todo.splice(index, 1);
    }

    var update = document.getElementById('update');
    update.style.display = ''; //or
    update.style.visibility = '';


    var add = document.getElementById('add');
    add.style.display = 'none'; //or
    add.style.visibility = 'hidden';
    in_display(in_todo)
    com_display(com_todo)


}

function in_del(item) {
    console.log(item)
    var index = in_todo.indexOf(item);
    console.log(index)
    if (index !== -1) {
        in_todo.splice(index, 1);
    }
    in_display(in_todo)

}
function com_del(item) {
    console.log(item)
    var index = com_todo.indexOf(item);
    console.log(index)
    if (index !== -1) {
        com_todo.splice(index, 1);
    }
    com_display(com_todo)

}

function in_display(in_todo) {
    html = ''
    for (i = 0; i < in_todo.length; i++) {
        html += "<li><input type='checkbox' name='incomplete_todo[]' id='checkbox' value='" + in_todo[i] + "'>\
        <label>" + in_todo[i] + "</label><button class='edit' onclick=in_edit('" + in_todo[i] + "') value=" + in_todo[i] + ">Edit</button>\
        <button class='delete' name='del[]' onclick=in_del('"+ in_todo[i] + "') value=" + in_todo[i] + ">Delete</button></li>"
    }
    document.getElementById("incomplete-tasks").innerHTML = html;

    document.getElementById('incomplete-tasks').onclick = function () {
        var checkboxes = document.getElementsByName('incomplete_todo[]');
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked) {
                com_todo.push(checkboxes[i].value)
                console.log(checkboxes[i].value)
                var index = in_todo.indexOf(checkboxes[i].value);
                if (index !== -1) {
                    in_todo.splice(index, 1);
                }
                in_display(in_todo)
                com_display(com_todo)
                console.log("com", com_todo, "in", in_todo)
            }

        }
    }
}

function com_display(com_todo) {
    html = ''
    for (i = 0; i < com_todo.length; i++) {
        html += "<li><input type='checkbox' checked name='complete_todo[]'  value='" + com_todo[i] + "'>\
        <label>" + com_todo[i] + "</label>\
        <button class='edit' onclick=com_edit('"+ com_todo[i] + "') >Edit</button>\
        <button class='delete' onclick=com_del('"+ com_todo[i] + "')>Delete</button></li>"
    }
    document.getElementById("completed-tasks").innerHTML = html;
    document.getElementById('completed-tasks').onclick = function () {
        var checkboxes = document.getElementsByName('complete_todo[]');
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (!checkboxes[i].checked) {
                in_todo.push(checkboxes[i].value)
                console.log(checkboxes[i].value)
                var index = com_todo.indexOf(checkboxes[i].value);
                if (index !== -1) {
                    com_todo.splice(index, 1);
                }
                in_display(in_todo)
                com_display(com_todo)
                console.log("com", com_todo, "in", in_todo)
            }

        }
    }
}

