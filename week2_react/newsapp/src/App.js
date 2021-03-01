import React from 'react';
import axios from 'axios';
import News from './components/News';
import { NewsContextProvider } from "./NewsContext";
import './app.css'


function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  )
}

export default App
