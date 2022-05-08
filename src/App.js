import "./styles.css";
import {useState} from "react";
import Input from "./Input";
import Text from "./Text"
export default function App() {
  const [text,setText] = useState("")
  const handleClick = (value) => {
    setText(value)
  }
  return (
    <div className="App">
      <Input handleClick = {handleClick}/>
      <Text text = {text}/>
    </div>
  );
}
