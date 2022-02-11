import React, {useState, useEffect} from 'react';
import ProductCard from './components/ProductCard'
import './App.css';

function App() {
  const [home, setHome] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/home")
    .then(resp => resp.json())
    .then(data => setHome(data))
  },[])

  

  return (
    <div className="background-container">
      <div className="product-list">
        { 
          home.map(item => <ProductCard item={item}/>)
        }
      </div>
      
    </div>
  );
}

export default App;
