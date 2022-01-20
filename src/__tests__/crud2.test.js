/**
 * @jest-environment jsdom
 */

import modifyStatus from '../status-module';
import { modifyTask, deleteCompletedTasks } from '../crud-module';

describe('Modify Status function test', () => {
  test('should ', () => {
    // ARRANGE
    document.body.innerHTML = `
    <ul class='task-inner-container'>
      <li class='task'>
        <input type="checkbox">
        <input type="text">
      </li>
      <li class='task modify'>
        <input type="checkbox">
        <input type="text">
      </li>
      <li class='task'>
        <input type="checkbox">
        <input type="text">
      </li>
    </ul>`;
    const tasksContainer = [
      { completed: false },
      { completed: false },
      { completed: false },
    ];

    const expectedResult = [
      { completed: false },
      { completed: true },
      { completed: false },
    ];

    const taskToModify = document.querySelector('.modify');
    // ACT
    const result = modifyStatus(taskToModify, tasksContainer);
    // ASSERT
    expect(result).toStrictEqual(expectedResult);
  });
});

describe('Modify description function tests', () => {
  
});

describe('Delete completed tasks function tests', () => {
  
});