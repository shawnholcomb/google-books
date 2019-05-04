import React from 'react';

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        border: '2px solid #000',
        padding: '10px 20px'
    },
    h2: {
        paddingRight: 35,
        fontSize: 20
    },
    a: {
        paddingRight: 20,
        display: 'flex',
        alignItems: 'center'
    }
}

const Nav = () => {
    return (
        <div style={styles.navbar}>
            <h2 style={styles.h2}>Google Books</h2>
            <a style={styles.a} href="/">Search</a>
            <a style={styles.a} href="/saved">Saved</a>
        </div>
    );
}

export default Nav;