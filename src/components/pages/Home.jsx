import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={styles.scrollContainer}>
                <section className={styles.homeSection}>
                    <h1 className={styles.title}>Sabrina Castellanos</h1>
                    <div className={styles.sun}></div>
                    <div className={styles.cloud_foreground}></div>
                    <div className={styles.cloud_background}></div>
                </section>
            </div>
            <div className={styles.spacing}>
                <p>stuff</p>
            </div>
        </>
    );
};

export default Home;