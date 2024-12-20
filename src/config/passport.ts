import { Strategy, ExtractJwt } from 'passport-jwt';
import tokenTypes from './token';
import Config from './config';
import User from '../models/user.model';

const jwtOptions = {
	secretOrKey: Config.jwt.secret,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}
const jwtVerify = async (payload, done) => {
	try {
		if (payload.type !== tokenTypes.ACCESS) {
			throw new Error('Invalid token type');
		}
		const user = await User.findById(payload.sub);
		if (!user) {
			return done(null, false);
		}
		done(null, user);
	} catch (error) {
		done(error, false);
	}
}
const jwtStrategy = new Strategy(jwtOptions, jwtVerify);

export default {
	jwtStrategy,
};
