var getinp = document.getElementById("todo")
var getlist = document.getElementById('list')

var addtodo = () => {
    if (getinp.value == "") {
        alert('plz enter a todo')
    } else {
        getlist.innerHTML += `<li>${getinp.value} <span><button class="btn btn-outline-success" onclick="editTask(this)">edit</button>  <button class='btn btn-outline-danger' onclick="this.parentNode.parentNode.remove()">delete </button></span> </li>`
        getinp.value = ''
    }
}
var del = () => {
    getlist.innerHTML = ''
}


var editTask= (e) => {
    var getupvalue = prompt("enter updated value", e.parentNode.parentNode.firstChild.textContent)
    e.parentNode.parentNode.firstChild.textContent = getupvalue
}