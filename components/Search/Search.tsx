import React, { useState } from 'react';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


interface State {
    id: number;
}

const Search: React.FC<{}> = (props) => {
    const [id, setId] = useState();

    const handleChange = (event: any) => {
        setId(event.target.value);
    }

    const submitId = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("submit id")
        event.preventDefault();
        Router.push(`/users/${id}`);
    }
    return (
        <>
            <h2>Search for a User by Id</h2>
            <TextField id="outlined-basic" label="ex. 1" variant="outlined" onChange={handleChange} />
            <Button onClick={submitId} variant="contained" color="primary">Click</Button>
        </>
    )
}

export default Search;