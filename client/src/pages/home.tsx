import { Button } from '@/components/ui/button';
import { IconCheck } from '@tabler/icons-react';
import Background from '@/assets/background-img.jpg';
import { motion } from 'framer-motion';

import ai_chatbot from '@/assets/ai-assistent.jpg';
import symptoms from '@/assets/pcos.png';
import video_call from '@/assets/vidoe-call.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='m-8'
      >
        <section className='container mx-auto my-5 flex max-w-7xl flex-col justify-evenly gap-10 align-top md:flex-row'>
          <div className="h-[250px] rounded-xl font-['Poppins'] text-3xl md:w-[40%]">
            <img
              className='h-full w-full rounded-xl'
              src={Background}
              alt='background image'
            />
            <span className='relative -right-5 -top-60 z-20'>AI-Powered</span>{' '}
            <br />
            <span className='relative -right-5 -top-60 z-20'>ChatBot</span>
            <br />
            <span className='relative -right-5 -top-60 z-20'>
              Smart & Secure
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-xl border p-5 font-['Poppins']">
            <p className='text-sm font-normal'>
              Our AI System offers human-like conversations, infinite memory,
              and autonomous operations, setting, a new standard in customer
              interaction
            </p>
            <div className='flex flex-col gap-5 md:flex-row'>
              <Button variant='ghost' className='my-5 rounded-xl border p-10'>
                <IconCheck className='mr-3 text-green-500' />
                Based on data
              </Button>
              <Button variant='ghost' className='my-5 rounded-xl border p-10'>
                <IconCheck className='mr-3 text-green-500' />
                100% Secure
              </Button>
            </div>
          </div>
        </section>

        <section className='mx-auto mb-10 flex max-w-7xl'>
          <div className='flex w-full flex-col items-center justify-center gap-10 align-middle md:flex-row'>
            <Link to='/home/ai-health-assistant'>
              <div className='flex flex-col items-center'>
                <img
                  src={ai_chatbot}
                  alt='AI assisting healthcare professionals'
                  className='h-[230px] w-[380px] rounded-3xl border backdrop-blur-sm'
                />
                <p className='text-md p-3 text-center font-semibold'>
                  AI-powered Chat Assistance
                </p>
              </div>
            </Link>
            <Link to='/home/cycle-tracker'>
              <div className='flex flex-col items-center'>
                <img
                  src={symptoms}
                  alt='Woman tracking health on a mobile app'
                  className='h-[230px] w-[380px] rounded-3xl border backdrop-blur-sm'
                />
                <p className='text-md p-3 text-center font-semibold'>
                  Health Detection - PCOD / PCOS / Menstrual-Cycle
                </p>
              </div>
            </Link>

            <Link to='/home/video-consultations'>
              <div className='flex flex-col items-center'>
                <img
                  src={video_call}
                  alt='Doctor and patient in a virtual consultation'
                  className='h-[230px] w-[380px] rounded-3xl border backdrop-blur-sm'
                />
                <p className='text-md p-3 text-center font-semibold'>
                  Virtual Consultation
                </p>
              </div>
            </Link>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
