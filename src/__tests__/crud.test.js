/**
 * @jest-environment jsdom
*/

import { addTask, deleteSelectedTask } from '../crud-module';
import setTasksLocalStorage from '../setLS';
import getTasksLocalStorage from '../__mocks__/getLS';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  // clear() {
  //   this.store = {};
  // }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  // removeItem(key) {
  //   delete this.store[key];
  // }
}

jest.mock('../setLS');
jest.mock('../getLS');

describe('Add task function tests', () => {
  test('The length of an empty tasksContainer after adding a task is 1', () => {
    // ARRANGE
    const task = { description: 'abc' };
    const tasksContainer = [];
    // ACT
    addTask(task.description, tasksContainer);
    // ASSERT
    expect(tasksContainer.length).toBe(1);
  });
  test('New task description inserted in task container is abc', () => {
    // ARRANGE
    const task = { description: 'abc' };
    const tasksContainer = [];
    // ACT
    const result = addTask(task.description, tasksContainer);
    // ASSERT
    expect(result.description).toBe('abc');
  });

  test('The length of the empty tasksContainer key in the local storage after saving a task is 1', () => {
    // ARRANGE
    const tasksContainer = [{ description: 'abc', completed: true, index: 0 }];
    // ACT
    setTasksLocalStorage(tasksContainer);
    const result = getTasksLocalStorage();
    // ASSERT
    expect(result.length).toBe(1);
  });
});

describe('Delete task function tests', () => {
  test('The length of taskContainer after deleting its only task, is 0', () => {
    // ARRANGE
    document.body.innerHTML = `<ul class='task-inner-container'>
    <li class='task'></li>
    </ul>`;
    const tasksContainer = [
      {
        description: 'abc',
        completed: false,
        index: 0,
      },
    ];
    const taskToRemove = document.querySelector('.task');
    // ACT
    const result = deleteSelectedTask(taskToRemove, tasksContainer);
    // ASSERT
    expect(result.length).toBe(0);
  });
});

global.localStorage = new LocalStorageMock();
