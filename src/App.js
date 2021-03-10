import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ContactUs from './components/ContactUs';


function App() {
  return (
    
    <div className="main-body">
      <Home />
      <Products />
      <ContactUs />
      {/* <Route exact path='/' component={Home} />
      <Route path='/contactus' component={CotactUs} />
      <Route path='/skills' component={Skills2} />
      <Route path='/projects' component={Project} />
      <Route path='/contact' component={Contact} /> */}
      </div>
    
  );
}

export default App;
