import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItemToList = () => {
    setTodos([...todos, inputValue]);
    setInputValue(''); 
  };

  const editItem = (index, e) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = e.target.value;
    setTodos(updatedTodos);
  };

  const deleteItem = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='CONTAINER'>
      <div>
        <input
          className='Text'
          type='text'
          placeholder='Type here'
          value={inputValue}
          onChange={handleChange}
        />
        <button type='submit' onClick={addItemToList}>Add Item</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index} className='eachBox'>
            <input
              type='text'
              className='Texts'
              value={todo}
              onChange={(e) => editItem(index, e)}
            />
            <button type='submit' onClick={() => deleteItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
