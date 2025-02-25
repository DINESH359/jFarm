import express, { Application, Request, Response, NextFunction } from 'express';
import * as farmController from './controllers/farmController';

const app: Application = express();
const PORT = 4002;

// ✅ Middleware: Parse JSON requests
app.use(express.json());

// ✅ Middleware: Log incoming requests
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

// ✅ Define Routes (Ensure Correct Function References)
app.post('/addFarmer', farmController.addFarmer);
app.get('/getWeather', farmController.getWeather);
app.get('/getServices', farmController.getServices);
app.get('/createJob', farmController.createJob);

// ✅ Global Error Handling Middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error("Error occurred:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Farm Management Service running on port ${PORT}`));
