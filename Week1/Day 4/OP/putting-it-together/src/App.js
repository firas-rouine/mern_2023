
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const person =[
    {
      first_name:'Doe',
      last_name : 'Jane',
      age : 45,
      hair_color : 'Black'
    },
    {
      first_name:'Smith',
      last_name : 'john',
      age : 88,
      hair_color : 'Brown'
    },
    {
      first_name:'Fillmyore',
      last_name : 'Millard',
      age : 50,
      hair_color : 'Brown'
    },
    {
      first_name:'Smith',
      last_name : 'Maria',
      age : 62,
      hair_color : 'Brown'
    }
  ]
  return (
    <div className="App">
      {person.map(p=>{
        return (<PersonCard firstName={p.first_name} lastName={p.last_name} age={p.age} hairColor={p.hair_color}/>)

      })}
    
    </div>
  );
}

export default App;
