import React, { useState } from "react";
import Breadcrumbs from "./Breadcreumbs";
import { Submit, Cancel } from "../Buttons";


function CreateDeck() {
  const [deck, setDeck] = useState({ name: "", description: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDeck({ ...deck, [name]: value });
  };

  return (
    <>
      <Breadcrumbs currentPage="Create Deck" />
      <form>
        <div className="form-group">
          <h1>Create Deck</h1>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameDeck"
            placeholder="Deck Name"
            name="name"
            value={deck.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>

          <textarea
            className="form-control"
            id="descriptionDeck"
            rows="4"
            placeholder="Brief description of the deck"
            name="description"
            value={deck.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <Cancel />
        <Submit deck={deck} type="new" />
      </form>
    </>
  );
}

export default CreateDeck;
