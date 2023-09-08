import React, { useState, useEffect } from "react";
import Breadcrumbs from "./Breadcreumbs";
import { readDeck } from "../../utils/api/index.js";
import { NoCards } from "./index"

function StudyDeck({ match }) {
  const deckId = match.params.id;
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function fetchDeck() {
      try {
        const item = await readDeck(deckId);
        setDeck(item);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDeck();
  }, [deckId]);



  return (
    <div>
      <Breadcrumbs currentPage="Study" deck={deck} />
      <h1>Study: {deck.name}</h1>
      <NoCards deck={deck} deckId={deckId} />
    </div>
  );
}

export default StudyDeck;
