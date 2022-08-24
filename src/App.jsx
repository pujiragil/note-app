import { Component } from "react"
import { Form, Navbar, Note, FormModal } from "./components"
import { getInitialData } from "./utils"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false,
      notes: getInitialData(),
      title: '',
      body: '',
      message: null
    }
    this.setToggle = this.setToggle.bind(this)
    this.titleHandler = this.titleHandler.bind(this)
    this.bodyHandler = this.bodyHandler.bind(this)
    this.createNoteHandler = this.createNoteHandler.bind(this)
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
  }

  setToggle() {
    this.setState((prevState) => (
      { toggle: !prevState.toggle }
    ))

    this.state.message && this.setState({ message: null })
  }

  titleHandler(e) {
    const { value } = e.target
    this.setState({ title: value })
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
  
  render() {
    return (
      <div className="container">
        <Navbar />
        <Form onToggle={this.setToggle} toggle={this.state.toggle} />
        {this.state.toggle && <FormModal onToggle={this.setToggle} titleHandler={this.titleHandler} bodyHandler={this.bodyHandler} createNoteHandler={this.createNoteHandler} message={this.state.message}/>}
        <Note notes={this.state.notes} onDelete={this.deleteNoteHandler}/>
      </div>
    )
  }
}

export default App
