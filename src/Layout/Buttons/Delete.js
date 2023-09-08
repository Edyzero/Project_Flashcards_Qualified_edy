import React from "react";
import { deleteDeck, deleteCard } from "../../utils/api";

function Delete({ type, id } ) {


  const showWarning = () => {
    
    const result = window.confirm(`Delete this ${type}?\nYou will not be able to recover it.`);
    if (result) {
      if (type==="deck") {
        deleteDeck(id);
        window.location.reload();
      } else if (type==="card"){
        deleteCard(id);
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  };


  return (
    <div>
      <button className="button button-red" onClick={showWarning}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </button>
    </div>
  );
}

export default Delete;
