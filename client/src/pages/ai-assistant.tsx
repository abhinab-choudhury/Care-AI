import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizontal, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import axios from 'axios';

interface Message {
  type: 'user' | 'ai';
  content: string;
}

async function AIContent(input: String): Promise<Message> {
  const message:any = await axios.post(
    `http://localhost:8080/api/v1/assistant/ask`,
    {
      prompt: input,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  console.log('Message', message);
  return {
    type: 'ai',
    content: message.data.data.response,
  };
}

const AI_Interface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  // useEffect(() => {
  //   const loadMessages = async () => {
  //     const intialMessage = await AIContent();
  //     setMessages(intialMessage);
  //   };
  //   loadMessages();
  // },[]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      const AI_Response = await AIContent(input);
      setMessages([...messages, { type: 'user', content: input }, AI_Response]);
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }}
    >
      <div className='mx-0 flex h-[90vh] flex-col pt-6 md:px-20'>
        <div className='scrollbar-hide flex-1 space-y-4 overflow-y-auto p-4'>
          {messages.map((message: Message, index: number) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`flex max-w-[90%] md:max-w-[80%] ${message.type === 'user' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div
                  className={`flex h-fit w-fit items-center justify-center rounded-full p-2 ${message.type === 'user' ? 'ml-2 bg-black' : 'mr-2 bg-pink-500'}`}
                >
                  {message.type === 'user' ? (
                    <User className='h-5 w-5 text-white' />
                  ) : (
                    <Sparkles className='h-5 w-5 text-white' />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 ${message.type === 'user' ? 'bg-gray-100' : 'bg-pink-100'}`}
                >
                  <p className='text-sm'>{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='scroll-hidden mx-auto mb-5 flex w-[100%] flex-row justify-center align-middle'>
          <div className='mx-auto w-[98%] rounded-xl border-t bg-white p-4 shadow-md'>
            <form onSubmit={handleSubmit} className='flex space-x-2'>
              <Input
                className='flex-1'
                placeholder='Type a message...'
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput(e.target.value)
                }
              />
              <Button
                type='submit'
                className='bg-blue-500 text-white hover:bg-blue-600'
              >
                <SendHorizontal className='h-5 w-5' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AI_Interface;
