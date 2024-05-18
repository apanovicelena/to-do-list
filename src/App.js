import './App.css';
import image from './personal2.jpg';
import imageTow from './womon2.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return(
    
    <div className='App'>
      <div className='container'>
         <img src={ image } width = "250px" alt = 'personal'/>
      </div>
      <div className="container">
        <h1>Список дел на день!</h1>
      </div>
     <GroceryList/>
     <div className='container'>
        <img src={ imageTow } width = "250px" alt = 'womon'/>
      </div>  
    </div>
  )
}

export default App;