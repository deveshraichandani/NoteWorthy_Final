import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';


function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  // function handleEdit(){

  // }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleDelete}><DeleteIcon /></Fab>
      <Fab onClick={handleDelete}><EditIcon /></Fab>

    </div>
  );
}

export default Note;
