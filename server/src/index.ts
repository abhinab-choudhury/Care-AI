import express, { Application, NextFunction, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';

import db_connect from './database/db';
import {
  DATABASE_CONNECTION_STRING,
  DATABASE_NAME,
  FRONTEND_URL,
  PORT,
  SESSION_SECRET
} from './utils/secrets';
import ApiResponse from './utils/api-response-handler';
import ApiError from './utils/api-error-handler';

import AuthRouter from './routes/auth';
import ChatAssistantRouter from './routes/chat-assistant';
import isAuthenticated from './middlewares/auth.middleware';

const app: Application = express();
const corsOptions: CorsOptions = {
  origin: [`${FRONTEND_URL}`],
  credentials: true
};
const sessionOptions = {
  secret: [`${SESSION_SECRET}`],
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: `${DATABASE_CONNECTION_STRING}/${DATABASE_NAME}`,
    collectionName: 'sessions'
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // valid for 1-day
    // maxAge: 1000 * 5 // 5 Seconds for Testing
  }
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

db_connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
  });

  // AI-Chat-Bot Route
  app.use('/api/v1/assistant', ChatAssistantRouter);

  // Auth Routes
  app.use('/api/v1/auth', AuthRouter);

  // health route
  app.get('/api/v1/health', (req: Request, res: Response) => {
    res.status(200).json(new ApiResponse(200, 'Server is Healthy'));
    return;
  });
  app.get('/', (req: Request, res: Response) => {
    res.send("Hi!!");
    return;
  });
});

// Global Catch
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json(new ApiError(500, err.message));
});
