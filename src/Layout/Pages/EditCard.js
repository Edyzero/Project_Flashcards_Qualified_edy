import React, { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcreumbs";
import { useParams } from "react-router-dom";
import { Cancel, Submit } from "../Buttons";
import { readCard } from "../../utils/api/index.js";

function EditCard() {
  const { id, cardId } = useParams();
  const [card, setCard] = useState({ front: "", back: "" });

  useEffect(() => {
    async function fetchCard() {
      try {
        const item = await readCard(cardId);
        setCard(item);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCard();
  }, [cardId]);

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
        <Breadcrumbs currentPage="Edit Card" />
      </span>
      <form>
        <div className="form-group">
          <h1>Edit Card</h1>
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
        <Cancel deck={id} />
        <Submit card={card} type="editCard" deck={id} />
      </form>
    </div>
  );
}

export default EditCard;
