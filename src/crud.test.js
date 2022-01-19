import { addTask } from './crud-module';
//add and remove functions


test('add task to list', () => {
    const task = {
        description: 'abc'
    }
    const tasksContainer = [];
    const result = addTask(task.description, tasksContainer);
    expect(result).toEqual({ description: 'abc', completed: false, index: 0 });
});