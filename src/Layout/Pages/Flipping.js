import React, { useState } from "react";
import Board from "./Board";
import  { useHistory } from "react-router-dom"

function Flipping({ deck = null }) {
  const [side, setSide] = useState(true);
  const [index, setIndex] = useState(0);

  let board = null;

  if (deck && deck.cards) {
    const cards = deck.cards;
    const currentCard = cards[index];
    const history = useHistory();

    const flipCard = () => {
      setSide(!side);
    };

    const nextCard = () => {
      if (index < cards.length - 1) {
        setIndex(index + 1);
        setSide(true)
      } else {
        const restart = window.confirm("Restart cards?\nClick'Cancel' to return to the home page.");
        if (restart) {
          setIndex(0);
          setSide(true);
        } else {
            history.push("/");
        }
      }
    };

    board = (
      <Board key={currentCard.id} title={`Card ${index + 1} of ${cards.length}`} content={side ? currentCard.front : currentCard.back}>
        <button onClick={flipCard}>Flip</button>
        {!side && <button onClick={nextCard}>Next</button>}
      </Board>
    );
  }

  return (
    <div>
      {board}
    </div>
  );
}

export default Flipping;
