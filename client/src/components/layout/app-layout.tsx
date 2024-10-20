import Home from '@/pages/home';
import {
  IconSettings,
  IconCirclesFilled,
  IconBrandZoom,
  IconHome,
  IconAi,
} from '@tabler/icons-react';
import Logo from '@/components/logo';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavLinks from '../nav-link';
import { FooterText } from '../footer';
import { cn } from '@/lib/utils';

interface LinkItem {
  title: string;
  icon: React.ReactNode;
  to: string;
}

export default function AppLayout() {
  const pathname = useLocation().pathname;

  const links: LinkItem[] = [
    {
      title: 'Home',
      icon: (
        <IconHome
          className={cn(
            'h-full w-full dark:text-neutral-300',
            pathname === '/home' ? 'text-white' : 'text-neutral-500'
          )}
        />
      ),
      to: '/home',
    },
    {
      title: 'AI Health Assistant',
      icon: (
        <IconAi
          className={cn(
            'h-full w-full text-neutral-500 dark:text-neutral-300',
            pathname === '/home/ai-health-assistant'
              ? 'text-white'
              : 'text-neutral-500'
          )}
        />
      ),
      to: '/home/ai-health-assistant',
    },
    {
      title: 'Video Consultation',
      icon: (
        <IconBrandZoom
          className={cn(
            'h-full w-full text-neutral-500 dark:text-neutral-300',
            pathname === '/home/video-consultations'
              ? 'text-white'
              : 'text-neutral-500'
          )}
        />
      ),
      to: '/home/video-consultations',
    },
    {
      title: 'Cycle Tracker',
      icon: (
        <IconCirclesFilled
          className={cn(
            'h-full w-full text-neutral-500 dark:text-neutral-300',
            pathname === '/home/cycle-tracker'
              ? 'text-white'
              : 'text-neutral-500'
          )}
        />
      ),
      to: '/home/cycle-tracker',
    },

    {
      title: 'Setting',
      icon: (
        <IconSettings
          className={cn(
            'h-full w-full text-neutral-500 dark:text-neutral-300',
            pathname === '/home/setting' ? 'text-white' : 'text-neutral-500'
          )}
        />
      ),
      to: '/home/setting',
    },
  ];

  return (
    <>
      <div className='sticky top-0 z-40 h-16 w-full bg-white text-gray-700 shadow-sm'>
        <div className='mx-auto flex max-w-screen-xl flex-col px-2 md:flex-row md:items-center md:justify-between'>
          <div className='flex w-full flex-row items-center justify-between p-4'>
            <Link
              to='/'
              className='focus:shadow-outline flex items-center gap-1 rounded-lg tracking-widest focus:outline-none'
            >
              <Logo />
            </Link>

            <div className='flex items-center justify-center gap-3 align-middle'>
              {links.map((link, idx) => (
                <NavLinks
                  key={idx}
                  link_to={link.to}
                  title={link.title}
                  icon={link.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center align-middle'>
        {location.pathname == '/home' ? <Home /> : <Outlet />}
      </div>
      <div className='border-t p-4'>
        <FooterText />
      </div>
    </>
  );
}
