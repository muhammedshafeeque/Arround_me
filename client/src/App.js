
import './App.scss';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import LoginPages from './pages/LoginPage/LoginPages';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPages/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
