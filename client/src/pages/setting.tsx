import { motion } from 'framer-motion';

export default function Setting() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className='bg-gray-50'
    >
      <div className='mx-auto my-10 flex max-w-7xl flex-col overflow-hidden rounded-xl p-8 sm:shadow'>
        <div className='pt-4'>
          <h1 className='py-2 text-2xl font-semibold'>Account settings</h1>
          <p className='font- text-slate-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <hr className='mb-8 mt-4' />
        <p className='py-2 text-xl font-semibold'>Email Address</p>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-gray-600'>
            Your email address is <strong>john.doe@company.com</strong>
          </p>
          <button className='inline-flex text-sm font-semibold text-pink-600 underline decoration-2'>
            Change
          </button>
        </div>
        <hr className='mb-8 mt-4' />

        <div className='mb-10 flex flex-col gap-3'>
          <p className='py-2 text-xl font-semibold'>Permission</p>
          <p className='text-rose- inline-flex w-fit items-center rounded-full bg-rose-100 px-4 py-1 text-red-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2 h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                clip-rule='evenodd'
              />
            </svg>
            Proceed with caution
          </p>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-gray-600'>
              Your email address is <strong>john.doe@company.com</strong>
            </p>
            <button className='inline-flex text-sm font-semibold text-pink-600 underline decoration-2'>
              Change
            </button>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-gray-600'>
              Your email address is <strong>john.doe@company.com</strong>
            </p>
            <button className='inline-flex text-sm font-semibold text-pink-600 underline decoration-2'>
              Change
            </button>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-gray-600'>
              Your email address is <strong>john.doe@company.com</strong>
            </p>
            <button className='inline-flex text-sm font-semibold text-pink-600 underline decoration-2'>
              Change
            </button>
          </div>
          <p className='mt-2'>
            Make sure you have taken backup of your account in case you ever
            need to get access to your data. We will completely wipe your data.
            There is no way to access your account after this action.
          </p>
          <button className='ml-auto text-sm font-semibold text-rose-600 underline decoration-2'>
            Continue with deletion
          </button>
        </div>
      </div>
    </motion.div>
  );
}
