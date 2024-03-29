import React from 'react';
import styles from './Sun.module.css';

const Sun = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.sunRay} />
                <div className={styles.sun} />
            </ div>
        </>
    );
};

export default Sun;
