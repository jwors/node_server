import type { Request, Response, NextFunction } from 'express'
import { Utils } from '../types/utlis';

const catchAsync = (fn: Utils.CatchFn) => (req: Response, res: Request, next: NextFunction) => {
	Promise.resolve(fn(req, res, next)).catch((err) => next(err));
}
export default catchAsync