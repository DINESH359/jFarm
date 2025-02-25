import { Request, Response, NextFunction } from 'express';

// ✅ Add Farmer
export const addFarmer = (req: Request, res: Response, next: NextFunction): void => {
    try {
        console.log("Received request to add farmer:", req.body);
        res.status(201).json({ message: "Farmer added successfully" });
    } catch (error) {
        console.error("Error in addFarmer:", error);
        next(error);
    }
};

// ✅ Get Weather Data
export const getWeather = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const lat = Number(req.query.lat);
        const lon = Number(req.query.lon);

        if (isNaN(lat) || isNaN(lon)) {
            res.status(400).json({ error: "Latitude and Longitude must be valid numbers" });
            return;
        }

        console.log(`Fetching weather for lat: ${lat}, lon: ${lon}`);
        res.json({ message: `Weather data for lat: ${lat}, lon: ${lon}` });
    } catch (error) {
        console.error("Error in getWeather:", error);
        next(error);
    }
};

// ✅ Get Services
export const getServices = (_req: Request, res: Response, next: NextFunction): void => {
    try {
        console.log("Fetching services data...");
        res.json({ message: "Services data retrieved" });
    } catch (error) {
        console.error("Error in getServices:", error);
        next(error);
    }
};

// ✅ Create Job
export const createJob = (_req: Request, res: Response, next: NextFunction): void => {
    try {
        console.log("Creating job...");
        res.json({ message: "Job created successfully" });
    } catch (error) {
        console.error("Error in createJob:", error);
        next(error);
    }
};
