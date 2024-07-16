import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteHeader from "./NoteHeader";

class PersonalNoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toISOString(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));

    const notArchivedNotes = notes.filter((note) => {
      return note.archived === false;
    });

    const archivedNotes = notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <div>
        <NoteHeader onSearchValue={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          {notArchivedNotes.length !== 0 ? <NoteList notes={notArchivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <div className="notes-list__empty-message">Tidak ada catatan</div>}
          <h2>Arsip</h2>
          {archivedNotes.length !== 0 ? <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} /> : <div className="notes-list__empty-message">Tidak ada catatan</div>}
        </div>
      </div>
    );
  }
}

export default PersonalNoteApp;
