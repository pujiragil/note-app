import "./Note.css"
import { NoteItem, NoteList } from "./NoteElements"

const Note = ({ menu, notes, onDelete, onArchive }) => {
  const unarchiveNotes = notes.filter(note => note.archived === false)
  const archiveNotes = notes.filter(note => note.archived === true)
  return (
    <div className="note">
      {menu === 'unarchive' ? (
        unarchiveNotes.length > 0 ? (
          <NoteList>
            {unarchiveNotes.map(note => (
              <NoteItem key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} />
            ))}
          </NoteList>
        ) : (
          <p className="note__warning">no record 🗿</p>
        )
      ) : (
        archiveNotes.length > 0 ? (
          <NoteList>
            {archiveNotes.map(note => (
              <NoteItem key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} menu={menu}/>
            ))}
          </NoteList>
        ) : (
          <p className="note__warning">no record 🗿</p>
        )
      )}
    </div>
  )
}

{/* {notes.length > 0 ? (
  <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}/>
) : (
  <p className="note__warning">no record 🗿</p>
)} */}
export default Note