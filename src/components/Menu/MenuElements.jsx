export const MenuWrap = ({onMenu}) => {
  return (
    <div className="menu--wrapper">
      <ButtonUnarchive onMenu={onMenu}/>
      <ButtonArchive onMenu={onMenu}/>
    </div>
  )
}

const ButtonArchive = ({onMenu}) => {
  return (
    <button onClick={() => onMenu("archive")} className="menu__button">Archived</button>
  )
}

const ButtonUnarchive = ({onMenu}) => {
  return (
    <button onClick={() => onMenu("unarchive")} className="menu__button">Unarchived</button>
  )
}