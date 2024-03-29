import React from 'react';
import linkedIn from '../img/linkedinIcon.png';
import github from '../img/githubIcon.png';
import yahoo from '../img/yahooIcon.png';

function SocialMediaIcons(){
    return(
        <div className="bg">
            <div className="noBullet bg">
            <a href='https://www.linkedin.com/in/joseph-basquez-a1ab6a1b5/' target="_blank" rel="noopener noreferrer"><img src={linkedIn} className="logo" alt="icon for linked in"/></a>
            <a href='https://github.com/jbasquez' target="_blank" rel="noopener noreferrer"><img src={github} className="logo" alt="icon for github"/></a>
            <a href="mailto:jybasquez@yahoo.com" target="_blank" rel="noopener noreferrer"><img src={yahoo} className="logo" alt="icon for yahoo"/></a>
            </div>
        </div>
    )
}
export default SocialMediaIcons