import {renderTask} from "./render.js";
import { getStorage, setStorage } from "./localStorage.js";
import {generateRandomId} from './generate.js';

export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const handleInput = () => {
  const saveButton = document.getElementById('saveButton');
  const taskInput = document.getElementById('taskInput');
  saveButton.disabled = taskInput.value.trim() === '';
};

export const saveTask = () => {
  const taskInput = document.getElementById('taskInput');
  const taskVal = taskInput.value;
  
  
  const name = localStorage.getItem('name');
  let tasks = JSON.parse(localStorage.getItem(name)) || [];

  const taskObject = {
    id: generateRandomId(),
    task: taskVal,
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
  const saveButton = document.getElementById('saveButton');

  saveButton.addEventListener('click', saveTask);
  taskInput.addEventListener('input', handleInput);
};