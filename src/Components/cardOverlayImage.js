import React from 'react';
import Styles from './cardOverlayImage.module.css';

const cardOverlayImage = ({title,Link,imageLink}) => 
{
    const checkTitle = title == null ? "Need Title" : title;
    const checkImage = imageLink == null ? "./Images/cardTest.png" : imageLink;

return (
    <>
        <div className={Styles.cardOverlayImageContainer}>
            <img src={checkImage} alt="" className={Styles.cardOverlayImage}/>
            
            <div className={Styles.cardOverlayImageOverlay}>
                <h2>{checkTitle}</h2>
            </div>
        </div>
    </>
);};

export default cardOverlayImage;