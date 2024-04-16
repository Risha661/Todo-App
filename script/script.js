
import {renderTODO} from './modules/render.js';
import {formControl} from './modules/control.js';

const start = () => {
    const newName = prompt('Введите ваше имя:');
    let stor = localStorage.getItem(newName);
    alert(stor + ' ' + newName);
    if (stor === null){
      localStorage.setItem(newName, JSON.stringify([]));  
    } 
    renderTODO(); 
    formControl();
};
window.startInit = start;