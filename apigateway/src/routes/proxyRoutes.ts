import { Application } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { authenticate } from '../middleware/authMiddleware';
import { services } from '../config/services';

export const setupProxyRoutes = (app: Application) => {
    app.use('/auth', createProxyMiddleware({ target: services.authService, changeOrigin: true }));
    app.use('/user', authenticate, createProxyMiddleware({ target: services.userService, changeOrigin: true }));
    app.use('/order', authenticate, createProxyMiddleware({ target: services.orderService, changeOrigin: true }));

    app.use('/tasks', createProxyMiddleware({ 
        target: services.taskService, 
        changeOrigin: true,
        pathRewrite: { '^/tasks': '/tasks' }, // ✅ Ensure `/tasks` is retained
        logLevel: 'debug' // ✅ Enable debugging for proxy requests
    }));
};
