'use client';

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export const radialDescription = 'Menstrual cycle progress';

const cycleData = [
  { phase: 'Menstrual Phase', days: 5, fill: 'var(--color-menstrual)' },
  { phase: 'Follicular Phase', days: 8, fill: 'var(--color-follicular)' },
  { phase: 'Ovulation Phase', days: 2, fill: 'var(--color-ovulation)' },
  { phase: 'Luteal Phase', days: 13, fill: 'var(--color-luteal)' },
];

const radialConfig = {
  days: {
    label: 'Days',
  },
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

export function RadialChart() {
  const totalDays = 31; // Total cycle days
  const currentDay = 28; // Assume it's Day 10 of the cycle

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Cycle Progress - Radial Chart</CardTitle>
        <CardDescription>Menstrual Cycle Phases</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={radialConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <RadialBarChart
            data={cycleData}
            startAngle={0}
            endAngle={(currentDay / totalDays) * 360} // Progress angle based on current day
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid gridType='circle' radialLines={false} stroke='none' />
            <RadialBar dataKey='days' background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    const currentPhase =
                      currentDay <= 5
                        ? 'Menstrual Phase'
                        : currentDay <= 13
                          ? 'Follicular Phase'
                          : currentDay <= 15
                            ? 'Ovulation Phase'
                            : 'Luteal Phase';

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
                          className='fill-foreground text-4xl font-bold'
                        >
                          {currentDay} / {totalDays}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground text-sm'
                        >
                          {currentPhase}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          {currentDay} days completed in the current cycle
        </div>
        <div className='text-center leading-none text-muted-foreground'>
          Showing cycle progress for the ongoing menstrual cycle
        </div>
      </CardFooter>
    </Card>
  );
}
