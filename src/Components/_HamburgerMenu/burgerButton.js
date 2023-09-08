import React from 'react';
import Styles from './burgerButton.module.css';

const burgerButton = () => {
return (
    <>
        <div className={Styles.burgerButtonContainer}>
            <img className={Styles.burgerButtonImage} src='./Images/burger.png'/>
        </div>
    </>
);};

export default burgerButton;