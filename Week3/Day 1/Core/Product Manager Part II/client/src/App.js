
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import ShowOne from './components/ShowOne';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
         <Routes>
        <Route path='/' element={<><Form /> <Main/></> } />
        <Route path='/:id' element={<ShowOne />} />
  
  
      </Routes>
    </div>
  );
}

export default App;
