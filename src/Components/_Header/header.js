import React from 'react'
import Styles from "./header.module.css";
import { Link } from 'react-router-dom';

const header = () =>
{
    return(
        <>
            <div className={Styles.headerContainer}>
                <Link to={'/'} className={Styles.headerBtnLink}>
                    <button className={Styles.headerButton}><img className={Styles.headerLogo} src="../Images/MUImage.png" alt=''/></button>
                </Link>

                <div className={Styles.headerMenu}>
                    <Link to={'/'} className={Styles.headerLink}>Header Link 1</Link>
                    <Link to={'/'} className={Styles.headerLink}>Header Link 2</Link>
                    <Link to={'/'} className={Styles.headerLink}>Header Link 3</Link>
                </div>
            </div>
        </>
    );
};

export default header;