import mongoose from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		}
	}
)