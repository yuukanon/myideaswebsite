import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/contactus' component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
