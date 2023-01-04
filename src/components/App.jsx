import React, { Fragment, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
           return [...prevNotes, newNote]
        })
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })
    }

    return (
    <Fragment>
        <Header />
        <Footer />
        <CreateArea 
        onAdd={addNote}
        />
        {notes.map((noteItem, index)=>{
            return (<Note 
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
            />)
        })}
    </Fragment>
)};

export default App;