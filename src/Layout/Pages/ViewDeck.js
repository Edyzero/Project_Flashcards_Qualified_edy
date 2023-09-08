import React, { useState, useEffect } from "react";
import { readDeck } from "../../utils/api/index.js";
import Breadcrumbs from "./Breadcreumbs.js";
import { Edit, Study, AddCards, Delete } from "../Buttons";

function ViewDeck({ match }) {
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

  const cards = deck.cards;
  const data = () => {
    if (cards) {
      return (
        <div>
          {cards.map((card) => (
            <li key={card.id} style={{ listStyleType: "none" }}>
              <div className="card">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card-body">{card.front}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card-body">{card.back}</div>
                  </div>
                  <div style={{ margin: "auto" }}>
                    <Edit type="card" card={card} deck={deck} />
                    <Delete type="card" id={card.id} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      );
    }
  };

  if (!deck) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <span>
        <Breadcrumbs currentPage={deck.name} />
      </span>
      <div>
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
        <Edit deck={deck} type="deck"/>
        <Study deckId={deck.id} />
        <AddCards deckId={deck.id} />
        <Delete type="deck" id={deck.id} />
      </div>

      <h3>Cards:</h3>
      <ul>{data()}</ul>
    </div>
  );
}

export default ViewDeck;
