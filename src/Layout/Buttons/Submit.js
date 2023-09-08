import React from "react";
import { updateDeck, createDeck, updateCard } from "../../utils/api/index.js";
import { useHistory } from "react-router-dom/";





function Submit({ deck, type, card }) {
  const history = useHistory();
  const clickHandler = async (e) => {
    if (deck && type === "deck") {
      e.preventDefault();
      try {
        await updateDeck(deck);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      history.push(`/decks/${deck.id}`);
    } else if (type === "new") {
      e.preventDefault();
      try {
        await createDeck(deck);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      history.push(`/`);
    } else if (type==="editCard"){
      e.preventDefault();
      try {
        await updateCard(card);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      history.push(`/decks/${deck}`);
    }
  };
  return (
    <button className="button button-blue" onClick={clickHandler}>
      Submit
    </button>
  );
}
export default Submit;
