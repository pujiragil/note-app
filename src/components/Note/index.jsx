import "./Note.css"
import { NoteList } from "./NoteElements"

const Note = ({notes, onDelete}) => {
  return (
    <div className="note">
      {notes.length > 0 ? (
        <NoteList notes={notes} onDelete={onDelete}/>
      ) : (
        <p className="note__warning">no record 🗿</p>
      )}
    </div>
  )
}

export default Note