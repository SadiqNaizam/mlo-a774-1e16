import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Reason {
  percentage: number;
  text: string;
}

const reasonsData: Reason[] = [
  { percentage: 40, text: 'The proposal is unclear' },
  { percentage: 20, text: 'However venture pursuit' },
  { percentage: 10, text: 'Other' },
  { percentage: 30, text: 'The proposal is unclear' },
];

const ReasonsLostCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reasons of leads lost</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
          {reasonsData.map((reason, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{reason.percentage}%</p>
              <p className="text-muted-foreground mt-1">{reason.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReasonsLostCard;
