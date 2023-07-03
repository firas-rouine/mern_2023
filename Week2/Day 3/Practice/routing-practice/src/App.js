import {
  Routes,
  Route,useParams
} from "react-router-dom";
import './App.css';

function App() {
  

  const Home = (props) => {
    return (
          <h1 >Welcome</h1>
    );
  }

  const Input = (props) => {
    const {input} =useParams();
    
    console.log(useParams());
    return (
      !isNaN(+input)?<h1>The number is: {input}</h1>:<h1>The word is: {input}</h1>
      
    )
  }
  const Style = (props) => {
    const {text,color,bgColor}=useParams();
    return (
      isNaN(+text)?<h1 style={{color: color,backgroundColor: bgColor}}>The word is: {text}</h1>:<h1>you must put word</h1>
    )
  }
  return (
    <div className="App">
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/:input" element={<Input/>}/>
      <Route path="/:text/:color/:bgColor" element={<Style/>}/>
     </Routes>
    </div>
  );
}

export default App;
