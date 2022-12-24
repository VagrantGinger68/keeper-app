import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import createNote from "./Note";
import notes from "../notes";

function App(){
    return (
    <Fragment>
        <Header />
        <Footer />
        {notes.map(createNote)}
    </Fragment>
)};

export default App;