import React from "react";
import Board from "./Board.js";
import "./Board.css";
import {View, Study, Delete} from "../Buttons";

function Decks({getDecks}) {

  const boards = getDecks.map((deck) => (
    <Board key={deck.id} title={deck.name} content={deck.description} subtitle={`${deck.cards.length} cards`} >
      <div className="containe">
        <View deck={deck} />
        <Study deckId={deck.id} />
        <div className="right">
          <Delete type="deck" id={deck.id} />
        </div>
      </div>
    </Board>
  ));

  return <div>{boards}</div>;
}

export default Decks;
