import { Routes, Route } from 'react-router-dom'
import AddAuthor from './components/AddAuthor';
import Main from './components/Main';
import Update from './components/Update';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      
       <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<AddAuthor />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
