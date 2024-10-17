import express from 'express';

const router = express.Router();

router.get('/getDocs', (req, res) => {
	res.writeHead(200, {
		"Content-Type": "text/plan;charset=utf-8"
	})
	const feadBackData = {
		data: {
			number: 1,
			age: 18,
			name: '曹浩洋'
		},
		status: 200,
		code: 200
	}
	res.end(JSON.stringify(feadBackData))
})

export default router