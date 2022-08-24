import { FormBodyWrapper, FormHeaderWrapper, FormNote } from "./FormElements"
import "./Form.css"

const Form = ({onToggle}) => {
  return (
    <div className="form">
      <FormHeaderWrapper onToggle={onToggle}/>
      <FormBodyWrapper/>
      <FormNote/>
    </div>
  )
}

export default Form