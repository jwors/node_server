import express from 'express';

const router = express.Router();

router.get('/getDocs', (req, res) => {
	res.send('ok!!!')
})

export default router