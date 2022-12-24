import React from "react";

function createNote(note){
    return(
        <Note 
        key={note.key}
        noteTitle={note.title}
        noteBody={note.content}    
        />
    )
};

function Note(props){
    return(
        <div className="note">
            <h1>{props.noteTitle}</h1>
            <p>{props.noteBody}</p>
        </div>
    )
};

export default createNote;