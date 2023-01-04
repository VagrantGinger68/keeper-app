import React, { useState } from "react";

// function createNote(note){
//     return(
//         <Note 
//         key={note.key}
//         noteTitle={note.title}
//         noteBody={note.content}    
//         />
//     )
// };

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }
    
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
};

export default Note;