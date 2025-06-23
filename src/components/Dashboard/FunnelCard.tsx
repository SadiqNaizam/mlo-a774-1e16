import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


interface FunnelStage {
  id: number;
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { id: 1, name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { id: 2, name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { id: 3, name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-indigo-900' },
  { id: 4, name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { id: 5, name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const FunnelCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-5xl font-bold">600</p>
          <p className="text-muted-foreground">active leads</p>
        </div>

        <div className="w-full h-2 flex rounded-full overflow-hidden mb-6">
          {funnelData.map(stage => (
            <div
              key={stage.id}
              className={cn('h-full', stage.color)}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>

        <div className="space-y-4 text-sm">
          {funnelData.map((stage, index) => (
            <div key={stage.id} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
              <div className="flex items-center">
                <span className={cn('w-3 h-3 rounded-full mr-3', stage.color)}></span>
                <span>{stage.name}</span>
              </div>
              <span className="text-muted-foreground justify-self-end">{stage.count}</span>
              <span className="text-muted-foreground justify-self-end">$ {stage.value}</span>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <span className="text-muted-foreground justify-self-end cursor-default">{stage.duration}</span>
                  </TooltipTrigger>
                  {index === 1 && (
                     <TooltipContent className="bg-foreground text-background">
                        <p>average time on this stage</p>
                     </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCard;
