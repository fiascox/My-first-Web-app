let ul = document.querySelector("#list");
let li;
let string = document.querySelector(".string");
let please = document.querySelector(".please");

let addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

let deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteItem);

function addItem() {
  let input = document.querySelector("#input");
  let item = input.value.charAt(0).toUpperCase() + input.value.slice(1);
  let textNode = document.createTextNode(item);
  if (item === "") {
    string.textContent = "Please Enter Your Todo";
    string.style.color = "red";
    string.style.fontSize = "1em";
    string.style.margin = "0";
    string.style.marginTop = "7px";
    setTimeout(() => {
      string.textContent = "";
    }, 5000);
  } else {
    li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");
    let label = document.createElement("label");
    // ul.appendChild(label);
    li.appendChild(checkbox);
    li.appendChild(label);
    label.appendChild(textNode);
    ul.insertBefore(li, ul.childNodes[0]);
    input.value = "";
    li.className = "virtual";

    setTimeout(() => {
      li.className = "virtual";
    }, 1000);
  }
}

function deleteItem() {
  li = ul.children;

  for (let index = 0; index < li.length; index++) {
    if (li[index] && li[index].children[0].checked) {
      while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index]);
        return;
      }
    } else {
      please.textContent = "Please select item";
      please.style.color = "red";
      setTimeout(() => {
        please.textContent = "";
      }, 3000);
    }
  }
}
