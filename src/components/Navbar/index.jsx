import "./Navbar.css"
import { NavbarLogo, NavbarSearch } from "./NavbarElements"

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarLogo>Manote</NavbarLogo>
      <NavbarSearch/>
    </div>
  )
}

export default Navbar