import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NavBarImplimentation from './components/NavBarImplimentation'
import Table from './components/Table'

const App = () => (
  <Switch>
    <Route exact path="/table" component={Table} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/nav" component={NavBarImplimentation} />
  </Switch>
)

export default App
