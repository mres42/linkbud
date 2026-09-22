import express from 'express';
import authRoutes from './src/module/auth/routes/auth.routes.js';
import userRoutes from './src/module/user/routes/user.routes.js';
import linkListRoutes from './src/module/link-list/routes/link-list.routes.js';

const app = express();

app.use(express.json());

app.use('/api/v1', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/link-list', linkListRoutes);

// error handler must come after routes
app.use((err, req, res, next) => {
    console.error(err);

    return res.status(err.statusCode || 500).json({
        message: err.message || 'Internal server error.'
    });
});

export default app;