import React from 'react';

interface StepProps {
  stepNumber: string;
  stepTitle: string;
  description: {
    title: string;
    text: string;
  };
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

const Step: React.FC<StepProps> = ({
  stepNumber,
  stepTitle,
  description,
  imgSrc,
  imgAlt,
  reverse = false,
}) => {
  return (
    <div className={`flex flex-row ${reverse ? 'flex-row-reverse' : ''}`}>
      <div
        className={`hidden flex-col items-center md:flex ${reverse ? 'ml-4' : 'mr-4'}`}
      >
        <div className='flex w-32 flex-col items-center justify-center rounded border border-gray-300 py-5 uppercase'>
          <div className='text-3xl font-black text-gray-500'>
            Step {stepNumber}
          </div>
          <div className='text-sm text-gray-500'>{stepTitle}</div>
        </div>
        <div
          className={`h-full border-${reverse ? 'r' : 'l'}-4 border-transparent`}
        >
          <div
            className={`h-full border-${reverse ? 'l' : 'r'}-4 border-dashed border-gray-300`}
          ></div>
        </div>
      </div>
      <div className='flex-auto rounded border border-gray-300'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='flex-auto'>
            <div className='pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden'>
              <span className='font-black'>Step {stepNumber}</span> -{' '}
              {stepTitle}
            </div>
            <div className='p-3 text-3xl text-gray-800'>
              {description.title}
            </div>
            <div className='px-3 pb-6'>{description.text}</div>
          </div>
          <div className='w-full p-5 md:w-[680px]'>
            <img src={imgSrc} alt={imgAlt} className='object-scale-down' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
