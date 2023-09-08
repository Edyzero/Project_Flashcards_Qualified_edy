import React from 'react'
import { useHistory } from 'react-router-dom';

function Done({ deck = null }) {
    const history = useHistory();

    const clickHandle = () => {
        if (deck){
            history.push(`/decks/${deck.id}`);
    } else {
        history.push("/");
    }
}
    return (<button className="button button-gray" onClick={clickHandle}>Done</button>)
}

export default Done