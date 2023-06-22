
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
      {person.map((p,key) =>{
        return <PersonCard first_name={p.first_name} last_name={p.last_name} age={p.age} hair_color={p.hair_color} key={key}/>
      })}
      
      
    </div>
  );
}

export default App;
