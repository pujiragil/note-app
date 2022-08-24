import { FormBodyWrapper, FormHeaderWrapper, FormNote } from "./FormElements"
import "./Form.css"

const Form = ({onToggle, notes}) => {
  return (
    <div className="form">
      <FormHeaderWrapper onToggle={onToggle}/>
      <FormBodyWrapper notes={notes}/>
      <FormNote/>
    </div>
  )
}

export default Form