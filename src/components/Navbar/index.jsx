import "./Navbar.css"
import { NavbarLogo, NavbarSearch } from "./NavbarElements"

const Navbar = ({onSearch}) => {
  return (
    <div className="navbar">
      <NavbarLogo>Manote</NavbarLogo>
      <NavbarSearch onSearch={onSearch}/>
    </div>
  )
}

export default Navbar