import React, { useEffect, useState } from "react";
import { listDecks } from "../../src/utils/api/index.js";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch, useHistory } from "react-router-dom";
import { AddDeck } from "./Buttons";
import { CreateDeck, ViewDeck, Decks, EditDeck, EditCard, NewCard, StudyDeck } from "./Pages";

function Layout() {
  const [getDecks, setGetDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchDecks() {
      try {
        const decks = await listDecks();
        setGetDecks(decks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    const unlisten = history.listen((location) => {
      if (location.pathname === '/') {
        fetchDecks();
      }
    });

    fetchDecks();

    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <AddDeck />

        <Switch>
          <Route path="/decks/new" component={CreateDeck} />
          <Route path="/decks/:id/cards/:cardId/edit" component={EditCard} />
          <Route path="/decks/:id/cards/new" component={NewCard} />
          <Route path="/decks/:id/study" component={StudyDeck} />
          <Route path="/decks/:id/edit" component={EditDeck} />
          <Route path="/decks/:id" component={ViewDeck} />
          <Route
            exact
            path="/"
            render={(props) => <Decks {...props} getDecks={getDecks} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
