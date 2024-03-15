import { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import styles from './Works.module.css';
import AV_title_1 from '../assets/AV_title_1.png';
import AV_title_2 from '../assets/AV_title_2.png';
import OS_title from '../assets/OS_title.png';
import PP_title from '../assets/PP_title.png';
import modalContent from './modalContent';

const Works = () => {
    const [openModal, setOpenModal] = useState(null);

    const projects = {
        AV: {
            image: [AV_title_1, AV_title_2],
            title: 'Autonomous Vehicle HCI study',
            description: 'Year-long development of research assisting software',
            tags: ['Full Stack', 'SERN', 'Javascript', 'HTML', 'css', 'Redux', 'Docker', 'Jest', 'Axios', 'styled-components', 'Sequelize'],
        },
        OS: {
            image: [OS_title], 
            title: 'Operating Systems',
            description: 'Collection of Linux based C/C++ projects',
            tags: ['Linux', 'CLI', 'Bash', 'VScode', 'C', 'C++', 'VM', 'gtest'],
        },
        PP: {
            image: [PP_title], 
            title: 'Personal Portfolio V1',
            description: 'First version of my personal portfolio featuring a from scratch design.',
            tags: ['Figma', 'React', 'GitHub Pages', 'Javascript', 'HTML', 'css'],
        },
    };

    const handleOpenModal = (projectId) => {
        setOpenModal(projectId);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
    };

    return (
        <div className={styles.worksContainer}>
            <div className={styles.worksTitle}>Some of my recent works</div>
            <div className={styles.cardsContainer}>
                {Object.entries(projects).map(([key, project]) => (
                    <div key={key} onClick={() => handleOpenModal(key)}>
                        <ProjectCard 
                            image={project.image} 
                            title={project.title} 
                            description={project.description} 
                            tags={project.tags} 
                        />
                    </div>
                ))}
            </div>
            {openModal && (
                <Modal 
                isOpen={Boolean(openModal)} 
                onClose={handleCloseModal}
                title={projects[openModal].title}
                titleImages={projects[openModal].image}
                content={modalContent[openModal]}
                />
            )}
        </div>
    );
};

export default Works;
