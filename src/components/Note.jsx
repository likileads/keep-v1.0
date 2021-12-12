import React from "react";
import Notes from "./eachNote"
import notes from "../notes";

function createNote(noted) {
  return (
    <Notes
      key = {noted.key}
      title = {noted.title}
      content = {noted.content}
    />
  )
}

// parsing
function Note() {
  return (
    <div>{notes.map(createNote)}</div>
  );
}

export default Note;