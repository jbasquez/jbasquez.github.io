import Footer from '../components/footer';
import React from 'react';
import SocialMediaIcons from '../components/icons';
import"../scss/style.css";
function ContactCard(){
    return(
        <div className="sizing">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 textColor mid">
                <h2>Contact Me Now!</h2>
                <SocialMediaIcons />
                <div className="mar wid">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
export default ContactCard;