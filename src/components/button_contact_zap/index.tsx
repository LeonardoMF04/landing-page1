import React from 'react';
import { FaPhone, FaExternalLinkAlt } from 'react-icons/fa';

interface ButtonContactZapProps {
    message: string;
}

const ButtonContactZap: React.FC<ButtonContactZapProps> = ({message }) => {
    const whatsappLink = `https://wa.me/5517981410234?text=${encodeURIComponent(message)}`;

    return (
        <li className="flex items-center justify-center md:justify-start">
            <FaPhone className="mr-2 h-4 w-4" />
            <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
            >
                {"+55 (17) 98141-0234"}
                <FaExternalLinkAlt className="inline-block ml-1 h-3 w-3" />
            </a>
        </li>
    );
};

export default ButtonContactZap;