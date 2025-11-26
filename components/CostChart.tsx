import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, Label } from 'recharts';
import { BudgetEntry } from '../types';
import { Database } from 'lucide-react';

interface CostChartProps {
  data: BudgetEntry[]; // Using the DB structure
}

const COLORS = ['#2563EB', '#0EA5E9', '#64748B', '#F59E0B', '#10B981'];

export const CostChart: React.FC<CostChartProps> = ({ data }) => {
  
  // Calculate Total Budget dynamically from the "database"
  const totalBudget = data.reduce((acc, item) => acc + item.amount, 0);

  // Format currency
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP', 
      maximumSignificantDigits: 3,
      notation: "compact",
      compactDisplay: "short"
    }).format(value);

  const formatFullCurrency = (value: number) => 
    new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP', 
      minimumFractionDigits: 0
    }).format(value);

  // Transform DB data for Recharts
  const chartData = data.map(item => ({
    name: item.category,
    value: item.amount
  }));

  return (
    <div className="h-full w-full flex flex-col items-center">
      {/* Database Connection Badge */}
      <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 mb-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <Database className="w-3 h-3" />
        <span>Connected: public.budget_table</span>
      </div>

      <div className="h-[250px] md:h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={4}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="white" strokeWidth={2} />
              ))}
              <Label 
                value={formatCurrency(totalBudget)} 
                position="center" 
                className="fill-slate-800 font-extrabold text-2xl md:text-3xl"
              />
            </Pie>
            <Tooltip 
              formatter={(value: number) => [formatFullCurrency(value), 'Costo']}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-center bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl border border-blue-100 w-full shadow-sm">
        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Presupuesto Total (MVP)</p>
        <p className="text-2xl font-black text-blue-600">{formatFullCurrency(totalBudget)}</p>
      </div>
    </div>
  );
};