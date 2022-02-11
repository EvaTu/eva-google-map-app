import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [home, setHome] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/home")
    .then(resp => resp.json())
    .then(data => console.log(data))
  })
  return (
    <div className="App">
      
          
      
    </div>
  );
}

export default App;
