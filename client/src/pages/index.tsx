import { FooterText } from '@/components/footer';
import Card from '@/components/info-card';
import Navbar from '@/components/navbar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import Step from '@/components/steps';

import step_1_img from '@/assets/step-1.png';
import step_2_img from '@/assets/step-2.png';
import step_3_img from '@/assets/step-3.png';
import step_4_img from '@/assets/step-4.png';

const Index = () => {
  return (
    <main>
      <Navbar />

      <section>
        <AuroraBackground>
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
            <span className='mb-4 inline-block rounded-full bg-pink-100 px-4 py-1.5 text-xs font-medium text-pink-700 sm:text-sm'>
              Empowering women's health with AI.
            </span>
            <p className='mb-8 text-4xl font-semibold text-pink-700 sm:text-5xl xl:text-6xl'>
              Your health, your journey, your care
            </p>
            <Link to='/home'>
              <button className='rounded-full bg-pink-400 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'>
                Get started for free
              </button>
            </Link>
          </motion.div>
        </AuroraBackground>
      </section>

      <section className='mx-10 flex flex-col items-center justify-center'>
        <section className='body-font overflow-hidden text-gray-600'>
          <div className='container max-w-6xl py-24'>
            <div className='-my-8 divide-y-2 divide-gray-100'>
              {/* AI Powered Health Assistant Section */}
              <Card
                title='AI-Powered Health Assistant'
                subtitle='Personalized Health Guidance at Your Fingertips'
                info="Our AI-driven chatbot offers real-time support for various women's health issues, providing quick answers and guidance on everything from general wellness to specific concerns."
                link='/home/ai-health-assistant'
              />

              {/* Video Consultations Section */}
              <Card
                title='Video Consultations with Specialists'
                subtitle='Expert Care, Anytime, Anywhere'
                info="Connect with certified doctors via secure video calls for professional consultations on women's health topics, from menstrual health to pregnancy advice."
                link='/home/video-consultations'
              />

              {/* AI Menstrual Cycle Prediction Section */}
              <Card
                title='AI Menstrual Cycle Tracker'
                subtitle='Accurate Cycle Predictions and Insights'
                info="Leverage the power of AI to predict your next cycle and receive personalized recommendations on managing symptoms, staying healthy, and understanding your body's patterns."
                link='/home/cycle-tracker'
              />
            </div>
          </div>
        </section>

        <section className='mx-3 max-w-5xl py-10'>
          <h1 className='my-10 w-full text-center text-3xl font-semibold'>
            Care AI Development Journey
          </h1>
          <div>
            {/* Step 1: Idea */}
            <Step
              stepNumber='1'
              stepTitle='Idea'
              description={{
                title: 'Identify Key Healthcare Challenges',
                text: "Begin by identifying the most pressing challenges in women's healthcare. Our solution aims to address gaps in telemedicine, health tracking, and AI-assisted diagnosis for conditions like PCOD.",
              }}
              imgSrc={step_1_img}
              imgAlt='Step 1 - Idea'
            />

            {/* Decorative connectors */}
            <div className='flex flex-row items-start'>
              <div className='border-r-4 border-t-4 border-transparent'>
                <div className='ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed border-gray-300'></div>
              </div>
              <div className='flex-auto border-t-4 border-transparent'>
                <div className='h-16 border-b-4 border-dashed border-gray-300'></div>
              </div>
              <div className='mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-dashed border-gray-300'></div>
            </div>

            {/* Step 2: Collaboration */}
            <Step
              stepNumber='2'
              stepTitle='Collaboration'
              description={{
                title: 'Build a Cross-Functional Team',
                text: 'Collaboration is key. Assemble a diverse team of developers, healthcare professionals, and AI specialists to bring different perspectives and expertise to the table.',
              }}
              imgSrc={step_2_img}
              imgAlt='Step 2 - Collaboration'
              reverse={true}
            />

            {/* Decorative connectors */}
            <div className='flex flex-row-reverse items-start'>
              <div className='border-l-4 border-t-4 border-transparent'>
                <div className='mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-dashed border-gray-300'></div>
              </div>
              <div className='flex-auto border-t-4 border-transparent'>
                <div className='h-16 border-b-4 border-dashed border-gray-300'></div>
              </div>
              <div className='ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-dashed border-gray-300'></div>
            </div>

            {/* Step 3: Planning */}
            <Step
              stepNumber='3'
              stepTitle='Planning'
              description={{
                title: 'Plan the Product Development Process',
                text: 'Create a solid plan with clear milestones for designing the AI chatbot, menstrual cycle tracker, and telemedicine features. Assign tasks to your team to ensure a smooth workflow.',
              }}
              imgSrc={step_3_img}
              imgAlt='Step 3 - Planning'
            />

            {/* Decorative connectors */}
            <div className='flex flex-row items-start'>
              <div className='border-r-4 border-t-4 border-transparent'>
                <div className='ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed border-gray-300'></div>
              </div>
              <div className='flex-auto border-t-4 border-transparent'>
                <div className='h-16 border-b-4 border-dashed border-gray-300'></div>
              </div>
              <div className='mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-dashed border-gray-300'></div>
            </div>

            {/* Step 4: Implementation */}
            <Step
              stepNumber='4'
              stepTitle='Implementation'
              description={{
                title: 'Develop and Implement the Solution',
                text: 'Code and integrate AI algorithms to provide real-time insights into health conditions, set up the telemedicine infrastructure, and ensure the system is user-friendly and secure.',
              }}
              imgSrc={step_4_img}
              imgAlt='Step 4 - Implementation'
              reverse={true}
            />
          </div>
        </section>

        <section className='mx-auto w-full max-w-4xl px-4 py-16'>
          <h1 className='mb-8 text-center text-3xl font-bold' id='faqs'>
            FAQs
          </h1>
          <div className='w-full'>
            <Accordion type='single' collapsible className='w-full'>
              {/* Question 1 */}
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-lg font-bold'>
                  How secure is the platform for my personal health data?
                </AccordionTrigger>
                <AccordionContent className='text-base'>
                  Care AI follows stringent security protocols, including
                  end-to-end encryption and compliance with healthcare privacy
                  standards to ensure your personal data remains confidential
                  and secure.
                </AccordionContent>
              </AccordionItem>

              {/* Question 2 */}
              <AccordionItem value='item-2'>
                <AccordionTrigger className='text-lg font-bold'>
                  Can I consult with doctors through video calls?
                </AccordionTrigger>
                <AccordionContent className='text-base'>
                  Yes, you can easily schedule and consult with licensed
                  healthcare professionals via secure video calls on our
                  platform.
                </AccordionContent>
              </AccordionItem>

              {/* Question 3 */}
              <AccordionItem value='item-3'>
                <AccordionTrigger className='text-lg font-bold'>
                  How accurate are the AI-based health predictions?
                </AccordionTrigger>
                <AccordionContent className='text-base'>
                  Our AI-powered system uses advanced algorithms to provide
                  accurate health predictions. However, we always recommend
                  consulting a healthcare professional for confirmation.
                </AccordionContent>
              </AccordionItem>

              {/* Question 4 */}
              <AccordionItem value='item-4'>
                <AccordionTrigger className='text-lg font-bold'>
                  Can I track my menstrual cycle using Care AI?
                </AccordionTrigger>
                <AccordionContent className='text-base'>
                  Yes, Care AI offers a built-in menstrual cycle tracker that
                  helps you predict your next cycle and provides insights on
                  conditions like PCOD.
                </AccordionContent>
              </AccordionItem>

              {/* Question 5 */}
              <AccordionItem value='item-5'>
                <AccordionTrigger className='text-lg font-bold'>
                  Is the platform accessible and user-friendly?
                </AccordionTrigger>
                <AccordionContent className='text-base'>
                  Absolutely. Care AI is designed with accessibility in mind,
                  adhering to WAI-ARIA standards to ensure it is easy to use for
                  all users.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </section>
      <section className='my-8'>
        <FooterText className='mb-auto' />
      </section>
    </main>
  );
};

export default Index;
