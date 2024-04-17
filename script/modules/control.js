import {renderTask} from "./render.js";
import * as create from './create.js';
import { getStorage, setStorage, removeItemStorage } from "./localStorage.js";
import {generateRandomId} from './generate.js';

const saveButton = document.getElementById('saveButton');
const taskInput = document.getElementById('taskInput');
const resetButton = document.getElementById('resetButton');

export const handleInput = () => {
  const taskInput = document.getElementById('taskInput');
  const saveButton = document.getElementById('saveButton');
  const resetButton = document.getElementById('resetButton');
  saveButton.disabled = taskInput.value === '';
  resetButton.disabled = taskInput.value === '';
};

export const saveTask = () => {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value;
  
  const name = localStorage.getItem('name');
  let tasks = JSON.parse(localStorage.getItem(name)) || [];

  const taskObject = {
    id: generateRandomId(),
    task: task,
    status: true,
  };
  

  tasks.push(taskObject);
  localStorage.setItem(name, JSON.stringify(tasks));
  console.log(tasks);
  
  taskInput.value = '';
  const saveButton = document.getElementById('saveButton');
  saveButton.disabled = true;

  if (taskInput.value === '') {
    const resetButton = document.getElementById('resetButton');
    resetButton.disabled = true;
  }

  renderTask(name);
};

export const formControl = () => {
  const taskInput = document.getElementById('taskInput');
  const resetButton = document.getElementById('resetButton');
  const saveButton = document.getElementById('saveButton');

  saveButton.disabled = true;
  resetButton.disabled = true;
  
  saveButton.addEventListener('click', saveTask);
  taskInput.addEventListener('input', handleInput);
  handleInput();

  const tbody = document.querySelector('tbody');
  tbody.addEventListener('click', e => {
    const target = e.target;

    if (target.id === 'deleteButton') {
      const row = target.closest('tr');
      alert('мы тут удаляем');

      const index = Array.from(tbodyId.children).indexOf(row);
      console.log(index);
      const name = localStorage.getItem('name') || [];
      const data = getStorage(name);
      data.splice(index, 1);
      row.remove();
      removeItemStorage(index);
      const tdIndexOff = row.querySelectorAll('.index-row');
      console.log(tdIndexOff + 'все индексы');
      // const tdIndex = row.querySelectorAll('.index-row');
      // for (let i = 0; i < tdIndex.length; i++) {
      //   tdIndex[i].textContent = i + 1;
      // }
      localStorage.setItem(name, JSON.stringify(data));
    }
  });
  
  const tbodyId = document.querySelector('tbody');
  tbodyId.addEventListener('click', (event) => {
  const target = event.target;

  if (target.id === 'completeButton') {
    const row = target.closest('tr');


  
    const index = Array.from(tbodyId.children).indexOf(row);
    const name = localStorage.getItem('name') || [];
    const data = getStorage(name);
    console.log(data);

    data[index].status = false;
    const tdStatus = row.querySelector('.status');
    const tdTask = row.querySelector('.createText');
    tdStatus.textContent = 'Завершено';
    tdTask.style.textDecoration = 'line-through';
    console.log(index);
    row.classList.remove('table-light');
    row.classList.add('table-success');

    localStorage.setItem(name, JSON.stringify(data));
  }
});
};

// export const updateIndexNumber = () => {
//   // const data = JSON.parse(localStorage.getItem(name)) || [];
//   // data.forEach((item, index) => {
//   //   item.index = index;
//   //   console.log(index);
//   const table = document.getElementById('tbodyId');
//   const rows = table.querySelectorAll('tr');
//   console.log(rows.length + ' ' + typeof(rows));
//   for (var i = 1; i < rows.length; i++) {
//     var cell = rows[i].insertCell(0);
//     cell.innerHTML = i + 'zz';
// }
// };
