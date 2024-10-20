import passport, { Profile } from 'passport';
import {
  GoogleCallbackParameters,
  Strategy as GoogleStrategy
} from 'passport-google-oauth20';
import { FRONTEND_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../utils/secrets';
import User from '../database/models/user.models';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
      callbackURL: `${FRONTEND_URL}/api/v1/auth/google/callback`,
      passReqToCallback: true
    },
    async function (
      _req: Express.Request,
      _accessToken: string,
      _refreshToken: string,
      _params: GoogleCallbackParameters,
      profile: Profile,
      cb: (err: any, user?: Express.User | false) => void
    ): Promise<void> {
      try {
        console.log(profile);
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            email: profile.emails?.[0]?.value,
            googleId: profile.id,
            avatar: profile.photos?.[0]?.value,
            username: profile.displayName
          });
        }
        cb(null, user);
      } catch (error) {
        cb(error, false);
      }
    }
  )
);

passport.serializeUser(
  (user: Express.User, cb: (err: any, user?: Express.User | false) => void) => {
    cb(null, user);
  }
);

passport.deserializeUser(
  (user: Express.User, cb: (err: any, user?: Express.User | false) => void) => {
    cb(null, user);
  }
);
