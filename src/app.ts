
import express from 'express';
import router from './routes';
const app = express();

// parse json request body
app.use(express.json());

//  use create  route
app.use(router);

export default app;
