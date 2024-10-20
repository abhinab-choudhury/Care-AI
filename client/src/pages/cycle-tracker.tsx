'use client';

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
          <div className='flex items-center justify-normal px-4 py-8 align-top'>
            <div className='flex w-full flex-col shadow-lg md:flex-row'>
              <div className='rounded-t bg-white p-5 dark:bg-gray-800 md:p-8'>
                <div className='flex items-center justify-between px-4'>
                  <span className='text-base font-bold text-gray-800 focus:outline-none dark:text-gray-100'>
                    October 2020
                  </span>
                  <div className='flex items-center'>
                    <button
                      aria-label='calendar backward'
                      className='text-gray-800 hover:text-gray-400 focus:text-gray-400 dark:text-gray-100'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-chevron-left'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <polyline points='15 6 9 12 15 18' />
                      </svg>
                    </button>
                    <button
                      aria-label='calendar forward'
                      className='ml-3 text-gray-800 hover:text-gray-400 focus:text-gray-400 dark:text-gray-100'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-chevron-right'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <polyline points='9 6 15 12 9 18' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='flex items-center justify-between overflow-x-auto pt-12'>
                  <table className='w-full'>
                    <thead>
                      <tr>
                        <th>
                          <div className='flex w-full justify-center'>
                            <p className='text-center text-base font-medium text-gray-800 dark:text-gray-100'>
                              Mo
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className='flex w-full justify-center'>
                            <p className='text-center text-base font-medium text-gray-800 dark:text-gray-100'>
                              Tu
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className='flex w-full justify-center'>
                            <p className='text-center text-base font-medium text-gray-800 dark:text-gray-100'>
                              We
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className='flex w-full justify-center'>
                            <p className='text-center text-base font-medium text-gray-800 dark:text-gray-100'>
                              Th
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className='flex w-full justify-center'>
                            <p className='text-center text-base font-medium text-gray-800 dark:text-gray-100'>
                              Fr
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className='flex w-full justify-center'>
                            <p className='text-center text-base font-medium text-gray-800 dark:text-gray-100'>
                              Sa
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className='flex w-full justify-center'>
                            <p className='text-center text-base font-medium text-gray-800 dark:text-gray-100'>
                              Su
                            </p>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='pt-6'>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'></div>
                        </td>
                        <td className='pt-6'>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'></div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'></div>
                        </td>
                        <td className='pt-6'>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              1
                            </p>
                          </div>
                        </td>
                        <td className='pt-6'>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              2
                            </p>
                          </div>
                        </td>
                        <td className='pt-6'>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base text-gray-500 dark:text-gray-100'>
                              3
                            </p>
                          </div>
                        </td>
                        <td className='pt-6'>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base text-gray-500 dark:text-gray-100'>
                              4
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              5
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              6
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              7
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='h-full w-full'>
                            <div className='flex w-full cursor-pointer items-center justify-center rounded-full'>
                              <a
                                role='link'
                                className='flex h-8 w-8 items-center justify-center rounded-full bg-indigo-700 text-base font-medium text-white hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2'
                              >
                                8
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              9
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base text-gray-500 dark:text-gray-100'>
                              10
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base text-gray-500 dark:text-gray-100'>
                              11
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              12
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              13
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              14
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              15
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              16
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base text-gray-500 dark:text-gray-100'>
                              17
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base text-gray-500 dark:text-gray-100'>
                              18
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              19
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              20
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              21
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              22
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              23
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base text-gray-500 dark:text-gray-100'>
                              24
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base text-gray-500 dark:text-gray-100'>
                              25
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              26
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              27
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              28
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              29
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className='flex w-full cursor-pointer justify-center px-2 py-2'>
                            <p className='text-base font-medium text-gray-500 dark:text-gray-100'>
                              30
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='rounded-b bg-gray-50 p-5 dark:bg-gray-700'>
                <div className='px-4'>
                  <div className='border-b border-dashed border-gray-400 pb-4'>
                    <p className='text-xs font-light leading-3 text-gray-500 dark:text-gray-300'>
                      9:00 AM
                    </p>
                    <a className='mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100'>
                      Zoom call with design team
                    </a>
                  </div>
                  <div className='border-b border-dashed border-gray-400 pb-4 pt-5'>
                    <p className='text-xs font-light leading-3 text-gray-500 dark:text-gray-300'>
                      10:00 AM
                    </p>
                    <a className='mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100'>
                      Orientation session with new hires
                    </a>
                  </div>
                  <div className='border-b border-dashed border-gray-400 pb-4 pt-5'>
                    <p className='text-xs font-light leading-3 text-gray-500 dark:text-gray-300'>
                      9:00 AM
                    </p>
                    <a className='mt-2 text-lg font-medium leading-5 text-gray-800 focus:outline-none dark:text-gray-100'>
                      Zoom call with design team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='mx-auto my-20 flex flex-col items-center justify-center align-middle'>
        <h1 className='text-2xl'>Health Predictions</h1>
        <div className='m-10 mx-auto grid w-[65%] grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='rounded-xl border border-gray-600 p-8'>
            <strong>PCOD Prediction Tool:</strong> Analyze your symptoms and
            cycle patterns for early detection of PCOD.
          </div>
          <div className='rounded-xl border border-gray-600 p-8'>
            <strong>Ovulation Window Predictor: </strong> track when you're
            likely to ovulate, which is useful for cycle tracking.
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
