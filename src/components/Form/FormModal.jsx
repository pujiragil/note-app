import "./FormModal.css"

export default function FormModal({onToggle, titleHandler, bodyHandler, createNoteHandler, message}) {
  return (
    <div className="form__modal">
      <FormModalWrap onToggle={onToggle} titleHandler={titleHandler} bodyHandler={bodyHandler} createNoteHandler={createNoteHandler} message={message}/>
    </div>
  )
}

const FormModalWrap = ({onToggle, titleHandler, bodyHandler, createNoteHandler, message}) => {
  return (
    <form onSubmit={createNoteHandler} className="form__modal--wrapper">
      { message && <p className="form__warning">{message}</p> }
      <Field titleHandler={titleHandler} />
      <Field bodyHandler={bodyHandler} textarea/>
      <ButtonWrapper onToggle={onToggle}/>
    </form>
  )
}

const Field = ({ textarea, titleHandler, bodyHandler }) => {
  return (
    textarea ? (
      <div className="form__field">
        <label htmlFor="note__content" className="form__label">Content</label >
        <textarea onChange={bodyHandler} type="text" name="note__content" id="note__content" className="form__input" placeholder="your note content..."/>
      </div>
    ) : (
      <div className="form__field">
        <label htmlFor="note__title" className="form__label">Title</label >
        <input onChange={titleHandler} type="text" name="note__title" id="note__title" className="form__input" placeholder="your note title..."/>
      </div >
    )
  )
}

const ButtonWrapper = ({onToggle}) => {
  return (
    <div className="form__button--wrapper">
      <CancelButton onToggle={onToggle}/>
      <CreateButton/>
    </div>
  )
}

const CancelButton = ({onToggle}) => {
  return <button onClick={onToggle} type="button" className="form__button cancel">Cancel</button>
}

const CreateButton = () => {
  return <button  type="submit" className="form__button create">Create</button>
}