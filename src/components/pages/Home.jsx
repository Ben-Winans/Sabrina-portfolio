import React from 'react';
import styles from './Home.module.css';
import Sun from '../atoms/Sun.jsx';
import Clouds from '../atoms/Clouds.jsx';
import Waves from '../atoms/Waves.jsx';
import Bubbles from '../atoms/Bubbles.jsx';


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
                    <Waves />
                </section>
                <div className={styles.bubbleContainer}>
                    <Bubbles />
                </div>
            </div>
            <div className={styles.spacing}>
                <p>stuff</p>
            </div>
        </>
    );
};

export default Home;
