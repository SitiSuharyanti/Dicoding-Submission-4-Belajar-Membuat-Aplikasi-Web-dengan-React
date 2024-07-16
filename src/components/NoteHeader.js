import React from "react";

function NoteHeader({ search, onSearchValue }) {
  return (
    <div className="note-app__header">
      <h1>Personal Note</h1>
      <form>
        <input type="text" placeholder="Cari Catatan ..." value={search} onChange={onSearchValue}></input>
      </form>
    </div>
  );
}

export default NoteHeader;
