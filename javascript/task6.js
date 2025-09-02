function fun() {
    const input = document.getElementById("m");
    if (!input.value.trim()) return alert("Enter a task!");

    const task = document.createElement("input");
    task.type = "text";
    task.value = input.value;
    task.readOnly = true;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => myfun(task);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => myfun1(task);

    document.body.append(task, editBtn, deleteBtn, document.createElement("br"));
    input.value = "";
}

function myfun(task) {
    task.readOnly = false;
    task.onblur = () => task.readOnly = true;
    document.getElementById("m").value = task.value;
}

function myfun1(task) {
    task.nextSibling.remove();
    task.nextSibling.remove();
    task.nextSibling.remove();
    task.remove();
}


                                                       