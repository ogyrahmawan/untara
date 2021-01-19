import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </div>

    </Router>
  );
}

export default App;
