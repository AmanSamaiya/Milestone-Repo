import { useState } from "react";
import "../Todo/Todo.css";

function Todo({ deletetodos, text , id }) {
  const [editting, setIsEditting] = useState(false);

  const [editText, setEditText] = useState(text);

  const [finished, setFinished] = useState("");

  return (
    <div className="todoitems">

      <span className="todospan">{id+".  "+editText}</span>

      <span className="todostatus">Status : {finished}</span>

      <span>{}</span>

      <button
        onClick={() => {
          setIsEditting(!editting);
        }}
        className="todobtn"
      >
        Update Status
      </button>

      {editting ? (
        <div>
          <button
            className="editbtn"
            onClick={() => {
              setFinished("Completed");
              setIsEditting(!editting);
            }}
          >
            Completed
          </button>

          <button
            className="editbtn"
            onClick={() => {
              setFinished("Pending");
              setIsEditting(!editting);
            }}
          >
            Pending
          </button>
        </div>
      ) : null}

      <button onClick={() => deletetodos(id)} className="todobtn">
        Remove
      </button>
    </div>
  );
}

export default Todo;
