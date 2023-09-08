import React from 'react'
import { useHistory } from 'react-router-dom/';

function Cancel({deck}){
    const history = useHistory();

    const clickHandle = () => {
        if (deck){
            history.push(`/decks/${deck}`);
    } else {
        history.push("/");
    }
}
    return (<button className="button button-gray" onClick={clickHandle}>Cancel</button>)
}

export default Cancel;