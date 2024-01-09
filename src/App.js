// src/App.js
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="w-full grid grid-rows-[auto_1fr] h-full">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
