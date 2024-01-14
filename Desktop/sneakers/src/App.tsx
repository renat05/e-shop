import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const [search, setSearch] = React.useState('');

  const handleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="container">
      <Header handleChange={handleChange} setSearch={setSearch} />
      <Card search={search} />
    </div>
  );
};

export default App;
