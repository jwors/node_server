import HttpStatus from 'http-status';
import { User } from '../models/index';
import ApiError from '../utils/ApiError'

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */

const createUser = async (userBody) => {
	if (await User.isEmailTaken)
}