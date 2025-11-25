import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CanvasItem } from '../types';

interface CanvasCardProps {
  item: CanvasItem;
  onClick: (item: CanvasItem) => void;
  className?: string;
}

export const CanvasCard: React.FC<CanvasCardProps> = ({ item, onClick, className }) => {
  const Icon = item.icon;

  return (
    <div 
      onClick={() => onClick(item)}
      className={`
        relative group p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md 
        transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full
        ${item.color} ${className}
      `}
      style={{ gridArea: item.gridArea }}
    >
      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white rounded-full p-1 shadow-sm">
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white bg-opacity-60 rounded-lg shadow-sm">
          <Icon className="w-6 h-6 text-slate-700" />
        </div>
        <h3 className="font-bold text-slate-800 text-lg leading-tight">{item.title}</h3>
      </div>
      
      <p className="text-slate-600 font-medium mb-4 flex-grow">
        {item.summary}
      </p>

      <div className="mt-auto">
        <div className="h-1 w-12 bg-slate-300 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-500"></div>
      </div>
    </div>
  );
};