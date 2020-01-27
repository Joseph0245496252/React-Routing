import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import '/App.css';


const App = () => {
  return (
    <Router>
          <div className="App">
    <Link to="/">Home</Link> 
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    
    </div>

    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
