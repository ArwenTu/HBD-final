
import React from 'react';
import PixelButton from '../components/PixelButton';
import { View } from '../App';

interface DrunkTruthsProps {
  onNavigate: (view: View) => void;
  onBack: () => void;
}

const DrunkTruths: React.FC<DrunkTruthsProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="flex flex-col items-center gap-8 animate-in slide-in-from-right-10 duration-500">
      <div className="text-center mb-4">
        <h2 className="pixel-chinese text-2xl md:text-3xl text-purple-400 mb-2">想跟誰吐露酒後心聲</h2>
        <p className="pixel-chinese text-slate-400 text-sm">點擊下方按鈕留言給壽星</p>
      </div>

      <div className="w-full flex flex-col gap-6">
        <PixelButton 
          variant="purple" 
          size="full" 
          onClick={() => onNavigate(View.PADLET_HOOVER)}
          className="h-24"
        >
          <span className="pixel-chinese text-xl md:text-2xl">Hoover｜黃三十</span>
        </PixelButton>

        <PixelButton 
          variant="purple" 
          size="full" 
          onClick={() => onNavigate(View.PADLET_LARRY)}
          className="h-24"
        >
          <span className="pixel-chinese text-xl md:text-2xl">Larry｜賴三十</span>
        </PixelButton>

        <div className="mt-4">
          <PixelButton variant="outline" size="full" onClick={onBack}>
            <span className="pixel-chinese">回首頁</span>
          </PixelButton>
        </div>
      </div>
    </div>
  );
};

export default DrunkTruths;
