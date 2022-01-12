import './style.css';
import moreIcon from './more.png';
import reloadIcon from './reload.png';
import enterIcon from './enter.png';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const createTaskHTML = (description) => {
  const tasksInnerContainer = document.querySelector('.task-inner-container');
  const taskContainer = document.createElement('li');
  taskContainer.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-box');
  taskContainer.appendChild(checkbox);

  const descriptionContainer = document.createElement('p');
  descriptionContainer.classList.add('description');
  descriptionContainer.appendChild(document.createTextNode(`${description}`));
  taskContainer.appendChild(descriptionContainer);

  const menuIcon = new Image();
  menuIcon.src = moreIcon;
  menuIcon.setAttribute('alt', 'menu-icon');
  menuIcon.classList.add('more-icon');
  taskContainer.appendChild(menuIcon);

  tasksInnerContainer.appendChild(taskContainer);
};

const displayTasks = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    createTaskHTML(array[i].description, array[i].completed);
  }
};

let tasksContainer = [
  new Task('desc1', false, 1),
  new Task('desc4', false, 4),
  new Task('desc7', false, 7),
  new Task('desc2', false, 2),
  new Task('desc3', false, 3),
  new Task('desc5', false, 5),
  new Task('desc6', false, 6),
];

const upwardOrderArray = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i].index > array[j].index) {
        [array[j], array[i]] = [array[i], array[j]];
      }
    }
  }
  return array;
};

const setReloadIcon = () => {
  const formContainer = document.querySelector('.title-container');
  const reIcon = new Image();
  reIcon.src = reloadIcon;
  reIcon.classList.add('check-box', 'reload-icon');
  reIcon.setAttribute('alt', 'reload-icon');
  formContainer.appendChild(reIcon);
};

const setEnterIcon = () => {
  const formContainer = document.querySelector('.form-container');
  const enIcon = new Image();
  enIcon.src = enterIcon;
  enIcon.classList.add('check-box', 'reload-icon');
  enIcon.setAttribute('alt', 'enter-icon');
  formContainer.appendChild(enIcon);
};

setEnterIcon();
setReloadIcon();
tasksContainer = upwardOrderArray(tasksContainer);

window.onload = () => {
  displayTasks(tasksContainer);
};
