import React from 'react';
import styles from './Clouds.module.css';

const Clouds = () => {
    return (
        <>
            <div className={styles.cloud_foreground}></div>
            <div className={styles.cloud_background}></div>
        </>
    );
};

export default Clouds;
