import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'Authentication required'
        });
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
        return res.status(401).json({
            message: 'Invalid authorization header'
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();
    } catch {
        return res.status(401).json({
            message: 'Invalid or expired token'
        });
    }
}