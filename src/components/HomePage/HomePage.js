// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const Homepage = () => {
    return (
      <div>
        <header className={`${styles.navbar} ${styles.header}`}>
          <div className={styles['button-container']}>
            <Link to="/signin">
              <button className={`${styles['signIn-button']} ${styles.button}`}>Sign In</button>
            </Link>
            <Link to="/signup">
              <button className={`${styles['signUp-button']} ${styles.button}`}>Sign Up</button>
            </Link>
          </div>
        </header>
        <h1 className={styles['hackthon-text']}>Hackthon</h1>
        <div className={styles['colored-divs-container']}>
          <div className={styles['colored-div1']}><h4 className={styles['div-text']}>Take part and Win Exciting goodies
</h4></div>
          <div className={styles['colored-div2']}><h4 className={styles['div-text']}>Compete with best of the talents</h4></div>
        </div>
        {/* Rest of the homepage content */}
      </div>
    );
  };
  
  export default Homepage;
