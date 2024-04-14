
import * as create from './create.js';
import {getStorage, setStorage, removeItemStorage} from "./localStorage.js";
import {handleInput, saveTask, tasks, formControl} from './control.js';

export const renderTODO = () => {
const app = document.querySelector('.app-container');
app.className = 'app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column';

const logoTitle = create.createLogo();
const form = create.createForm();
const tableWrapperContainer = create.tableWrapperContainer();

app.append(logoTitle, form, tableWrapperContainer);

return {
  app,
  logoTitle,
  form,
  tableWrapperContainer,
}
};

export const renderTask = (name) => {
  const tasks = JSON.parse(localStorage.getItem(name)) || [];
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  tasks.forEach((task) => {
    const row = create.createRow(task);
    tbody.appendChild(row);
  });
  return tbody;
};

export const renderNumber = () => {
return 1;
};