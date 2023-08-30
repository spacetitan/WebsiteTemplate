import React from 'react';
import Styles from './home.module.css';

import OverlayCard from '../Components/cardOverlayImage';

const Home = () => {
return (
    <>
        <div className={Styles.homeContainer}>
            <div className={Styles.homeOverlayCard}>
                <OverlayCard title={"Title"}/>
            </div>
        </div>
    </>
);};

export default Home;