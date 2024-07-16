import React from "react";
import ButtonElement from "./ButtonElement";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <ButtonElement id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  );
}

export default NoteItem;
