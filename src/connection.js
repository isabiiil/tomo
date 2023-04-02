import React from 'react';
import ReactDOM from 'react-dom';
import BottomNav from './BottomNav.jsx';
import Ahmed from './ahmed.js';
import Ahmed2 from './ahmed2.js';
import './mapping.html'; // import the HTML file

ReactDOM.render(
  <div>
    <BottomNav />
    <Ahmed />
    <Ahmed2 />
  </div>,
  document.getElementById('root')
);
