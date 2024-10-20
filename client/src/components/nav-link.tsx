import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface LinksProp {
  title: string;
  link_to: string;
  icon: React.ReactNode;
}

export default function NavLinks({ title, link_to, icon }: LinksProp) {
  const pathname = useLocation().pathname;

  return (
    <Link
      to={link_to}
      className={cn(
        'focus:shadow-outline rounded-full border border-transparent p-1 tracking-widest focus:outline-none',
        pathname === link_to ? 'bg-black' : 'bg-white'
      )}
    >
      <title>{title}</title>
      {icon}
    </Link>
  );
}
