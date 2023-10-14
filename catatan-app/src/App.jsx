import React, { useState } from "react";
import Note from "./components/Note";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const addNote = () => {
    if (newNote.title && newNote.content) {
      setNotes([...notes, newNote]);
      setNewNote({ title: "", content: "" });
    }
  };

  return (
    <div className="App">
      <h1>Catatan Sederhana</h1>
      <div className="form">
        <input type="text" placeholder="Judul" value={newNote.title} onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} />
        <textarea placeholder="Isi Catatan" value={newNote.content} onChange={(e) => setNewNote({ ...newNote, content: e.target.value })} />
        <button onClick={addNote}>Tambah Catatan</button>
      </div>
      <div className="notes">
        {notes.map((note, index) => (
          <Note key={index} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
