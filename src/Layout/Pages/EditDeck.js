import React from "react";
import Breadcrumbs from "./Breadcreumbs";
import { Cancel, Submit } from "../Buttons";
import { useEffect, useState } from "react";
import { readDeck } from "../../utils/api/index.js";

function EditDeck({ match }) {
  const deckId = match.params.id;
  const [deck, setDeck] = useState({name:"", description:""});

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


const handleChange = (evt) => {
  const { name, value } = evt.target;
  setDeck((prevDeck) => ({
    ...prevDeck,
    [name]: value, 
  }))
};



  return (
    <div>
      <span>
        <Breadcrumbs currentPage="Edit Deck" deck={deck} />
      </span>
      <form>
        <div className="form-group">
          <h1>Edit Deck</h1>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={deck.name}
            onChange={ handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>

          <textarea
            className="form-control"
            rows="4"
            name="description"
            value={deck.description}
            onChange={ handleChange }
          ></textarea>
        </div>
      <Cancel deck={deck.id}/>
      <Submit deck={deck} type="deck" />
      </form>
    </div>
  );
}

export default EditDeck;
