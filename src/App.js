// src/App.js
import React, { useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { setAxiosDefault } from './axiosDefault';

function App() {
  setAxiosDefault()
  return (
    <div className="w-full grid grid-rows-[auto_1fr] bg-white dark:bg-gray-900 h-full">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
