import React, { useState, useEffect } from "react";
import Breadcrumbs from "./Breadcreumbs";
import { Done, Save } from "../Buttons";
import { readDeck } from "../../utils/api/index.js";
import { useParams } from "react-router-dom";

function NewCard() {
  let deckId = useParams();
  deckId = deckId.id
  const [card, setCard] = useState({ front: "", back: "" });
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function fetchDeck(deckId) {
      try {
        const item = await readDeck(deckId);
        setDeck(item);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDeck(deckId);
  }, [deckId]);
  

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  return (
    <div>
      <span>
        <Breadcrumbs currentPage="New Card" deck={deck} />
      </span>
      <form>
        <div className="form-group">
          <h1>New Card</h1>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Front</label>
          <textarea
            className="form-control"
            rows="3"
            name="front"
            value={card.front}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Back</label>

          <textarea
            className="form-control"
            rows="3"
            name="back"
            value={card.back}
            onChange={handleChange}
          ></textarea>
        </div>
        <Save card={card} deck={deck} /> {/* Include the Save component */}
        <Done deck={deck} /> {/* Include the Done component */}
      </form>
    </div>
  );
}

export default NewCard;
