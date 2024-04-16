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

    if (target.classList.contains('btn-danger')) {
      alert('мы тут удаляем');
      const row = target.closest('tr');
      if (row) {
        const id = target.dataset.id;
        const name = localStorage.getItem('name');
        removeItemStorage(name, id);
        row.remove();
      }
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
    data[index].status = false;
    console.log(index);
    row.classList.remove('table-light');
    row.classList.add('table-success');
    localStorage.setItem(name, JSON.stringify(data));
  }
});

  // const completeControl = document.addEventListener('click', e => {
  //   const target = e.target;
  //   if (target.classList.contains('btn-success')) {
  //     const indexId = target.dataset.id;

  //     const index = data.findIndex(item => item.id === indexId);
  //     console.log(index + "index");
  //   }
  // });
};
