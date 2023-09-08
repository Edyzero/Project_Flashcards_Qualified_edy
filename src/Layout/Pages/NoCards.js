import React from "react";
import { AddCards } from "../Buttons";
import { Flipping } from "./index"

function NoCards({ deck, deckId }) {
    if (deck.cards && deck.cards.length < 3) {
      return (
        <div>
          <h2>Not enough cards </h2>
          <p>
            You need at least 3 cards to study. There are {deck.cards.length}{" "}
            cards in this deck.
          </p>
          <AddCards deckId={deckId} />
        </div>
      );
    } else { return <Flipping deck={deck} />; }
  };

export default NoCards;