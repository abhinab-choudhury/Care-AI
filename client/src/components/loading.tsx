import { Loader, Loader2 } from 'lucide-react';
import React from 'react';

export const GeneratingAnswer: React.FC = () => {
  return (
    <div className='h-18 w-10'>
      <Loader2 className='flex-center mx-auto h-full animate-spin text-pink-500' />
    </div>
  );
};
