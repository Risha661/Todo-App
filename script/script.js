
import {renderTODO, renderTask} from './modules/render.js';
import {formControl} from './modules/control.js';

const start = (selectorApp) => {
  const app = document.querySelector(selectorApp);

  const newName = prompt('Введите ваше имя:');
  localStorage.setItem('name', newName);
  renderTODO(app, newName);
  formControl();
  renderTask(newName);
};
window.startInit = start;