import express from 'express';
import { login, signup } from './controllers/authController';

const app = express();
app.use(express.json());

//app.post('/login', login);
//app.post('/signup', signup);

app.listen(4001, () => console.log('Auth & User Service running on port 4001'));
