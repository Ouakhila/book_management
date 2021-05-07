import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layouts/Footer';
import './App.css';
import Navbar from './components/layouts/Navbar';
//React Router Import
import { Switch, Route } from 'react-router-dom';
//import pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
  render() {

    return (
      <div>
      <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/news"component={News}/>
       <Route path="/contact"component={Contact}/>
       <Route path="/details"component={Details}/>
       <Route component={NotFoundPage}/>
     </Switch>
      <Footer></Footer>
      </div>
    );
 
}
}
  export default App;
