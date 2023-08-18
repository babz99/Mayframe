import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services';
import About from './Pages/About/About'

function App() {
  return (
    <div className="App">
    {/* {<Test/>} */}
   
    <BrowserRouter>
        <Switch>
        <Route path= "/" exact component= {Home}/>
        <Route path= "/contact" exact component= {Contact}/>
        <Route path= "/about" exact component= {About}/>
        <Route path= "/services" exact component= {Services}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
