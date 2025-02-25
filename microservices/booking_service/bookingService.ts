import express from 'express';
import { getBookings, getDashboard, getJobList } from './controllers/bookingController';

const app = express();
app.use(express.json());

app.get('/getBookings', getBookings);
app.get('/getDashboard', getDashboard);
app.get('/getJobList', getJobList);

app.listen(4003, () => console.log('Booking & Dashboard Service running on port 4003'));
