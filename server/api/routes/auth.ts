import express, { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import '../middlewares/passport-strategy';
import { FRONTEND_URL } from '../utils/secrets';

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: `${FRONTEND_URL}/home`,
    failureRedirect: `${FRONTEND_URL}`
  }),
  (req: Request, res: Response) => {
    res.redirect(`${FRONTEND_URL}/home`);
  }
);

export default router;
