import {getStorage} from "./localStorage.js";
import {renderNumber} from "./render.js";
export const createLogo = () => {
  const h3 = document.createElement('h3');
  h3.textContent = `Todo App:`;

  return h3;
};

export const createContainer = () => {
  const container = document.createElement('div');
  return container;
};

export const createRow = () => {
  const tr = document.createElement('tr');
  tr.classList.add('table-light');

  const tdIndex = document.createElement('td');
  const index = renderNumber();
  tdIndex.textContent = index;

  const tdTask = document.createElement('td');
  tdTask.textContent = getStorage();

  const tdStatus = document.createElement('td');
  tdStatus.classList.add('.process');
  tdStatus.textContent = 'В процессе';

  const tdBtn = document.createElement('td');

  const deleteButton = document.createElement('button');
  deleteButton.type = 'reset';
  deleteButton.id = 'deleteButton';
  deleteButton.className = 'btn btn-danger';
  deleteButton.textContent = 'Удалить';

  const completeButton = document.createElement('button');
  completeButton.type = 'submit';
  completeButton.id = 'completeButton';
  completeButton.className = 'btn btn-success';
  completeButton.textContent = 'Завершить';
  tdBtn.append(deleteButton, completeButton);

  tr.append(tdIndex, tdTask, tdStatus, tdBtn);

  return tr;
};


export const tableWrapperContainer = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('table-wrapper');
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  `);

  const tbody = document.createElement('tbody');
  table.tbody = createRow();

  table.append(thead, tbody);
  wrapper.append(table);

  return wrapper;
};

export const createForm = () => {
const form = document.createElement('form');
form.className = 'd-flex align-items-center mb-3';

const label = document.createElement('label');
label.className = 'form-group me-3 mb-0';

const input = document.createElement('input');
  input.type = 'text';
  input.id = 'taskInput';
  input.className = 'form-control';
  input.placeholder = 'ввести задачу';
  label.appendChild(input);

  const saveButton = document.createElement('button');
  saveButton.type = 'submit';
  saveButton.id = 'saveButton';
  saveButton.className = 'btn btn-primary me-3';
  saveButton.textContent = 'Сохранить';

  const resetButton = document.createElement('button');
  resetButton.type = 'reset';
  resetButton.id = 'resetButton';
  resetButton.className = 'btn btn-warning';
  resetButton.textContent = 'Очистить';

  label.append(input);
  form.append(label);
  form.append(saveButton);
  form.append(resetButton);

  return form;
};

const createButtonsGroup = (params) => {
  const btns = params.map(({className, type, text}) => {
    const button = document.createElement('button');
    button.type = type;
    button.textContent = text;
    button.className = className;
    return button;
  });

  return btns;
};