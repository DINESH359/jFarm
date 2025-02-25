import { Request, Response, NextFunction } from 'express';

// ✅ Get Bookings
export const getBookings = (_req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({ message: "Bookings retrieved successfully" });
    } catch (error) {
        next(error);
    }
};

// ✅ Get Dashboard Data
export const getDashboard = (_req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({ message: "Dashboard data retrieved" });
    } catch (error) {
        next(error);
    }
};

// ✅ Get Job List
export const getJobList = (_req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({ message: "Job list retrieved" });
    } catch (error) {
        next(error);
    }
};
