import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') {
      return; // Prevent adding empty tasks.
    }

    if (tasks.some(task => task.text === newTask)) {
      alert('Task already exists!'); // Prevent adding duplicate tasks.
      return;
    }

    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list bg-white p-4 shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-2 mb-4 border"
      />
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-2 border-b"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              className="mr-4"
            />
            <span
              className={`flex-1 ${task.completed ? 'line-through' : ''}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white py-1 px-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={addTask}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoList;
