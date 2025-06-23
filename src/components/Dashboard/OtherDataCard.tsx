import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

const OtherDataCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">900</p>
            <p className="text-muted-foreground mt-1 text-sm">total leads count</p>
          </div>
          <div>
            <p className="text-4xl font-bold">12</p>
            <p className="text-muted-foreground mt-1 text-sm">days in average to convert lead</p>
          </div>
          <div>
            <p className="text-4xl font-bold">30</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <p className="text-muted-foreground text-sm">inactive leads</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Leads with no activity in the last 30 days.</p>
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

export default OtherDataCard;
