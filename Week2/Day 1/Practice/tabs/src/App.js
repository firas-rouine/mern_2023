
import './App.css';

import { Tabs } from './components/Tabs';
function App() {
  const tabs =["Tabs 1","Tabs 2","Tabs 3"]
  return (
    <div className="App">
    <Tabs tabs={tabs} />
     
    </div>
  );
}

export default App;
