import { Request, Response, NextFunction } from 'express';

// ✅ Login
export const login = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }
        res.json({ message: "Login successful", token: "dummy-token" });
    } catch (error) {
        next(error);
    }
};

// ✅ Signup
export const signup = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, phone, email, password } = req.body;
        if (!name || !phone || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        res.status(201).json({ message: "Signup successful", userId: 1 });
    } catch (error) {
        next(error);
    }
};
