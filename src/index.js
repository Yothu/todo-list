import './style.css';
import moreIcon from './more.png';
import reloadIcon from './reload.png';
import enterIcon from './enter.png';
import {getTasksLocalStorage, addTask, deleteCompletedTasks, setTasksLocalStorage} from './crud-module';

export class Task {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const createTaskHTML = (description) => {
  const tasksInnerContainer = document.querySelector('.task-inner-container');
  const taskContainer = document.createElement('li');
  taskContainer.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-box', 'statusBox');
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
  reIcon.setAttribute('id', 'reloadButton');
  reIcon.classList.add('check-box', 'reload-icon');
  reIcon.setAttribute('alt', 'reload-icon');
  formContainer.appendChild(reIcon);
};

const setEnterIcon = () => {
  const formContainer = document.querySelector('.form-container');
  const enIcon = new Image();
  enIcon.src = enterIcon;
  enIcon.setAttribute('id', 'enterForm');
  enIcon.classList.add('check-box', 'reload-icon');
  enIcon.setAttribute('alt', 'enter-icon');
  formContainer.appendChild(enIcon);
};

setEnterIcon();
setReloadIcon();

export let tasksContainer = getTasksLocalStorage();

window.onload = () => {
  if (tasksContainer != null) {
    tasksContainer = upwardOrderArray(tasksContainer);
    displayTasks(tasksContainer);
  } else {
    tasksContainer = [];
  }
};

// ----------------------------------------------------------------------------------------------------------------------

const enterButton = document.getElementById('enterForm');
const reloadButton = document.getElementById('reloadButton');
const clearButton = document.getElementById('clearButton');

reloadButton.addEventListener('click', () => {
  console.log('tasksContainer', tasksContainer);
});

enterButton.addEventListener('click', () => {
  const newDescription = document.getElementById('taskForm').value;
  addTask(newDescription);
  document.getElementById('taskForm').value = "";
});

clearButton.addEventListener('click', () => {
  const checkBoxes = document.querySelectorAll('.statusBox');
  tasksContainer = deleteCompletedTasks(checkBoxes);
  setTasksLocalStorage(tasksContainer);
});
