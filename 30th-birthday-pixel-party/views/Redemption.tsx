
import React, { useState } from 'react';
import PixelButton from '../components/PixelButton';

const RESULTS = [
  "獲得：誇2位壽星一句＋壽星喝1杯",
  "獲得：跟2位壽星一起shot掉",
  "獲得：2位壽星誇你一句＋跟壽星喝1杯",
  "獲得：跟2位壽星合照鬼臉1張（不夠鬼的喝1杯）",
  "獲得：限量神秘小禮（送完改成跟壽星喝1杯）",
  "獲得：看2位壽星喝交杯酒",
  "獲得：跟2位壽星合照裝可愛1張（不可愛的喝1杯）",
  "獲得：跟2位壽星合照裝B照1張（不夠B的喝1杯）",
  "獲得：大家舉杯喝酒",
  "獲得：2位壽星自誇一句(不重複)＋全體喝1杯",
];

interface RedemptionProps {
  onBack: () => void;
}

const Redemption: React.FC<RedemptionProps> = ({ onBack }) => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleConfirm = () => {
    if (code.length !== 3) {
      alert('請輸入三碼序號！');
      return;
    }

    setIsSpinning(true);
    // EDM style dramatic pause
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * RESULTS.length);
      setResult(RESULTS[randomIndex]);
      setIsSpinning(false);
    }, 1200);
  };

  const handleReset = () => {
    setResult(null);
    setCode('');
  };

  if (result) {
    return (
      <div className="flex flex-col items-center gap-8 animate-in zoom-in duration-300">
        <div className="bg-black/60 border-4 border-yellow-400 p-8 w-full text-center pixel-shadow-yellow">
          <div className="pixel-font text-yellow-400 text-xs mb-4">JACKPOT!</div>
          <h2 className="pixel-chinese text-2xl md:text-3xl font-bold mb-6 text-white leading-relaxed">
            {result}
          </h2>
          <div className="h-px bg-yellow-400/30 mb-6"></div>
          <p className="pixel-chinese text-yellow-200 text-sm font-bold bg-yellow-900/40 py-2 px-4 inline-block">
            請即刻向壽星兌換，逾時不候。
          </p>
        </div>

        <PixelButton variant="outline" size="full" onClick={onBack}>
          <span className="pixel-chinese">回首頁</span>
        </PixelButton>
        <button onClick={handleReset} className="text-slate-500 pixel-chinese text-sm hover:text-slate-300 underline">
          再玩一次
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 animate-in slide-in-from-bottom-10 duration-500">
      <div className="text-center mb-4">
        <h2 className="pixel-chinese text-2xl text-blue-400 mb-2">序號兌換</h2>
        <p className="pixel-chinese text-slate-400 text-sm">請輸入你的三位數幸運代碼</p>
      </div>

      <div className="w-full flex flex-col gap-6">
        <input 
          type="text" 
          maxLength={3}
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ''))}
          placeholder="000"
          className="w-full bg-black/40 border-4 border-blue-500 py-6 text-center text-5xl pixel-font text-blue-400 focus:outline-none focus:border-blue-300 transition-colors placeholder:text-blue-900"
          disabled={isSpinning}
        />

        <PixelButton 
          variant="yellow" 
          size="full" 
          onClick={handleConfirm}
          className={isSpinning ? 'opacity-50 cursor-not-allowed' : ''}
        >
          <span className="pixel-chinese">{isSpinning ? '正在隨機抽取...' : '確認'}</span>
        </PixelButton>

        <PixelButton variant="outline" size="full" onClick={onBack}>
          <span className="pixel-chinese">回首頁</span>
        </PixelButton>
      </div>
    </div>
  );
};

export default Redemption;
