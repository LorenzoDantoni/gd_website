import { FaFacebook, FaInstagram } from 'react-icons/fa';
import React from "react";

interface RegionalContactProps {
  federation?: string;
  address?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  facebookTag?: string;
  instagramTag?: string;
}

const RegionalContact: React.FC<RegionalContactProps> = ({ federation, address, email, facebook, instagram, facebookTag, instagramTag}) => {
  return (
    <div className="bg-white shadow-md overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105">
      <div className="p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{federation}</h2>
        <p className="text-xl text-gray-700 mb-2">{address}</p>
        <a href={`mailto:${email}`} className="text-orange-500 hover:text-orange-600 transition-colors duration-300 text-xl font-medium">{email}</a>
        <div className="mt-6 flex justify-center space-x-6">
          {facebook && facebookTag && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <FaFacebook size={24} />
              <span className="ml-2">{facebookTag}</span>
            </a>
          )}
          {instagram && instagramTag && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={24} />
              <span className="ml-2">{instagramTag}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegionalContact;

