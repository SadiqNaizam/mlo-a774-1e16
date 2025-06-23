import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const trackingData = [
  { name: 'March', closedWon: 65, closedLost: 60 },
  { name: 'April', closedWon: 50, closedLost: 25 },
  { name: 'May', closedWon: 68, closedLost: 45 },
  { name: 'June', closedWon: 85, closedLost: 5 },
  { name: 'July', closedWon: 70, closedLost: 42 },
  { name: 'August', closedWon: 30, closedLost: 95 },
];

const TrackingCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leads' | 'converted' | 'size'>('converted');

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle>Leads tracking</CardTitle>
                <div className="flex items-baseline gap-6 mt-2">
                    <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold">680</p>
                        <p className="text-muted-foreground">total closed</p>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <p className="text-4xl font-bold">70</p>
                        <p className="text-muted-foreground">total lost</p>
                    </div>
                </div>
            </div>
             <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
                <Button size="sm" variant={activeTab === 'leads' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('leads')}>Leads came</Button>
                <Button size="sm" variant={activeTab === 'converted' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('converted')}>Leads Converted</Button>
                <Button size="sm" variant={activeTab === 'size' ? 'secondary' : 'ghost'} onClick={() => setActiveTab('size')}>Total deals size</Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={trackingData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} dy={10} />
              <YAxis axisLine={false} tickLine={false} dx={-10} />
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '0.5rem' }} />
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#36CFC9" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#36CFC9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="closedWon" stroke="#36CFC9" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, stroke: '#36CFC9', fill: 'white', strokeWidth: 2 }} activeDot={{ r: 6, stroke: '#36CFC9', fill: '#36CFC9' }} name="Closed Won" />
              <Area type="monotone" dataKey="closedLost" stroke="hsl(var(--destructive))" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, stroke: 'hsl(var(--destructive))', fill: 'white', strokeWidth: 2 }} activeDot={{ r: 6, stroke: 'hsl(var(--destructive))', fill: 'hsl(var(--destructive))' }} name="Closed Lost" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-start items-center gap-6 mt-4 pl-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#36CFC9]"></span>
            <span className="text-muted-foreground">Closed won</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-destructive"></span>
            <span className="text-muted-foreground">Closed lost</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackingCard;
