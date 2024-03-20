import { useState, useEffect, useRef } from 'react';
import styles from './NavBar.module.css';
import hamburgerMenuIcon from '../assets/hamburger_menu.svg';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    return (
        <nav className={styles.navbar} ref={navRef}>
            <div className={styles.logo}>
                <p className={styles.logoText}>
                    Sabrina Castellanos
                </p>
            </div>
            <ul className={`${isMenuOpen ? styles.navDropDown : styles.navList}`}>
                <li className={styles.navItem}><a href="#about">About</a></li>
                <li className={styles.navItem}><a href="#skills">Skills</a></li>
                <li className={styles.navItem}><a href="#projects">Projects</a></li>
                <li className={styles.navItem}><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <img className={styles.hamburgerImg} src={hamburgerMenuIcon} alt="Menu" />
            </div>
        </nav>
    );
};

export default NavBar;
