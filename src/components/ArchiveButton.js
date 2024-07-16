import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archived ? <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>}
    </button>
  );
}

export default ArchiveButton;
