import React from 'react';
import Styles from './home.module.css';

import OverlayCard from '../Components/cardOverlayImage';

const Home = () => {
return (
    <>
        <div className={Styles.homeContainer}>
            <div className={Styles.homeOverlayCardContainer}>
                <div className={Styles.homeOverlayCard}><OverlayCard title={"Card 1"}/></div>
                <div className={Styles.homeOverlayCard}><OverlayCard title={"Card 2"}/></div>
                <div className={Styles.homeOverlayCard}><OverlayCard title={"Card 3"}/></div>
            </div>
            <div className={Styles.homeDownloadLink}>
                {/*https://websiteAddress.com/Images/cardTest.png*/}
            <a href='http://localhost:3000/Images/cardTest.png' download={'cardTest.png'} target='_blank'>png download</a>
            </div>
        </div>
    </>
);};

export default Home;