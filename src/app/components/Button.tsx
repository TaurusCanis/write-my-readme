// components/Button.tsx

import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
      bg-blue-500 
      text-white 
      font-bold 
      py-2 px-4 
      rounded 
      transition 
      duration-200 
      ease-in-out 
      hover:bg-blue-700 
      active:bg-blue-800 
      ${className}
    `}
    >
      {text}
    </button>
  );
};

export default Button;
