import styles from './ProjectCard.module.css';

const ProjectCard = ({ image, title, description, tags }) => {
    const renderImages = () => {
        // If 'image' is an array, map over it to render multiple images
        if (Array.isArray(image)) {
            return image.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`${title} - ${index}`} className={styles.cardImage} />
            ));
        }
        // If 'image' is a single URL, render a single image
        return <img src={image} alt={title} className={styles.cardImage} />;
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardImageContainer}>
                {renderImages()}
            </div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.cardTags}>
                    {tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
