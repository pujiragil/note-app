import "./Menu.css"
import { MenuWrap } from "./MenuElements"

const Menu = ({onMenu}) => {
  return (
    <div className="menu">
      <MenuWrap onMenu={onMenu}/>
    </div>
  )
}

export default Menu