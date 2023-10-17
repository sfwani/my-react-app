// src/App.js
import React from 'react';
import ContactCard from './components/ContactCard';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Contact Card App</h1>
      <ContactCard />
      <TodoList />
    </div>
  );
}

export default App;

/*
// src/App.js
import React from 'react';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="App">
      <h1>Contact Card App</h1>
      <ContactCard />
    </div>
  );
}

export default App;
*/
