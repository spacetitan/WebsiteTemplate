import React from 'react';
import Styles from './burgerMenu.module.css';
import { Link } from 'react-router-dom';

const burgerMenu = ({ isOpen }) => {
    
return (
    <>
        <div className={isOpen ? Styles.burgerMenuContainer : Styles.burgerMenuContainerOpen}>
            <Link to={'/'} className={Styles.burgerMenuLink}>BurgerMenu Link 1</Link>
            <Link to={'/'} className={Styles.burgerMenuLink}>BurgerMenu Link 2</Link>
            <Link to={'/'} className={Styles.burgerMenuLink}>BurgerMenu Link 3</Link>
        </div>
    </>
);};

export default burgerMenu;