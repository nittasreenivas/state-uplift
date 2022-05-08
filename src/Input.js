import { useState } from "react";
export default function Input(props) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input input={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => props.handleClick(input)}> Press </button>
    </div>
  );
}
