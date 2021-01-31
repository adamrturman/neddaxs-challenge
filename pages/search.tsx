import React, { useState } from 'react';
import Router from 'next/router';


interface State {
    id: number;
}

const Search: React.FC<{}> = (props) => {

    const [id, setId] = useState();

    const handleChange = (event: any) => {
        setId(event.target.value);
    }

    const submitId = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        Router.push(`/users/${id}`);
    }

    return (
        <h2>Search for a User by Id
            <form onSubmit={submitId}>
                <input onChange={handleChange} />
                <button>Click</button>
            </form>
        </h2>
    )
}

export default Search;