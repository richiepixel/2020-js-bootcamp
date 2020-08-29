import React from 'react' //busca en node modules.
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../view/Home'
import Login from '../view/Login'
import Dashboard from '../view/Dashboard'
import PrivateRoute from './PrivateRoute'
import Signout from '../view/Signout'
import Users from '../view/Users'
import User from '../view/User'

const MainRouter = () => {
  return (
    <Router>
      <Nav />
      <section className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={Users} />
        <Route exact path="/user/:userId" component={User} />
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