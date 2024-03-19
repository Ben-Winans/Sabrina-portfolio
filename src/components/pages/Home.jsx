import React from 'react';
import styles from './Home.module.css';
import Sun from '../atoms/Sun.jsx';
import Clouds from '../atoms/Clouds.jsx';

const Home = () => {
    return (
        <>
            <div className={styles.scrollContainer}>
                <section className={styles.homeSection}>
                    <h1 className={styles.title}>Sabrina Castellanos</h1>
                    <div className={styles.positioningWrapper}>
                        <Sun />
                        <Clouds />
                    </div>
                </section>
            </div>
            <div className={styles.spacing}>
                <p>stuff</p>
            </div>
        </>
    );
};

export default Home;
