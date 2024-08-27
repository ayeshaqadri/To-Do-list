const inputbox = document.getElementById("inputbox");
const listcountainer = document.getElementById("list-countainer");
function addTask(){
    if (inputbox.value === ''){
        Swal.fire({
            title: "EMPTY INPUT...",
            text: "you must write something",
            icon: "question"
          });
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcountainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listcountainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
}
}, false);

function saveData(){
    localStorage.setItem("data", listcountainer.innerHTML)
}
function showTask(){
    listcountainer.innerHTML = localStorage.getItem("data")
}
showTask();