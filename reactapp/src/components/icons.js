import React from 'react';
import linkedIn from '../img/linkedInLogo.png';
import github from '../img/githubIcon.png';
import yahoo from '../img/yahooIcon.png';

function SocialMediaIcons(){
    return(
        <div ClassName="bg">
            <div className="noBullet bg">
            <a href='https://www.linkedin.com/in/joseph-basquez-a1ab6a1b5/'><img src={linkedIn} className="logo" alt="icon for linked in"/></a>
            <a href='https://github.com/jbasquez'><img src={github} className="logo" alt="icon for linked in"/></a>
            <a href="mailto:jybasquez@yahoo.com"><img src={yahoo} className="logo" alt="icon for linked in"/></a>
            </div>
        </div>
    )
}
export default SocialMediaIcons