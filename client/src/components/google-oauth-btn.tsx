import { Button } from './ui/button';
import Google_Logo from '@/assets/google-logo.svg';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const LoginBtn = () => {
  return (
    <Button
      variant={'outline'}
      onClick={async () => {
        window.open(`${BACKEND_URL}/api/v1/auth/google`, '_self');
      }}
    >
      <img
        className='mr-3 h-6 w-6'
        src={Google_Logo}
        loading='lazy'
        alt='google logo'
      />
      <span className='text-sm'>Login with Google</span>
    </Button>
  );
};

export default LoginBtn;
