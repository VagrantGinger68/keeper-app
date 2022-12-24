import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(){
    return (
    <Fragment>
        <Header />
        <Footer />
        {notes.map( note => 
        <Note 
            key={note.key}
            noteTitle={note.title}
            noteBody={note.content}    
        />   
        )}
    </Fragment>
)};

export default App;