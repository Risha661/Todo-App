import {renderTask} from "./render.js";
import {getStorage} from "./localStorage.js";
import {generateRandomId} from './generate.js';

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
  
  taskInput.value = ''; //нужное!
  const saveButton = document.getElementById('saveButton');
  saveButton.disabled = true;

  if (taskInput.value === '') { //нужное!
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

  const tbody = document.querySelector('tbody');
  tbody.addEventListener('click', e => {
    const target = e.target;

    if (target.id === 'deleteButton') {
      const row = target.closest('tr');

      const index = Array.from(tbodyId.children).indexOf(row);
      const name = localStorage.getItem('name');
      const data = getStorage(name);

      data.splice(index, 1);
      row.remove();
      // removeItemStorage(index);
      const tdIndex = document.querySelectorAll('.index-row');
      for (let i = 0; i < tdIndex.length; i++) {
        tdIndex[i].textContent = i + 1;
      }
      localStorage.setItem(name, JSON.stringify(data));
    }
  });
  
  const tbodyId = document.querySelector('tbody');
  tbodyId.addEventListener('click', (event) => {
  const target = event.target;

  if (target.id === 'completeButton') {
    const row = target.closest('tr');

    const index = Array.from(tbodyId.children).indexOf(row);
    const name = localStorage.getItem('name');
    const data = getStorage(name);

    data[index].status = false;
    const tdStatus = row.querySelector('.status');
    const tdTask = row.querySelector('.createText');
    tdStatus.textContent = 'Завершено';
    tdTask.style.textDecoration = 'line-through';

    row.classList.remove('table-light');
    row.classList.add('table-success');

    localStorage.setItem(name, JSON.stringify(data));
  }
});
};

