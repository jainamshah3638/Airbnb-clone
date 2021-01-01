import './App.css';
import Header from './Headder'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Footer from './Footer'
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="App">
      <Router>
           <Header/>
        <Switch>
       
         <Route exact path="/">
         <Home/>
         </Route>
         <Route exact path="/search">
          <SearchPage/>
          </Route>
        </Switch>
      
     
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
