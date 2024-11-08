import { PROT } from '../config/config'

const swaggerDef = {
	openapi: '3.0.0',
	info: {
		title: 'node-express-boilerplate API documentation',
		version: '3.0.0',
		license: {
			name: 'MIT',
			url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
		},
	},
	servers: [
		{
			url: `http://localhost:${PROT}/v1`,
		},
	]
}

export default swaggerDef