import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Parent from './components/Parent';

function App() {
  return (
    <div className='browser'>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact="/">
          <Home/>
        </Route>
        <Route path="/signup">
          <Parent/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
