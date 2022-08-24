import { showFormattedDate } from "../../utils"

export const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note__list">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} onDelete={onDelete}/>
      ))}
    </div>
  )
}

const NoteItem = ({ note, onDelete }) => {
  return (
      <div className="note__item">
        <NoteContent {...note} />
        <NoteButtonWrap id={note.id} onDelete={onDelete}/>
      </div>
  )
}

const NoteContent = ({title, createdAt, body}) => {
  const date = showFormattedDate(createdAt)
  return (
    <div className="note__content--wrapper">
      <p className="note__title">{title}</p>
      <p className="note__date">{date}</p>
      <p className="note__content">{body}</p>
    </div>
  )
}

const NoteButtonWrap = ({id, onDelete}) => {
  return (
    <div className="note__button--wrapper">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchieveButton />
    </div>
  )
}

const DeleteButton = ({id, onDelete}) => {
  return <button onClick={() => onDelete(id)} className="note__button delete">Delete</button>
}

const ArchieveButton = () => {
  return <button className="note__button archive">Archive</button>
}