
import React from 'react';

interface PixelButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'yellow' | 'outline';
  size?: 'md' | 'lg' | 'full';
  className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'blue', 
  size = 'md',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-500 border-blue-800 text-white pixel-shadow-blue';
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-500 border-purple-800 text-white pixel-shadow-purple';
      case 'yellow':
        return 'bg-yellow-500 hover:bg-yellow-400 border-yellow-700 text-black pixel-shadow-yellow';
      case 'outline':
        return 'bg-transparent border-slate-600 hover:bg-slate-800 text-slate-300';
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'lg':
        return 'py-6 px-8 text-xl';
      case 'full':
        return 'w-full py-4 px-6 text-lg';
      default:
        return 'py-3 px-6 text-base';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${getVariantStyles()} 
        ${getSizeStyles()} 
        ${className}
        font-bold transition-transform active:scale-95 border-4 border-b-8 border-r-8 
        flex items-center justify-center gap-2
      `}
    >
      {children}
    </button>
  );
};

export default PixelButton;
