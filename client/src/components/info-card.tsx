import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CardPropTypes {
  title: string;
  subtitle: string;
  info: string;
  link: string;
}

export default function Card({ title, subtitle, info, link }: CardPropTypes) {
  return (
    <div className='flex flex-wrap py-8 md:flex-nowrap'>
      <div className='mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64'>
        <span className='title-font font-semibold text-gray-700'>{title}</span>
      </div>
      <div className='md:flex-grow'>
        <h2 className='title-font mb-2 text-2xl font-medium text-gray-900'>
          {subtitle}
        </h2>
        <p className='leading-relaxed'>{info}</p>
        <Link to={link} className='mt-4 inline-flex items-center text-pink-500'>
          Learn More
          <ArrowRight className='mx-1 w-4' />
        </Link>
      </div>
    </div>
  );
}
