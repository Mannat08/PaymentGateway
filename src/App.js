import UserDetails from './component/UserDetails'
import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={UserDetails}></Route>
          {/* <Route exact path="/verified" component={}></Route> */}
        </Switch>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
