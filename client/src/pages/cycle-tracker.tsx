'use client';

import CalenderTracker from '@/components/calender-tracker';
import OvulationWindowPredictor from '@/components/ovulating-window-prediction-form';
import PCOD_Predictor from '@/components/pcod-prediction-form';
import { PieChat } from '@/components/pie-chart';
import { RadialChart } from '@/components/radial-chart';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CycleDetection() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.5,
        ease: 'easeInOut',
      }}
      className='p-8'
    >
      {false ? (
        <div className='mx-auto w-[70vw]'>
          <Button className='my-5'>Add Data</Button>
          <div className='h-[55vh] w-full rounded-lg border border-black p-2'>
            <div className='h-full w-full rounded-lg border border-dashed border-black bg-gray-50 backdrop-blur-lg'>
              <div className='flex h-full items-center justify-center'>
                <p className='text-center text-sm font-extralight'>
                  Complete the Form for Predictions
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='mx-auto flex flex-col gap-10 lg:flex-row'>
          <PieChat />
          <RadialChart />
          <CalenderTracker />
        </div>
      )}

      <div className='mx-auto my-20 flex flex-col items-center justify-center align-middle'>
        <h1 className='text-2xl'>Health Predictions</h1>
        <div className='m-10 mx-auto grid w-[65%] grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='rounded-xl border border-gray-600 p-8'>
            <strong>PCOD/PCOS Prediction Tool:</strong> Analyze your symptoms
            and cycle patterns for early detection of PCOD/PCOS.
            <br />
            <PCOD_Predictor />
          </div>
          <div className='rounded-xl border border-gray-600 p-8'>
            <strong>Ovulation Window Predictor: </strong> track when you're
            likely to ovulate, which is useful for cycle tracking.
            <br />
            <OvulationWindowPredictor />
          </div>
          <div className='rounded-xl border border-gray-600 p-8'>
            <strong>Cycle Irregularity Tracke: </strong> tracks any significant
            deviations in your cycle length that might require further
            attention.
          </div>
          <div className='rounded-xl border border-gray-600 p-8'>
            <strong>PMS Symptom Forecaster: </strong> Stay ahead of your
            symptoms to better manage your well-being.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
