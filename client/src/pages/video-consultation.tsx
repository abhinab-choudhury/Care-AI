import { motion } from 'framer-motion';

export default function VideoConsultation() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
      className='relative flex flex-col items-center justify-center gap-4 px-4 text-center align-middle'
    >
      <section className="flex bg-white font-['Poppins']">
        <div className='max-w-8xl relative mx-auto my-auto w-full bg-pink-600 px-6 py-12 leading-4 shadow-lg sm:px-8 lg:w-2/3 lg:px-10 lg:py-16 xl:w-3/5 xl:px-16 xl:py-20'>
          <div className='relative z-10 w-full'>
            <div className='mb-3 text-lg font-bold text-pink-900 md:text-xl'>
              Start Your Consultation
            </div>
            <h5 className='mb-8 text-xl font-bold text-white md:text-4xl'>
              Connect with a doctor for a live video consultation and get expert
              advice in minutes.
            </h5>
            <div className='-mx-2 flex'>
              <div className='mt-3 px-2'>
                <a
                  className='inline-flex items-center rounded-full border-2 border-pink-700 bg-white px-6 py-2 text-sm outline-none hover:border-pink-800 focus:border-pink-800'
                  href='/start-consultation/'
                >
                  Start Consultation
                </a>
              </div>
            </div>
          </div>

          <div className='pointer-events-none absolute bottom-0 right-0 w-4/5 text-white opacity-50'>
            <svg
              viewBox='0 0 812 424'
              className=''
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.3'
                d='M810.721 212.256L810.721 209.997L403.397 422.04L407.737 422.04L810.721 212.256Z'
                fill='currentColor'
              ></path>
              <path
                opacity='0.3'
                d='M810.721 242.256L810.721 239.997L461.025 422.04L465.366 422.04L810.721 242.256Z'
                fill='currentColor'
              ></path>
              <path
                opacity='0.3'
                d='M810.721 272.256L810.721 269.997L518.654 422.04L522.994 422.04L810.721 272.256Z'
                fill='currentColor'
              ></path>
              <path
                opacity='0.3'
                d='M810.721 302.256L810.721 299.997L576.282 422.04L580.623 422.04L810.721 302.256Z'
                fill='currentColor'
              ></path>
              <path
                opacity='0.3'
                d='M810.721 332.256L810.721 329.997L633.911 422.04L638.251 422.04L810.721 332.256Z'
                fill='currentColor'
              ></path>
              <path
                opacity='0.3'
                d='M810.721 362.256L810.721 359.997L691.539 422.04L695.88 422.04L810.721 362.256Z'
                fill='currentColor'
              ></path>
              <path
                opacity='0.3'
                d='M810.721 392.256L810.721 389.997L749.168 422.04L753.508 422.04L810.721 392.256Z'
                fill='currentColor'
              ></path>
              <path
                opacity='0.3'
                d='M810.721 422.04L810.721 419.997L806.796 422.04L810.721 422.04Z'
                fill='currentColor'
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <section className='py-3 leading-6 text-pink-900'>
        <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16'>
            <div className='mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left'>
              <div className='mb-4 md:mb-0 md:mr-6'>
                <img
                  className='h-56 rounded-lg object-cover md:w-56'
                  src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
                  alt=''
                />
              </div>
              <div className=''>
                <p className='text-xl font-medium text-gray-700'>
                  James Edward
                </p>
                <p className='mb-4 text-sm font-medium text-gray-500'>
                  Senior Editor
                </p>
                <div className='flex space-x-2'>
                  <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
                    <p className='text-sm font-medium text-gray-500'>
                      Articles
                    </p>
                    <p className='text-3xl font-medium text-gray-600'>13</p>
                  </div>
                  <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
                    <p className='text-sm font-medium text-gray-500'>Papers</p>
                    <p className='text-3xl font-medium text-gray-600'>7</p>
                  </div>
                  <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
                    <p className='text-sm font-medium text-gray-500'>Callers</p>
                    <p className='text-3xl font-medium text-gray-600'>2.5k</p>
                  </div>
                  <div className=''></div>
                </div>
                <div className='mb-3'></div>
                <div className='flex space-x-2'>
                  <button className='w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500'>
                    Message
                  </button>
                  <button className='w-full rounded-lg border-2 border-transparent bg-pink-600 px-4 py-2 font-medium text-white'>
                    Call
                  </button>
                </div>
              </div>
            </div>

            <div className='mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left'>
              <div className='mb-4 md:mb-0 md:mr-6'>
                <img
                  className='h-56 rounded-lg object-cover md:w-56'
                  src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
                  alt=''
                />
              </div>
              <div className=''>
                <p className='text-xl font-medium text-gray-700'>
                  James Edward
                </p>
                <p className='mb-4 text-sm font-medium text-gray-500'>
                  Senior Editor
                </p>
                <div className='flex space-x-2'>
                  <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
                    <p className='text-sm font-medium text-gray-500'>
                      Articles
                    </p>
                    <p className='text-3xl font-medium text-gray-600'>13</p>
                  </div>
                  <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
                    <p className='text-sm font-medium text-gray-500'>Papers</p>
                    <p className='text-3xl font-medium text-gray-600'>7</p>
                  </div>
                  <div className='flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2'>
                    <p className='text-sm font-medium text-gray-500'>Callers</p>
                    <p className='text-3xl font-medium text-gray-600'>2.5k</p>
                  </div>
                  <div className=''></div>
                </div>
                <div className='mb-3'></div>
                <div className='flex space-x-2'>
                  <button className='w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500'>
                    Message
                  </button>
                  <button className='w-full rounded-lg border-2 border-transparent bg-pink-600 px-4 py-2 font-medium text-white'>
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
