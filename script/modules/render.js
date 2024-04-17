import * as create from './create.js';

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

  tasks.forEach((task, index) => {
    const row = create.createRow(task.task, task.status, index);
    tbody.appendChild(row);
  });
  return tbody;
};
