import {renderTask} from "./render.js";
import { getStorage, setStorage } from "./localStorage.js";
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
};