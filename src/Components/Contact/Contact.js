import React from 'react';
import './Contact.css'
import ContactBanner from './ContactBanner/ContactBanner';
import Partner from '../Home/Partner/Partner'
import WhoWe from '../Home/WhoWe/WhoWe'
import TeamMember from '../Home/TeamMember/TeamMember'
import Question from '../Home/Question/Question'

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <Partner></Partner>
            <WhoWe></WhoWe>
            <TeamMember></TeamMember>
            <Question></Question>

        </div>
    );
};

export default Contact;