let inputBox = document.getElementById("inputbox");
let btn = document.getElementById("btn");
let listContainer = document.getElementById("listcontainer");

btn.addEventListener("click", function (e) {
  if (inputBox.value === "") {
    alert("Type some context");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
    // saveData();
  }
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  
} else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showData();

console.log(listContainer.innerHTML);

