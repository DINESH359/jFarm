import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimiter } from './middleware/rateLimiter';
import { authenticate } from './middleware/authMiddleware';
import { setupProxyRoutes } from './routes/proxyRoutes';

config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(rateLimiter);

// Proxy Routes
setupProxyRoutes(app);

// Start the API Gateway server
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
