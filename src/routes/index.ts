import express from 'express'
import docsRoute from './docs.route';
const router = express.Router();

const defaultRoutes = [
	{
		path: '/docs',
		route: docsRoute
	}
]

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route)
})

export default router