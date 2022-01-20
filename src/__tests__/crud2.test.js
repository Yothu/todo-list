/**
 * @jest-environment jsdom
 */

import modifyStatus from '../status-module';
import { modifyTask, deleteCompletedTasks } from '../crud-module';

describe('Modify Status function test', () => {
  test('Tasks with modify class have changed its status from false to true', () => {
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
  test('Input text with modify class changes its parent task description to xyz', () => {
    // ARRANGE
    document.body.innerHTML = `
    <ul class='task-inner-container'>
      <li class='task'>
        <input type="checkbox">
        <input type="text">
      </li>
      <li class='task'>
        <input type="checkbox">
        <input type="text">
      </li>
      <li class='task'>
        <input type="checkbox">
        <input type="text" class='modify'>
      </li>
    </ul>`;
    const tasksContainer = [
      { description: 'abc' },
      { description: 'def' },
      { description: 'ghi' },
    ];

    const expectedResult = [
      { description: 'abc' },
      { description: 'def' },
      { description: 'xyz' },
    ];

    const inputThatModifies = document.querySelector('.modify');
    inputThatModifies.value = 'xyz';
    // ACT
    const result = modifyTask(inputThatModifies, tasksContainer);
    // ASSERT
    expect(result).toStrictEqual(expectedResult);
  });
});

describe('Delete completed tasks function tests', () => {
  
});