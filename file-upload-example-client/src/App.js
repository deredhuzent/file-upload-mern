import React from 'react';
import './App.css';
import AddThing from './components/AddThing'
import FileUpload from './components/FileUpload'

function App() {
  return (
    <div className="App">
      <AddThing/>
      <hr/>
      <FileUpload/>
    </div>
  );
}

export default App;
