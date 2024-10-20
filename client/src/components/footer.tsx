import React from 'react';

import { cn } from '@/lib/utils';
import { ExternalLink } from '@/components/external-link';

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-zinc-500',
        className
      )}
      {...props}
    >
      Open source AI chatbot built with{' '}
      <ExternalLink href='https://www.llama.com/'>Meta Llama 3-8B</ExternalLink>
      , <ExternalLink href='https://react.dev/'>React.js</ExternalLink>.
    </p>
  );
}
