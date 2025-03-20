const openModalBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal-screen");
const createTodoBtn = document.querySelector(".continue");
const modalCloseBtn = document.querySelector(".close");
const modalCloseXBtn = document.querySelector(".close-x-btn")
const todoInput = document.querySelector(".todo-input");
const todoSection = document.querySelector(".status-section.default");
const doingSection = document.querySelector(".status-section.in-progress");
const completeSection = document.querySelector(".status-section.complete");
const spanSection = document.querySelector(".status-section.trash");
let idGen = Math.floor(Math.random() * 100000);
function showAddTodoModal() {
  modal.classList.remove("hidden")
}
function hideAddTodoModal() {
  modal.classList.add("hidden")
}
function addTodo() {
  let todoContent = todoInput.value;
  if (todoContent === "") {
    hideAddTodoModal()
  }else{
    todoSection.insertAdjacentHTML(
      "beforeend",
      `<article id="todo-${idGen}" class="todo" draggable="true">
            <p>${todoContent}</p>
          </article>`)
    hideAddTodoModal();
  }
}
function dragStartHandler(event) {
  event.dataTransfer.setData("elementId", event.target.id);
}
function dragOverHandler(event) {
  event.preventDefault();
}
function dropHandler(event) {
  let elementId = event.dataTransfer.getData("elementId", event.target.id);
  let elementTarget = document.querySelector(`#${elementId}`);
  event.target.append(elementTarget)
}
openModalBtn.addEventListener("click", showAddTodoModal);
createTodoBtn.addEventListener("click", addTodo);
modalCloseBtn.addEventListener("click", hideAddTodoModal);
modalCloseXBtn.addEventListener("click", hideAddTodoModal)
todoSection.addEventListener("dragover", dragOverHandler);
doingSection.addEventListener("dragover", dragOverHandler);
completeSection.addEventListener("dragover", dragOverHandler);
spanSection.addEventListener("dragover", dragOverHandler);
todoSection.addEventListener("dragstart", dragStartHandler);
doingSection.addEventListener("dragstart", dragStartHandler);
completeSection.addEventListener("dragstart", dragStartHandler);
spanSection.addEventListener("dragstart", dragStartHandler);
todoSection.addEventListener("drop", dropHandler);
doingSection.addEventListener("drop", dropHandler);
completeSection.addEventListener("drop", dropHandler);
spanSection.addEventListener("drop", dropHandler);