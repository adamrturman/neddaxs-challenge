import React, { useState } from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import Router from 'next/router'

// interface Props {
//     history: RouteComponentProps["history"];
// }
interface State {
    id: number;
}

function Search (props:Props) {

    const [id, setId] = useState();

    // console.log(props)
    // const { history } = props;

    const handleChange = (event: any) => {
        setId(event.target.value);
        console.log(id)
    }

    const submitId = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        Router.push(`/users/${id}`)
    }



    return (
        <form onSubmit={submitId}>
            <input onChange={handleChange} />
            <button>Click</button>
        </form>
    )
}

export default Search;