import React, { useState } from 'react';
import Router from 'next/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../style/Style.module.css';


interface State {
    id: number;
}

const Search: React.FC<{}> = () => {
    const [id, setId] = useState();

    const handleChange = (event: any) => {
        setId(event.target.value);
    }

    const submitId = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        Router.push(`/users/${id}`);
    }
    return (
        <>
            <div className={styles.search}>
                <TextField className={styles.search} id="outlined-basic" label="Search for User by Id" variant="outlined" onChange={handleChange} />
            </div>
            <div>
                <Button onClick={submitId} variant="contained" color="primary">Search</Button>
            </div>
        </>
    );
}

export default Search;