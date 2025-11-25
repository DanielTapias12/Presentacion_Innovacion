import React from 'react';
import { CanvasItem } from '../types';
import { CostChart } from './CostChart';
import { supabaseBudgetData } from '../data';

interface SlideProps {
  data: CanvasItem;
  direction: 'left' | 'right';
  index: number;
}

export const Slide: React.FC<SlideProps> = ({ data, direction, index }) => {
  const Icon = data.icon;
  const isCostSlide = data.id === 'costs';

  const animationClass = direction === 'right' ? 'animate-slide-right' : 'animate-slide-left';

  return (
    <div key={data.id} className={`absolute inset-0 w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-6 lg:gap-16 items-center ${animationClass} overflow-y-auto overflow-x-hidden`}>
      <div className="flex-1 flex flex-col justify-start lg:justify-center space-y-4 md:space-y-6 lg:pr-8 w-full mt-4 lg:mt-0">
        <div className="inline-flex items-center gap-3 self-start mb-1 md:mb-2">
          <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 text-white font-bold text-xs md:text-sm shadow-lg shrink-0">
            {index}
          </span>
          <span className="uppercase tracking-widest text-slate-400 text-[10px] md:text-xs font-bold">
            Modelo Canvas
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
          {data.title}
        </h2>
        <div className={`h-1.5 md:h-2 w-16 md:w-24 rounded-full ${data.color.replace('bg-', 'bg-').replace('-50', '-500')}`}></div>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed">
          {data.summary}
        </p>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white shadow-sm mt-2 md:mt-4">
          <ul className="space-y-3 md:space-y-4">
            {data.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={`mt-1.5 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0 ${data.color.replace('bg-', 'bg-').replace('-50', '-500')}`} />
                <span className="text-slate-700 text-base md:text-lg leading-snug">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 w-full flex items-center justify-center relative mb-8 lg:mb-0 shrink-0">
        <div className={`absolute inset-0 opacity-20 blur-3xl rounded-full ${data.color.replace('bg-', 'bg-').replace('-50', '-400')}`} />
        <div className="relative z-10 w-full max-w-[280px] md:max-w-md">
          {isCostSlide ? (
            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-slate-100">
              <h3 className="text-center font-bold text-slate-500 mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
                Datos de Presupuesto (Supabase)
              </h3>
              <div className="h-[300px] md:h-[400px]">
                <CostChart data={supabaseBudgetData} />
              </div>
            </div>
          ) : (
            <div className="aspect-square rounded-2xl md:rounded-3xl bg-white shadow-2xl flex items-center justify-center border border-slate-100 relative overflow-hidden group">
               <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 rounded-bl-full opacity-10 ${data.color.replace('bg-', 'bg-').replace('-50', '-600')}`} />
               <div className={`absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 rounded-tr-full opacity-10 ${data.color.replace('bg-', 'bg-').replace('-50', '-600')}`} />
               <Icon 
                className={`w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-110 ${data.color.replace('bg-', 'text-').replace('-50', '-600')}`} 
                strokeWidth={1}
               />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};