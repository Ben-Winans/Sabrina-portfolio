import { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, titleImages, content }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClose = (e) => {
        if (e.target.classList.contains(styles.modalOverlay)) {
            onClose();
        }
    };

    const renderTitleImages = () => {
        return (
            <div className={styles.modalTitleImageContainer}>
                {titleImages.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`${title} - ${index}`} className={styles.modalTitleImage} />
                ))}
            </div>
        );
    };

    const parseBoldText = (text) => {
        const parts = text.split(/(\*.*?\*)/).filter(part => part); 
      
        return parts.map((part, index) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            return <strong key={index}>{part.slice(1, -1)}</strong>; 
          }
          return part; 
        });
      };

      const renderContent = () => {
        return content.map((item, index) => {
            switch (item.type) {
                case 'subheading':
                    return <h3 key={index} className={styles.modalSubheading}>{parseBoldText(item.text)}</h3>;
                
                case 'body':
                    if (Array.isArray(item.text)) {
                        // If the body text is an array, render each string as a separate paragraph
                        return item.text.map((paragraph, idx) => (
                            <p key={`${index}-${idx}`} className={styles.modalBody}>{parseBoldText(paragraph)}</p>
                        ));
                    }
                    // If it's not an array, render it as a single paragraph
                    return <p key={index} className={styles.modalBody}>{parseBoldText(item.text)}</p>;
    
                case 'image':
                    if (Array.isArray(item.src)) {
                        // If the image source is an array, render each image in a group container
                        return (
                            <div key={index} className={styles.modalImageGroupContainer}>
                                {item.src.map((imgSrc, idx) => (
                                    <img key={idx} src={imgSrc} alt={`${title} - ${idx}`} className={styles.modalGroupedImage} />
                                ))}
                            </div>
                        );
                    }
                    // If it's not an array, render a single image
                    return <img key={index} src={item.src} alt={`Section ${index}`} className={styles.modalImage} />;
    
                default:
                    return null;
            }
        });
    };
    

    return (
        <>
            {isOpen && (
                <div className={styles.modalOverlay} onClick={handleClose}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <span className={styles.closeModalButton} onClick={onClose}>&times;</span>
                        <h2>{title}</h2>
                        {renderTitleImages()}
                        {renderContent()}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
