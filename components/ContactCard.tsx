import React from 'react';
import { ID_ICON, MAIL_ICON, PRO_BADGE_ICON } from '../constants';

interface ContactCardProps {
    contact: {
        name: string;
        phone: string;
        email: string;
        profileImage: string;
        companyLogo: string;
    };
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
    return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm w-full">
            <div className="flex items-start space-x-4">
                <img src={contact.profileImage} alt={contact.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-1">
                    <div className="flex items-center space-x-2">
                         <h3 className="font-bold text-gray-900">{contact.name}</h3>
                         <span className="bg-blue-500 rounded-full p-0.5">{PRO_BADGE_ICON}</span>
                         <span className="text-blue-600">{ID_ICON}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{contact.phone}</p>
                    <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-600">{contact.email}</span>
                        <span className="ml-2 text-gray-400">{MAIL_ICON}</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
                 <img src={contact.companyLogo} alt="Company Logo" className="h-8"/>
            </div>
             <div className="mt-4 text-sm font-medium text-blue-600 space-x-4">
                <button className="hover:underline">Chat</button>
                <button className="hover:underline">View Profile</button>
            </div>
        </div>
    );
};

export default ContactCard;