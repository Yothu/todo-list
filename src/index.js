import './style.css';
import moreIcon from './more.png';
import reloadIcon from './reload.png';
import enterIcon from './enter.png';
import {
  getTasksLocalStorage, addTask, deleteCompletedTasks, setTasksLocalStorage, modifyTask,
} from './crud-module';

let tasksContainer = getTasksLocalStorage();

const createTaskHTML = (description) => {
  const tasksInnerContainer = document.querySelector('.task-inner-container');
  const taskContainer = document.createElement('li');
  taskContainer.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-box', 'statusBox');
  taskContainer.appendChild(checkbox);

  const descriptionContainer = document.createElement('input');
  descriptionContainer.setAttribute('type', 'text');
  descriptionContainer.classList.add('description');
  descriptionContainer.value = description;
  taskContainer.appendChild(descriptionContainer);

  descriptionContainer.addEventListener('change', () => {
    tasksContainer = modifyTask(descriptionContainer, tasksContainer);
    setTasksLocalStorage(tasksContainer);
  });

  descriptionContainer.addEventListener('focus', () => {
    taskContainer.classList.toggle('focus-task');
  });

  descriptionContainer.addEventListener('blur', () => {
    taskContainer.classList.toggle('focus-task');
  });

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

window.onload = () => {
  if (tasksContainer != null) {
    tasksContainer = upwardOrderArray(tasksContainer);
    displayTasks(tasksContainer);
  } else {
    tasksContainer = [];
  }
};

const enterButton = document.getElementById('enterForm');
const clearButton = document.getElementById('clearButton');

enterButton.addEventListener('click', () => {
  const newDescription = document.getElementById('taskForm').value;
  const newTask = addTask(newDescription, tasksContainer);
  createTaskHTML(newTask.description);
  document.getElementById('taskForm').value = '';
});

clearButton.addEventListener('click', () => {
  const checkBoxes = document.querySelectorAll('.statusBox');

  tasksContainer = deleteCompletedTasks(checkBoxes, tasksContainer);

  setTasksLocalStorage(tasksContainer);
});
