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
  return (
    <div className="form__body--wrapper">
      <FormCount notes={0} text="Archive"/>
      <FormCount notes={notes} text="Notes"/>
      <FormCount notes={notes} text="Unarchive"/>
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