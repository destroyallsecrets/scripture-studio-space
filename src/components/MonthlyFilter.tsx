
import React from 'react';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface MonthData {
  id: string;
  name: string;
  year: number;
}

interface MonthlyFilterProps {
  availableMonths: MonthData[];
  selectedMonth: string | null;
  onSelectMonth: (monthId: string | null) => void;
}

const MonthlyFilter: React.FC<MonthlyFilterProps> = ({ 
  availableMonths, 
  selectedMonth, 
  onSelectMonth 
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <CalendarDays className="text-theme-gold" size={20} />
        <h3 className="text-theme-purple-light text-lg font-semibold">Filter by Month</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedMonth === null ? "default" : "outline"}
          onClick={() => onSelectMonth(null)}
          className={selectedMonth === null ? "bg-theme-purple hover:bg-theme-purple-light" : ""}
        >
          All Months
        </Button>
        
        {availableMonths.map((month) => (
          <Button
            key={month.id}
            variant={selectedMonth === month.id ? "default" : "outline"}
            onClick={() => onSelectMonth(month.id)}
            className={selectedMonth === month.id ? "bg-theme-purple hover:bg-theme-purple-light" : ""}
          >
            {month.name} {month.year}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MonthlyFilter;
