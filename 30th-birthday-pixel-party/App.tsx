
import React, { useState } from 'react';
import Home from './views/Home';
import Redemption from './views/Redemption';
import DrunkTruths from './views/DrunkTruths';
import PadletView from './views/PadletView';

export enum View {
  HOME = 'HOME',
  REDEMPTION = 'REDEMPTION',
  DRUNK_TRUTHS = 'DRUNK_TRUTHS',
  PADLET_HOOVER = 'PADLET_HOOVER',
  PADLET_LARRY = 'PADLET_LARRY'
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const navigateTo = (view: View) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home onNavigate={navigateTo} />;
      case View.REDEMPTION:
        return <Redemption onBack={() => navigateTo(View.HOME)} />;
      case View.DRUNK_TRUTHS:
        return <DrunkTruths onNavigate={navigateTo} onBack={() => navigateTo(View.HOME)} />;
      case View.PADLET_HOOVER:
        return (
          <PadletView 
            title="Hoover｜黃三十" 
            url="https://padlet.com/annietu0928/hoover-9pd12xbuv095aygh" 
            onBack={() => navigateTo(View.DRUNK_TRUTHS)} 
          />
        );
      case View.PADLET_LARRY:
        return (
          <PadletView 
            title="Larry｜賴三十" 
            url="https://padlet.com/annietu0928/larry-qvtg3d9xrzwuhhsx" 
            onBack={() => navigateTo(View.DRUNK_TRUTHS)} 
          />
        );
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 blur-[100px] animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/30 blur-[120px]"></div>
      </div>

      {/* Decorative Pixel Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] text-4xl pixel-deco">🎂</div>
        <div className="absolute top-[15%] right-[8%] text-4xl pixel-deco" style={{animationDelay: '1s'}}>🥳</div>
        <div className="absolute bottom-[20%] left-[10%] text-5xl pixel-deco" style={{animationDelay: '2s'}}>🎉</div>
        <div className="absolute bottom-[15%] right-[12%] text-4xl pixel-deco" style={{animationDelay: '0.5s'}}>🍦</div>
        <div className="absolute top-[40%] left-[2%] text-2xl pixel-deco opacity-30" style={{animationDelay: '1.5s'}}>🎈</div>
        <div className="absolute top-[60%] right-[3%] text-2xl pixel-deco opacity-30" style={{animationDelay: '2.5s'}}>🎁</div>
        
        {/* Pixel Text "Happy Birthday" floating in background */}
        <div className="absolute top-[5%] right-[20%] pixel-font text-[10px] text-yellow-400 opacity-20 pixel-deco">HAPPY BIRTHDAY</div>
        <div className="absolute bottom-[8%] left-[25%] pixel-font text-[10px] text-blue-400 opacity-20 pixel-deco" style={{animationDelay: '1.2s'}}>HAPPY BIRTHDAY</div>
      </div>

      {/* Main Content Container */}
      <main className="z-10 w-full max-w-2xl">
        {renderView()}
      </main>

      {/* Footer Info */}
      <footer className="mt-8 text-slate-500 pixel-font text-[10px] text-center opacity-50">
        HAPPY 30TH BIRTHDAY
      </footer>
    </div>
  );
};

export default App;
