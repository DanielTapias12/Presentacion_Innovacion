import React from 'react';

interface LogoProps {
  iconSize?: string;
  textSize?: string;
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  iconSize = "w-12 h-12", 
  textSize = "text-2xl", 
  layout = "horizontal",
  className = ""
}) => {
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col justify-center' : 'flex-row'} items-center gap-4 ${className}`}>
      {/* Icon Container */}
      <div className={`${iconSize} relative flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-2xl overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Glow */}
          <circle cx="50" cy="50" r="40" fill="url(#logoGradient)" opacity="0.1" filter="url(#glow)" className="animate-pulse" />

          {/* Central Core (The Student) */}
          <circle cx="50" cy="50" r="14" fill="url(#logoGradient)" className="shadow-lg" />
          <circle cx="50" cy="50" r="14" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
          
          {/* Orbital Ring 1 (Institutional) */}
          <path
            d="M50 15 A35 35 0 0 1 85 50"
            stroke="url(#logoGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            className="animate-[spin_4s_linear_infinite]"
            style={{ transformOrigin: '50px 50px' }}
          />
          <circle cx="85" cy="50" r="3" fill="#2563EB" className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: '50px 50px' }}/>

          {/* Orbital Ring 2 (Family & Context) */}
          <path
            d="M50 85 A35 35 0 0 1 15 50"
            stroke="#64748B"
            strokeWidth="5"
            strokeLinecap="round"
            className="animate-[spin_5s_linear_infinite_reverse]"
            style={{ transformOrigin: '50px 50px' }}
          />
          <circle cx="15" cy="50" r="3" fill="#64748B" className="animate-[spin_5s_linear_infinite_reverse]" style={{ transformOrigin: '50px 50px' }}/>

          {/* Connectivity Lines (360 Concept) */}
          <g opacity="0.3">
            <line x1="50" y1="15" x2="50" y2="36" stroke="url(#logoGradient)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="85" y1="50" x2="64" y2="50" stroke="url(#logoGradient)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="50" y1="85" x2="50" y2="64" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="15" y1="50" x2="36" y2="50" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
          </g>

          {/* Puzzle Piece Cutout Hint (Inclusion) */}
          <path d="M50 44 L54 50 L50 56 L46 50 Z" fill="white" opacity="0.8" />

        </svg>
      </div>

      {/* Text Container */}
      <div className={`flex flex-col ${layout === 'vertical' ? 'items-center text-center' : 'items-start'}`}>
        <span className={`${textSize} font-black tracking-tighter text-slate-800 leading-none font-sans`}>
          PIAR<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">360</span>
        </span>
        <span className={`${layout === 'vertical' ? 'text-xs md:text-sm mt-2' : 'text-[0.55rem] md:text-[0.65rem]'} font-bold text-slate-400 tracking-[0.3em] uppercase`}>
          Inclusión Inteligente
        </span>
      </div>
    </div>
  );
};