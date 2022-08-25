import { showFormattedDate } from "../../utils"

export const NoteList = ({children }) => {
  return (
    <div className="note__list">
      {children}
    </div>
  )
}

export const NoteItem = ({ note, onDelete, onArchive }) => {
  return (
    <div className="note__item">
      <NoteContent {...note} />
      <NoteButtonWrap id={note.id} note={note} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}

const NoteContent = ({ title, createdAt, body }) => {
  const date = showFormattedDate(createdAt)
  return (
    <div className="note__content--wrapper">
      <p className="note__title">{title}</p>
      <p className="note__date">{date}</p>
      <p className="note__content">{body}</p>
    </div>
  )
}

const NoteButtonWrap = ({ id, note, onDelete, onArchive }) => {
  return (
    <div className="note__button--wrapper">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchieveButton note={note} onArchive={onArchive} />
    </div>
  )
}

const DeleteButton = ({ id, onDelete }) => {
  return <button onClick={() => onDelete(id)} className="note__button delete">Delete</button>
}

const ArchieveButton = ({ note, onArchive }) => {
  return <button onClick={() => { onArchive(note) }} className="note__button archive">Archive</button>
}