import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './Components/Home';
import Shots from './Components/Shots';
import Subcriptions from './Components/Subcriptions';
import Library from './Components/Library';
import History from './Components/History';


function Index() {
  return (
    <Router>
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='shots' element={<Shots />}></Route>
        <Route exact path='subcriptions' element={<Subcriptions />}></Route>
        <Route exact path='library' element={<Library />}></Route>
        <Route exact path='history' element={<History />}></Route>

      </Routes>

    </div>
    </Router>
  )
}

export default Index

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
