
import './App.scss';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import LoginPages from './pages/LoginPage/LoginPages';
import Home from './pages/Home/Home';
import ArrountProvider from './Context/Store';
function App() {
  return (
    <div className="App">
      <Router>
        <ArrountProvider>
        <Routes>
          <Route exact path='/' element={<LoginPages/>} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
        </ArrountProvider>
      </Router>
    </div>
  );
}

export default App;
