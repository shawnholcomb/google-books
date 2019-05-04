import React from 'react';

const styles = {
    div: {
        margin: '35px 25px',
        padding: '25px 35px',
        border: '2px solid #000'
    },
    h2: {
        margin: '35px 25px',
        padding: '25px 35px',
        border: '2px solid #000',
        fontSize: 20
    }
}

const SavedBooks = (props) => {
    return (
        <div style={styles.div}>
            <h2>Saved Books</h2>
            {props.children}
        </div>
    )
}

export default SavedBooks;