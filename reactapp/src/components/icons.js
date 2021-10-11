import React from 'react';
import linkedIn from '../img/linkedInLogo.png';
import github from '../img/githubIcon.png';
import yahoo from '../img/yahooIcon.png';

function SocialMediaIcons(){
    return(
        <div ClassName="bg">
            <div className="noBullet bg">
            <a href='https://www.linkedin.com/in/joseph-basquez-a1ab6a1b5/' target="_blank" rel="noopener noreferrer"><img src={linkedIn} className="logo" alt="icon for linked in"/></a>
            <a href='https://github.com/jbasquez' target="_blank" rel="noopener noreferrer"><img src={github} className="logo" alt="icon for linked in"/></a>
            <a href="mailto:jybasquez@yahoo.com" target="_blank" rel="noopener noreferrer"><img src={yahoo} className="logo" alt="icon for linked in"/></a>
            </div>
        </div>
    )
}
export default SocialMediaIcons