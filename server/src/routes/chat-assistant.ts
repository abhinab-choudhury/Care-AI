import { Request, Response, Router } from 'express';
import { getChatCompletion } from '../controllers/ai-chat.controllers';
const router: Router = Router();

router.post('/ask', getChatCompletion);

export default router;
