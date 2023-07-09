
import './App.css';

import Main from './components/Main';
import OneProduct from './components/OneProduct';
import Update from './components/Update';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
         <Routes>
        <Route path='/' element={ <Main/>} />
        <Route path='/:id' element={<OneProduct />} />
        <Route path='/:id/edit' element={<Update />} />
  
  
      </Routes>
    </div>
  );
}

export default App;
