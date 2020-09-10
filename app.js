// fetching a list from URL
const ItemList = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((result) => {
    document.getElementById("list").innerHTML = result
      .map((item) => `<li>${item.title}</li>`)
      .join("");
    return result;
  });

// creating a new list via input and delete it

const input = document.getElementById("userinput");
const btn = document.getElementById("enter");
const ul = document.getElementById("new");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  li.addEventListener("click", function () {
    const finished = this.classList.toggle("did");
    const removeButton = document.createElement("button");
    removeButton.classList.add("deleteButton");
    if (finished) {
      removeButton.appendChild(document.createTextNode("remove"));
      removeButton.classList = "deleteButton";
      li.appendChild(removeButton);

      removeButton.addEventListener("click", function () {
        this.parentElement.remove();
      });
    } else {
      this.getElementsByClassName("deleteButton")[0].remove();
    }
  });
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

input.addEventListener("keypress", addListAfterPress);
btn.addEventListener("click", addListAfterClick);
