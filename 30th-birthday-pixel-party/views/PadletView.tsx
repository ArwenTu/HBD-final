
import React, { useState } from 'react';
import PixelButton from '../components/PixelButton';

interface PadletViewProps {
  title: string;
  url: string;
  onBack: () => void;
}

const PadletView: React.FC<PadletViewProps> = ({ title, url, onBack }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-[85vh] md:h-[80vh] w-full animate-in zoom-in duration-500">
      <div className="flex items-center justify-between mb-4 bg-slate-800/80 p-4 border-2 border-purple-500">
        <h2 className="font-bold text-purple-300 text-lg">{title}</h2>
        <button 
          onClick={onBack}
          className="text-slate-400 hover:text-white font-bold px-4 py-1 border border-slate-600 hover:border-white transition-colors text-sm"
        >
          返回
        </button>
      </div>

      <div className="flex-1 relative bg-slate-900 border-2 border-slate-700 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-20">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent animate-spin mb-4"></div>
            <p className="pixel-font text-[10px] text-purple-400 animate-pulse">LOADING PADLET...</p>
          </div>
        )}
        <iframe
          src={url}
          onLoad={() => setIsLoading(false)}
          className="w-full h-full border-0"
          allow="camera;microphone;geolocation"
        ></iframe>
      </div>
      
      <div className="mt-4">
         <PixelButton variant="outline" size="full" onClick={onBack}>
           返回選擇介面
         </PixelButton>
      </div>
    </div>
  );
};

export default PadletView;
