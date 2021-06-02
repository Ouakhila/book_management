import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layouts/Footer';
import './App.css';
import Navbar from './components/layouts/Navbar';
//React Router Import
import { Switch, Route } from 'react-router-dom';
//import pages
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
  render() {

    return (

      <div className="book-app">
        <div className="content-wrap"> 
      <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/news"component={Books}/>
       <Route path="/contact"component={Contact}/>
       <Route path="/details"component={Details}/>
       <Route component={NotFoundPage}/>
     </Switch>
     </div>
      <Footer></Footer>
      </div>
    );
 
}
}
  export default App;
