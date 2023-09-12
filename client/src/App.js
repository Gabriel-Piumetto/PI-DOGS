import './App.css';
import {Home, Landing, Detail, Form} from './views/index'
import Navbar from './components/Navbar/Navbar'
import { Route,useLocation } from 'react-router-dom'


function App() {
  
  const location = useLocation()
  
  
  
  return (
    <div className="App">

     {location.pathname === "/"? !<Navbar/> 
     :<Navbar/>} 
      

      

      <Route exact path="/" >
        <Landing/>
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/detail-dog">
        <Detail/>
      </Route>

      <Route path="/create-dog">
        <Form></Form>
      </Route>


    
    </div>
  );
}

export default App;
