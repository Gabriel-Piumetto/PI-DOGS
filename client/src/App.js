import './App.css';
import {Home, Landing, Detail, Form} from './views/index'
import Navbar from './components/Navbar/Navbar'
import { Route,useLocation } from 'react-router-dom'
import ResultDogs from './views/resultDogs/ResultDogs';


function App() {
  
  const location = useLocation()
  
  
  
  return (
    <div className="App">

     {location.pathname === "/"? !<Navbar/> 
     :<Navbar/>} 
      

      


      <Route exact path="/" >
      
        <Landing />
       
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path={'/detail-dog/:idRaza'}>
        <Detail/>
      </Route>

      <Route path={'/search-results'}>
        <ResultDogs></ResultDogs>
      </Route>

      <Route path="/create-dog">
        <Form></Form>
      </Route>
      
      



    
    </div>
  );
}

export default App;
