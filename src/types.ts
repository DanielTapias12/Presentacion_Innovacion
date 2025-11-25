import { LucideIcon } from 'lucide-react';

export interface CanvasItem {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
  color: string;
  gridArea: string;
}

export interface BudgetEntry {
  id: number;
  category: string;
  amount: number;
  description: string;
}

export type CostData = {
  name: string;
  value: number;
};