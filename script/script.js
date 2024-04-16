
import {renderTODO} from './modules/render.js';
import {formControl} from './modules/control.js';

const start = (selectorApp) => {
  const app = document.querySelector(selectorApp);

  const name = localStorage.getItem('name');
  if (!name) {
    const newName = prompt('Введите ваше имя:');
    if (newName) {
      localStorage.setItem('name', newName);
      renderTODO(app, newName);
      formControl();
    }
  } else {
    renderTODO(app, name);
    formControl();
  }
};
window.startInit = start;