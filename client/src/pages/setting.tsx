import { motion } from 'framer-motion';
import avatarImage from '@/assets/background-img.jpg'; 

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
          <h1 className='py-2 text-2xl font-semibold'>Account Settings</h1>
          <p className='font- text-slate-600'>
            Manage your account information and preferences.
          </p>
        </div>
        <hr className='mb-8 mt-4' />

        {/* Avatar and Email */}
        <div className='flex items-center gap-4'>
          <img
            src={avatarImage}
            alt='User Avatar'
            className='h-16 w-16 rounded-full'
          />
          <div>
            <p className='text-lg font-semibold'>john.doe@company.com</p>
          </div>
        </div>
        <hr className='mb-8 mt-4' />

        {/* Stored Period Data */}
        <div className='mb-10'>
          <h2 className='text-xl font-semibold'>Your Period Dates</h2>
          <div className='mt-4 text-gray-600'>
            <ul className='list-disc pl-5'>
              <li>Last period start: September 15, 2024</li>
              <li>Next expected period: October 13, 2024</li>
              <li>Cycle length: 28 days</li>
            </ul>
          </div>
        </div>
        <hr className='mb-8 mt-4' />

        {/* Last Care AI Chatbot Question */}
        <div className='mb-10'>
          <h2 className='text-xl font-semibold'>Last Care AI Chatbot Interaction</h2>
          <p className='mt-4 text-gray-600'>
            You asked: <strong>"What are common symptoms of PCOD?"</strong>
          </p>
        </div>
        <hr className='mb-8 mt-4' />

        {/* Permission Section */}
        <div className='mb-10 flex flex-col gap-3'>
          <p className='py-2 text-xl font-semibold'>Permissions</p>
          <p className='text-rose- inline-flex w-fit items-center rounded-full bg-rose-100 px-4 py-1 text-red-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2 h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
            Proceed with caution
          </p>
          <p className='mt-2'>
            Make sure you have taken a backup of your account. We will completely wipe your data. There is no way to access your account after this action.
          </p>
          <button className='ml-auto text-sm font-semibold text-rose-600 underline decoration-2'>
            Continue with deletion
          </button>
        </div>
      </div>
    </motion.div>
  );
}
