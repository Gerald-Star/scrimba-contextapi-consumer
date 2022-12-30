import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContext from "./ThemeContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContext.Provider value={"dark"}>
    <App />
  </ThemeContext.Provider>
);




// you can change the value as you like light to dark

