import app from './app';
import { PROT } from './config/config'

app.listen(PROT, () => {
	console.info(`listening to prot ${PROT}`)
})