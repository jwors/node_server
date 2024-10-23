import mongoose from 'mongoose';
import validator, { trim } from 'validator';
import toJSON from './plugin/toJSON.plugin';
import paginate from './plugin/paginate.plugin';

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
			trim: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
			lowercase: true,
			validator(value: string) {
				if (!validator.isEmail(value)) {
					throw new Error('')
				}
			}
		},
		password: {
			type: String,
			require: true,
			trim: true,
			minlength: 8,
			validator(value: string) {
				if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
					throw new Error('Password must contain at least one letter and one number');
				}
			},
		},
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true
	}
)

userSchema.plugin(toJSON)
userSchema.plugin(paginate)

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
	const user = await this.findOne({
		email,
		_id: {
			$ne: excludeUserId
		}
	})
	return !!user;
}

const User = mongoose.model('User', userSchema)
export default User