import './style.css';
import moreIcon from './more.png';
import reloadIcon from './reload.png';
import enterIcon from './enter.png';
import deleteIcon from './delete.png';
import { modifyStatus, deleteCompletedTasks } from './status-module';
import {
  getTasksLocalStorage,
  addTask,
  setTasksLocalStorage,
  modifyTask,
  deleteSelectedTask,
} from './crud-module';

let tasksContainer = getTasksLocalStorage();

const createTaskHTML = (description, status = false) => {
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

  checkbox.addEventListener('change', () => {
    tasksContainer = modifyStatus(checkbox.parentElement, tasksContainer);
    descriptionContainer.classList.toggle('complete');
    setTasksLocalStorage(tasksContainer);
  });

  if (status) {
    checkbox.checked = true;
    descriptionContainer.classList.add('complete');
  }

  descriptionContainer.addEventListener('change', () => {
    tasksContainer = modifyTask(descriptionContainer, tasksContainer);
    setTasksLocalStorage(tasksContainer);
  });

  const menuIcon = new Image();
  menuIcon.src = moreIcon;
  menuIcon.setAttribute('alt', 'menu-icon');
  menuIcon.classList.add('more-icon');
  taskContainer.appendChild(menuIcon);

  const delIcon = new Image();
  delIcon.src = deleteIcon;
  delIcon.setAttribute('id', 'deleteTask');
  delIcon.classList.add('check-box', 'reload-icon', 'delete-icon', 'hide');
  delIcon.setAttribute('alt', 'delete-icon');
  taskContainer.appendChild(delIcon);

  descriptionContainer.addEventListener('focus', () => {
    taskContainer.classList.toggle('focus-task');
    menuIcon.classList.toggle('hide');
    delIcon.classList.toggle('hide');
  });

  descriptionContainer.addEventListener('blur', () => {
    taskContainer.classList.toggle('focus-task');
    menuIcon.classList.toggle('hide');
    delIcon.classList.toggle('hide');
  });

  delIcon.addEventListener('click', () => {
    tasksContainer = deleteSelectedTask(delIcon.parentElement, tasksContainer);
    setTasksLocalStorage(tasksContainer);
  });

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
  if (tasksContainer != null && tasksContainer.length > 0) {
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
