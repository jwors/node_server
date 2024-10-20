import type { Request, Response, NextFunction } from 'express'
declare namespace Utils {
	export type CatchFn = (req: Response, res: Request, next: NextFunction) => Promise<any>
}
