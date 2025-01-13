import React from 'react';
import Link from 'next/link';

interface NavigateButtonProps {
  url: string; // URL de destino
  label: string; // Texto do botão
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ url, label }) => {
  return (
    <Link href={url}>
      
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300"
        >
          {label}
        </button>
    </Link>
  );
};

export default NavigateButton;