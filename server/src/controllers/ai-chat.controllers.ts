import Groq from 'groq-sdk';
import { NextFunction, Request, Response } from 'express';
import { GROQ_API_KEY } from '../utils/secrets';
import ApiResponse from '../utils/api-response-handler';
import ApiError from '../utils/api-error-handler';
import { APIPromise } from 'groq-sdk/core';
import { Stream } from 'groq-sdk/lib/streaming';

const groq = new Groq({ apiKey: GROQ_API_KEY });

export async function handleQuery() {

}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant',
  content: string;
}

interface CompletionOptions {
  model: string,
  stop: null,
  temperature: number;
  max_tokens: number;
  top_p: number;
  stream: boolean;
}

const SYSTEM_PROMPT = `You are an expert gynecology medical assistant with comprehensive knowledge in women's health. 
Your responsibilities include:
- Providing evidence-based medical information related to gynecological health
- Answering questions about reproductive health, pregnancy, menstrual health, and women's wellness
- Explaining common gynecological conditions, treatments, and preventive care
- Discussing contraception options and family planning
- Addressing concerns about menopause and hormonal health

Key guidelines:
1. Always prioritize medical accuracy and cite current medical guidelines when relevant
2. Use clear, professional medical terminology while remaining accessible to patients
3. Include relevant disclaimers when appropriate
4. Redirect non-gynecological questions to appropriate medical professionals
5. Never provide personalized medical advice - always recommend consulting a healthcare provider
6. Maintain strict medical privacy and confidentiality standards
7. Stay updated with current OB/GYN best practices and guidelines

If a query is outside gynecological health:
- Politely explain that you're specialized in gynecology
- Suggest consulting relevant medical professionals
- Provide general guidance on finding appropriate medical care

Format responses with:
- Clear medical explanations
- Relevant medical context
- Appropriate disclaimers
- References to medical guidelines when applicable
- Recommendations for professional medical consultation`;


async function getGynecologyAssistantResponse( 
  prompt: string, 
  customOptions:CompletionOptions) {
    try {
      const messages:ChatMessage[] = [
        {
          role:'system',
          content: SYSTEM_PROMPT
        },
        {
          role:'user',
          content: prompt
        }
      ];

      const completionResponse:any = await groq.chat.completions.create({
        messages,
        ...customOptions
      });
      
      return {
        success: true,
        data: completionResponse.choices[0]?.message?.content,
        error: null,
      }

    } catch(error) {
      console.log("Error in AI Gynecology Assistant :",error);
      return {
        success: false,
        data: null,
        error: error instanceof Error? error.message : "Unknown Error Occurred",
      }
    }  
}

// POST
export async function getChatCompletion(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  try {
  
    const { prompt } = req.body; // "What are common symptoms of PCOS?"
    const response = await getGynecologyAssistantResponse(
      prompt,
      { 
        model: 'llama3-8b-8192',
        temperature: 0.3,
        max_tokens: 1024,
        top_p: 1,
        stop: null,
        stream: false 
      } 
    );
    // const completionResponse = await groq.chat.completions.create({
    //   messages: [
    //     {
    //       role: 'system',
    //       content:
    //         'You are a knowledgeable gynecology assistant. ' +
    //         'Your role is to provide accurate and helpful information related to gynecological health, ' +
    //         "including reproductive health, pregnancy, menstrual issues, contraception, and women's wellness. " +
    //         'Do not answer questions outside of this field, and politely remind users to ask only gynecology-related questions if they stray from the topic.'
    //     },
    //     { role: 'user', content: prompt }
    //   ],
    //   model: 'llama3-8b-8192',
    //   temperature: 0.3,
    //   max_tokens: 1024,
    //   top_p: 1,
    //   stop: null,
    //   stream: false
    // });
    // const aiMessage = completionResponse.choices[0]?.message?.content || '';

    res
      .status(200)
      .json(
        new ApiResponse(200, 'AI Response Success', { response : response.success ? response.data : response.error })
      );
  } catch (error) {
    console.error('Error in AI Chat Completion:', error);
    res.status(500).json(new ApiError(500, 'Failed to generate AI response'));
  }
}

// GET
export async function getAllChats(
  req: Request,   
  res: Response,
  _next: NextFunction
) {
  try {
  } catch (error) {}
}

// DELETE
export async function deleteChat(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  try {
  } catch (error) {}
}

// PUT
export async function updateChat(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  try {
  } catch (error) {}
}
