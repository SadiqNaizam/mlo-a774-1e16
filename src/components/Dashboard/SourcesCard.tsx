import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip as RechartsTooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F472B6' },   // More vibrant red/pink
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' },  // yellow-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#36CFC9' }, // accent-secondary
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#818CF8' }, // More vibrant green/blue
];

const SourcesCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '0.5rem' }}
                  labelStyle={{ color: '#202124' }}
                  itemStyle={{ color: '#5F6368' }}
                />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {data.map((source) => (
              <div key={source.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 text-sm">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: source.color }}></span>
                  <span className="text-foreground font-medium">{source.name}</span>
                </div>
                <span className="text-muted-foreground justify-self-end">$ {source.value}</span>
                <span className="text-muted-foreground justify-self-end font-semibold">{source.percentage}%</span>
              </div>
            ))}
             <div className="flex justify-end pt-2">
                 <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="secondary" className="cursor-default">from leads total</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Percentage based on total leads revenue.</p>
                    </TooltipContent>
                  </Tooltip>
                 </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesCard;
