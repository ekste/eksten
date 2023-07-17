import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/Header';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coaching from './Coaching';
import About from './About';
import Footer from './footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/coaching" Component={Coaching} />
          <Route path="/about" Component={About} />
        </Routes>
      <Footer link="mailto:nick@ekste.co.uk" linkText="Ask me to create your next digital product for you." credit="Designed and Developed by Nick Ekste, icons by" iconLink="https://phosphoricons.com/" iconName="Phospor" question="Like what you see?" />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
