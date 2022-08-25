import { Component } from "react"
import { Form, Navbar, Note, FormModal, Menu } from "./components"
import { getInitialData } from "./utils"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false,
      menu: 'unarchive',
      search: null,
      notes: getInitialData(),
      title: '',
      body: '',
      message: null
    }
    this.setToggle = this.setToggle.bind(this)
    this.setMenu = this.setMenu.bind(this)
    this.setSearch = this.setSearch.bind(this)
    this.titleHandler = this.titleHandler.bind(this)
    this.bodyHandler = this.bodyHandler.bind(this)
    this.createNoteHandler = this.createNoteHandler.bind(this)
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this)
  }

  setToggle() {
    this.setState((prevState) => (
      { toggle: !prevState.toggle }
    ))

    this.state.message && this.setState({ message: null })
  }

  setMenu(menu) {
    this.setState({
      menu
    })
  }

  setSearch(search) {
    this.setState({ search })
  }

  titleHandler(e) {
    if(e.target.value.length > 50) {
      e.target.value = this.state.title.slice(0, 50)
    }
    this.setState({ title: e.target.value })
  }

  bodyHandler(e) {
    const { value } = e.target
    this.setState({ body: value })
  }

  createNoteHandler(e) {
    e.preventDefault()
    if(this.state.title.length === 0 || this.state.body.length === 0) return this.setState({ message: 'Data tidak boleh kosong' })
    this.setState((prevState) => (
      { notes: [
        ...prevState.notes, 
        { 
          id: +new Date(),
          title: this.state.title,
          body: this.state.body,
          createdAt: new Date().toISOString(),
          archived: false
        }],
        toggle: false,
        message: null
      }
    ))
  }

  deleteNoteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({
      notes
    })
  }
  
  archiveNoteHandler(note) {
    const {notes} = this.state
    const updatedNote = {
      ...note,
      archived: note.archived ? false : true
    }
    const noteIndex = notes.findIndex((current) => current.id === note.id)
    
    const updatedNotes = [...notes]
    updatedNotes[noteIndex] = updatedNote

    this.setState({ notes: updatedNotes })
  } 

  render() {
    const filtered = !this.state.search ? this.state.notes : this.state.notes.filter(note => note.title.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()))
    return (
      <div className="container">
        <Navbar onSearch={this.setSearch}/>
        <Form onToggle={this.setToggle} notes={this.state.notes}/>
        {this.state.toggle && <FormModal onToggle={this.setToggle} titleHandler={this.titleHandler} bodyHandler={this.bodyHandler} createNoteHandler={this.createNoteHandler} message={this.state.message}/>}
        <Menu onMenu={this.setMenu}/>
        <Note menu={this.state.menu} notes={filtered} onDelete={this.deleteNoteHandler} onArchive={this.archiveNoteHandler}/>
      </div>
    )
  }
}

export default App
