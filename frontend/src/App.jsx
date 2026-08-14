import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://127.0.0.1:8000/notes";

function App() {

    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editId, setEditId] = useState(null);

    const displayNotes = () => {
        axios.get(API)
            .then(res => setNotes(res.data));
    };

    useEffect(() => {
        displayNotes();
    }, []);

    const submitNote = () => {

        const data = {
            title,
            content
        };

        if (editId === null) {

            axios.post(API, data)
                .then(() => {
                    clearForm();
                    displayNotes();
                });

        } else {

            axios.put(API + "/" + editId, data)
                .then(() => {
                    clearForm();
                    displayNotes();
                });

        }

    };

    const deleteNote = (id) => {

        axios.delete(API + "/" + id)
            .then(() => displayNotes());

    };

    const editNote = (note) => {

        setEditId(note.id);
        setTitle(note.title);
        setContent(note.content);

    };

    const clearForm = () => {

        setTitle("");
        setContent("");
        setEditId(null);

    };

    return (

        <div className="container">

            <h1>Notes App</h1>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <div>

                <button onClick={submitNote}>
                    {editId ? "Update" : "Submit"}
                </button>

                <button onClick={displayNotes}>
                    Display
                </button>

            </div>

            {
                notes.map(note => (

                    <div className="card" key={note.id}>

                        <h3>{note.title}</h3>

                        <p>{note.content}</p>

                        <button onClick={() => editNote(note)}>
                            Update
                        </button>

                        <button onClick={() => deleteNote(note.id)}>
                            Delete
                        </button>

                    </div>

                ))
            }

        </div>

    );

}

export default App;