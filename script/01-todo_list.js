
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

  for (let i = 0; i < TodoList.length; i++) {
    const todoObject = TodoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject

    const html = `<p>${name} ${dueDate}
    <button onclick="
      TodoList.splice(${i}, 1);
      renderTodoList();
    ">delete</button></p>`;

    todoListHtml += html;

  }
  console.log(todoListHtml);

  document.querySelector('.js-todo').innerHTML = todoListHtml;

 
}

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

  console.log(TodoList);
   
  getElement.value = '';

  renderTodoList();

}