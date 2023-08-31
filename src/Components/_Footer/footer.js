import React from 'react';
import Styles from './footer.module.css';
import { Link } from "react-router-dom";

const footer = () => {
return (
    <>
        <div className={Styles.footerContainer}>
            <Link to={'/'} className={Styles.footerBtnLink}>
                <button className={Styles.footerButton}><img className={Styles.footerLogo} src="../Images/MUImage.png" alt=''/></button>
            </Link>

            <div className={Styles.footerTextContainer}>
                <p className={Styles.footerText}>
                    Feel free to email me at <Link to={'mailto:ben@aggressorlabs.com'} className={Styles.footerLink}>ben@aggressorlabs.com</Link>
                </p>

                <p className={Styles.footerCopyrightText}>
                Copyright © Year Benjamin Navarro
                </p>
            </div>

            <div className={Styles.footerSpacer}/>
        </div>
    </>
);};

export default footer;