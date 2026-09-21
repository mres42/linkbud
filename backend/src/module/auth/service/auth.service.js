import * as authRepository from '../repository/auth.repository.js';
import bcrypt from 'bcrypt';
import { AppError } from '../../../shared/AppError.js';

export async function register(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    try {
        return await authRepository.register(email, passwordHash);
    } catch (error) {
        // since email is UNIQUE in table check for the conflict error message
        // can add or also do a user.repository query to check if already exists
        if (error.code === 'ER_DUP_ENTRY') {
            throw new AppError(
                'Email is already registered.',
                409
            );
        }

        throw error;
    }
}