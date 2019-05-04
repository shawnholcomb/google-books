import React from 'react';

const styles = {
    div: {
      margin: '35px 25px',
      padding: '10px 0px 85px 0px',
      border: '2px solid #000',
      textAlign: 'center',
    },
    h1: {
        fontSize: 55
    },
    h2: {
        fontSize: 30
    }
  }

const Heading = () => {
    return (
        <div style={styles.div}>
            <h1 style={styles.h1}>(React) Google Books Search</h1>
            <h2 style={styles.h2}>Search for and Save Books of Interest</h2>
        </div>
    )
}

export default Heading;
