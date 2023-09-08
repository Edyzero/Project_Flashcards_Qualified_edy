import React from "react";
import { createCard } from "../../utils/api/index.js";
import { useHistory } from "react-router-dom";

function Save({ card = null, deck }) {
  const history = useHistory();
  const clickHandler = async () => {
    try {
      if (card && deck) {
        const id = deck.id;
        await createCard(id, card);
        
      }
    } catch (error) {
      console.error("Error creating card:", error);
    }

  };

  return (
    <button className="button button-blue" onClick={clickHandler}>
      Save
    </button>
  );
}

export default Save;
