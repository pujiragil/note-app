import { AiOutlineSearch } from 'react-icons/ai'

export const NavbarLogo = ({ children }) => {
  return (
    <h1 className="nav__logo">{children}</h1>
  )
}

export const NavbarSearch = () => {
  const hideSearchIcon = (e) => {
    if(e.value.length === 0) return e.previousSibling.style.display = "block"
    return e.previousSibling.style.display = "none"
  }

  return (
    <div className="nav__search">
      <AiOutlineSearch className="nav__search--icon"/>
      <input type="text" onChange={(e) => hideSearchIcon(e.target)} className="nav__search--input" placeholder="find your note" />
    </div>
  )
}