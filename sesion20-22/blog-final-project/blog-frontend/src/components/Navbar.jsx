import { Link } from "react-router-dom"
import { AuthButton } from "./AuthButton"
import { WelcomeUser } from "./WelcomeUser"
export const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
        <li><AuthButton /></li>
      </ul>
    </nav>
    <WelcomeUser/>
    </>
  )
}