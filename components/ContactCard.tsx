import { FaFacebook, FaInstagram } from 'react-icons/fa';
import React from "react";

interface ContactCardProps {
  federation?: string;
  address?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  facebookTag?: string;
  instagramTag?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ federation, address, email, facebook, instagram, facebookTag, instagramTag }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{federation}</h2>
        <p className="text-gray-600 text-lg mb-4">{address}</p>
        <a href={`mailto:${email}`} className="text-lg text-orange-500 hover:text-orange-600 transition-colors duration-300">{email}</a>
        <div className="mt-4 flex flex-col space-y-2">
          {facebook && facebookTag && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <FaFacebook size={20} />
              <span className="ml-2">{facebookTag}</span>
            </a>
          )}
          {instagram && instagramTag && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={20} />
              <span className="ml-2">{instagramTag}</span>
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default ContactCard;

