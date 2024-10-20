'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { phase: 'Menstrual', duration: 5, fill: 'var(--color-menstrual)' },
  { phase: 'Follicular', duration: 9, fill: 'var(--color-follicular)' },
  { phase: 'Ovulation', duration: 2, fill: 'var(--color-ovulation)' },
  { phase: 'Luteal', duration: 12, fill: 'var(--color-luteal)' },
];

const chartConfig = {
  menstrual: {
    label: 'Menstrual Phase',
    color: 'hsl(var(--chart-1))',
  },
  follicular: {
    label: 'Follicular Phase',
    color: 'hsl(var(--chart-2))',
  },
  ovulation: {
    label: 'Ovulation Phase',
    color: 'hsl(var(--chart-3))',
  },
  luteal: {
    label: 'Luteal Phase',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig;

export function PieChat() {
  const totalDays = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.duration, 0);
  }, []);

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Menstrual Cycle Phases</CardTitle>
        <CardDescription>Typical 28-Day Cycle Breakdown</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='duration'
              nameKey='phase'
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {totalDays} Days
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Cycle Length
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Average cycle length: 28 days{' '}
          <span className='text-muted-foreground'>(Typical)</span>
        </div>
        <div className='text-center leading-none text-muted-foreground'>
          Breakdown of different phases of a 28-day cycle
        </div>
      </CardFooter>
    </Card>
  );
}
