import React from 'react' //busca en node modules.
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../view/Home'
import Login from '../view/Login'
import Dashboard from '../view/Dashboard'
import PrivateRoute from './PrivateRoute'
import Signout from '../view/Signout'

const MainRouter = () => {
  return (
    <Router>
      <Nav />
      <section className="container">
        <Route exact path="/" component={Home} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <PrivateRoute path="/dashboard">
          <Dashboard /> {/* Este es el nodo hijo, varibale children en PrivateRoute */}
        </PrivateRoute>
        <Route path="/login" component={Login} />
        <Route path="/signout" component={Signout} />
      </section>

    </Router>
  )
}

export default MainRouter