import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Visualizer from './components/visualizer';
import './App.css';
import Info from './components/Pages/Info';

// Parent Component
class App extends React.Component {
	
    render() { 
        return (
            
            <Router>
        
        <Routes>
          
          <Route path ="/" element={<Visualizer/>}/>
          <Route exact path = "/know-more" element={<Info/>}/>
         
        </Routes>
        </Router>

        );
	}
}
 
export default App;