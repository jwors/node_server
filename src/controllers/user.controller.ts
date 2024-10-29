import status from "http-status-codes";
import catchAsync from '../utils/catchAsync';
import { userServices } from '../services/index'
const createUser = catchAsync(async (req, res) => {
	const user = await userServices.createUser(req.body);
	req.status(status.CREATED).send(user);
})