import Footer from '../components/footer';
import React from 'react';
import SocialMediaIcons from '../components/icons';
import"../scss/style.css";
function ContactCard(){
    return(
        <div className="sizing">
            <div className="col-lg-12 col-md-4 col-sm-12 col-xs-12 textColor">
                <h2>Contact Me Now!</h2>
                <SocialMediaIcons />
                <Footer />
            </div>
        </div>
    );
}
export default ContactCard;