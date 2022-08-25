import { BsPlusSquare } from 'react-icons/bs'

export const FormHeaderWrapper = ({onToggle}) => {
  return (
    <div className="form__header--wrapper">
      <FormHeader/>
      <FormCreateButton onToggle={onToggle}/>
    </div>
  )
}

export const FormHeader = () => {
  return <h1 className="form--title">Create Note</h1>
}

export const FormCreateButton = ({onToggle}) => {
  return <button className="form--button" onClick={onToggle}><BsPlusSquare className="form__icon--button"/></button>
}

export const FormBodyWrapper = ({notes}) => {
  const unarchived = notes.filter(note => note.archived === false)
  const archived = notes.filter(note => note.archived === true)
  return (
    <div className="form__body--wrapper">
      <FormCount notes={unarchived.length} text="Unarchive"/>
      <FormCount notes={notes.length} text="Notes"/>
      <FormCount notes={archived.length} text="Archive"/>
    </div>
  )
}

const FormCount = ({ notes, text }) => {
  return (
    <div className="form__count">
      <p className="num">{notes}</p>
      <p className="status">{text}</p>
    </div>
  )
}

export const FormNote = () => {
  return (
    <div className="form__note">
      <p>Note:</p>
      <p>Ini adalah project akhir dicoding membuat aplikasi catatan menggunakan React Js. </p>
    </div>
  )
}