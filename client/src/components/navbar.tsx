import LoginBtn from './google-oauth-btn';
import Logo from './logo';

const Navbar = () => {
  return (
    <nav className='fixed left-0 top-0 flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm'>
      <div className='flex w-full flex-row items-center justify-between align-middle'>
        <div className='flex w-fit flex-row items-center gap-2'>
          <Logo />
          <span className='text-lg font-extralight'>Care AI</span>
        </div>
        <LoginBtn />
      </div>
    </nav>
  );
};

export default Navbar;
