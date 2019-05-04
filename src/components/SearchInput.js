import React from 'react';

const styles = {
    div: {
        margin: '35px 25px',
        padding: '25px 35px',
        border: '2px solid #000'
    },
    h2: {
        fontSize: 24,
        paddingBottom: 20
    },
    inputDiv: {
        display: 'flex',
        alignItems: 'stretch'
    },
    input: {
        width: '100%',
        padding: '5px 15px',
        fontSize: 16,
        border: '2px solid #000',
        marginBottom: 15
    },
    buttonDiv: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        border: '2px solid #000',
        fontSize: 16,
        fontWeight: 'bold',
        padding: '5px 12px',
        boxShadow: '3px 3px rgba(0,0,0,0.5)',
        cursor: 'pointer',
        marginBottom: 15
    }
}

const SearchInput = () => {
    return (
        <div style={styles.div}>
            <h2 style={styles.h2}>Book Search</h2>
            <form>
                <div style={styles.inputDiv}>
                    <input style={styles.input} type="text" defaultValue="Enter Book Name"></input>
                </div>
                <div style={styles.buttonDiv}>
                    <button style={styles.button}>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchInput;