import React from "react";
import "./Breadcreumbs.css"

import { Link } from "react-router-dom";

function Breadcrumbs({ currentPage, deck }) {
  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link> /{" "}
      {deck ? (
        <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
      ) : (
        <span></span>
      )}{" "}
       {currentPage}
    </div>
  );
}

export default Breadcrumbs;
