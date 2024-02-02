
const TodoList = [{
name: 'make money',
dueDate: '2022-6-11'
},
{
  name: 'make money',
  dueDate: '2022-6-12'
}
];

renderTodoList();

function renderTodoList() {

  let todoListHtml = '';

TodoList.forEach(function(todoObject, index){

  const { name, dueDate } = todoObject

  const html = `
  <div>${name}</div>
   <div>${dueDate}</div>
  <button class="delect-todo-button js-delete-button">delete</button>`;

  todoListHtml += html;


});

  document.querySelector('.js-todo').innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-button').forEach((deletebutton, index) => {
    deletebutton.addEventListener('click', () => {
     TodoList.splice(index, 1);
    renderTodoList();
    });
  })

}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const getElement = document.querySelector('.js-input-name');

  const name = getElement.value;

  const getElementDate = document.querySelector('.js-input-date');

  const dueDate  = getElementDate.value;
  
  

  TodoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });

   
  getElement.value = '';

  renderTodoList();

}