import React from 'react';

const styles = {
    div: {
        padding: '25px 35px',
        border: '2px solid #000'
    },
    titleDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttonDiv: {
        display: 'flex',
        padding: '15px 0px',
        alignContent: 'center',
        margin: ''
    },
    button: {
        border: '2px solid #000',
        fontSize: 16,
        fontWeight: 'bold',
        padding: '5px 12px',
        boxShadow: '3px 3px rgba(0,0,0,0.5)',
        cursor: 'pointer',
        margin: '0px 5px'
    },
    buttonhover: {
        boxShadow: '5px 5px 5px rgba(0,0,0,0.5)',
    },
    picDiv: {
        display: 'flex',
    },
    pDiv: {
        marginLeft: 20,
    },
    p: {
        fontSize: 18,
        margin: 0,
        lineHeight: '140%',
    }
}

const Result = (props) => {
    return (
        <div style={styles.div}>
            <div style={styles.titleDiv}>
                <h2>Harry Potter's Bookshelf</h2>
                <div style={styles.buttonDiv}>
                    <button style={styles.button}>View</button>
                    <button style={styles.button}>Delete</button>
                </div>
            </div>
            <h3>The Great Books behind the Hogwart's Adventures</h3>
            <h4>Written By: John Grainger</h4>
            <div style={styles.picDiv}>
                <img src="http://via.placeholder.com/200x200" alt="book cover"></img>
                <div style={styles.pDiv}>
                    <p style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default Result;