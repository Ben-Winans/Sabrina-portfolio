import styles from './Contact.module.css';

const Contact = () => {
    const subject = encodeURIComponent("Hi Ben, nice website!");
    const body = encodeURIComponent("We are interested in working with you, let's get in touch.");

    return (
        <div className={styles.contactButtonContainer}>
            <a href={`mailto:winans.benjamin@outlook.com?subject=${subject}&body=${body}`} className={styles.contactButton}>
                Let's get in touch
            </a>
        </div>
    );
};

export default Contact;