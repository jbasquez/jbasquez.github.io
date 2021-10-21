import Footer from '../components/footer';
import React from 'react';
import SocialMediaIcons from '../components/icons';
import"../scss/style.css";
function ContactCard(){
    return(
        <div className="sizing">
            <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12 textColor mid">
                    <h2>Contact Me Now!</h2>
                    <SocialMediaIcons />
                    <div className="mar wid">
                        <Footer />
                    </div>
                </div>
            </div>
            <div className="row">
            <h2 className="textColor">Interest</h2>
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 textColor mid">
                    <div className="bg">
                            <h3>Crypto</h3>
                            <p>Bitcoin</p>
                            <p>Ethereum</p>
                            <p>Shiba Inu</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12 textColor mid">
                    <div className="bg">
                        <h3>Crypto</h3>
                        <p>Bitcoin</p>
                        <p>Ethereum</p>
                        <p>Shiba Inu</p>      
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactCard;