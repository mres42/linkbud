import * as authRepository from '../repository/auth.repository.js';
import bcrypt from 'bcrypt';
import { AppError } from '../../../shared/AppError.js';
import { findByEmail } from '../../user/repository/user.repository.js';
import jwt from 'jsonwebtoken';

export async function register(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    try {
        return await authRepository.register(email, passwordHash);
    } catch (error) {
        // since email is UNIQUE in table check for the conflict error message
        // can add or also do a user.repository query to check if already exists
        if (error.code === 'ER_DUP_ENTRY') {
            throw new AppError('Email is already registered.', 409);
        }

        throw error;
    }
}

export async function login(email, password) {
    const user = await findByEmail(email);

    if (!user) {
        throw new AppError('Invalid email or password.', 401);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new AppError('Invalid email or password.', 401);
    }

    const token = jwt.sign(
        {
            userId: user.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '4h'
        }
    );

    return {
        user: {
            id: user.id,
            email: user.email
        },
        token: token
    };
}