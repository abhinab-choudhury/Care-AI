'use client';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          'transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-pink-50 text-slate-950 dark:bg-zinc-900',
          className
        )}
        {...props}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <div
            className={cn(
              `pointer-events-none absolute -inset-[10px] opacity-60 blur-[10px] invert-0 filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--pink-400)_10%,var(--purple-400)_15%,var(--pink-300)_20%,var(--purple-300)_25%,var(--pink-500)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--pink-100)_0%,var(--pink-50)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--pink-50)_16%)] [background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] after:absolute after:inset-0 after:animate-aurora after:mix-blend-soft-light after:content-[""] after:[background-attachment:fixed] after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
