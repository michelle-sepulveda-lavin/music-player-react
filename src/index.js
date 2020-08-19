import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';

import 'jquery';
import 'popper.js';
import 'bootstrap';

import MediaPlayer from './components/mediaPlayer';



ReactDOM.render(
  <React.StrictMode>
    <MediaPlayer />
  </React.StrictMode>,
  document.getElementById('root')
);


