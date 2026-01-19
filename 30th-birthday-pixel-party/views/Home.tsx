
import React from 'react';
import PixelButton from '../components/PixelButton';
import { View } from '../App';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center gap-12 animate-in fade-in zoom-in duration-500">
      <div className="text-center">
        <h1 className="pixel-font text-4xl md:text-6xl text-yellow-400 mb-6 glow-text uppercase tracking-widest leading-tight">
          Hoover  Larry
        </h1>
        <p className="text-blue-300 font-bold tracking-[0.15em] text-3xl md:text-5xl blue-glow opacity-100">
          30th Birthday Party
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col gap-4">
          <PixelButton 
            variant="blue" 
            size="lg" 
            onClick={() => onNavigate(View.REDEMPTION)}
            className="h-40 md:h-52"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2 pixel-chinese">點此輸入序號</span>
              <span className="pixel-font text-[10px] opacity-70">REDEEM CODE</span>
            </div>
          </PixelButton>
        </div>

        <div className="flex flex-col gap-4">
          <PixelButton 
            variant="purple" 
            size="lg" 
            onClick={() => onNavigate(View.DRUNK_TRUTHS)}
            className="h-40 md:h-52"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-2 pixel-chinese">向壽星告解區</span>
              <span className="pixel-font text-[10px] opacity-70">DRUNK TRUTHS</span>
            </div>
          </PixelButton>
        </div>
      </div>
      
      <div className="mt-8 flex gap-2">
         {[...Array(3)].map((_, i) => (
           <div key={i} className="w-4 h-4 bg-yellow-400/20 border-2 border-yellow-400"></div>
         ))}
      </div>
    </div>
  );
};

export default Home;
