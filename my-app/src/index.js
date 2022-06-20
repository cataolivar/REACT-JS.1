import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));

/*root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
*/

root1.render(
  <React.StrictMode>
     <Header/>
  </React.StrictMode>
);

root2.render(
  <React.StrictMode>
     <NavBar/>
  </React.StrictMode>
);