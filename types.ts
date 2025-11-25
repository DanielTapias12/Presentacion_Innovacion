import { LucideIcon } from 'lucide-react';

export interface CanvasItem {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
  color: string;
  gridArea: string; // CSS grid area name
}

// Represents a row in the Supabase 'budget' table
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