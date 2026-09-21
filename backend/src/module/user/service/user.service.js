import { AppError } from '../../../shared/AppError.js';
import * as userRepository from '../repository/user.repository.js';

export async function findAll() {
    const users = await userRepository.findAll();

    if (!users) {
        throw new AppError("No users found.", 404);
    }

    return users;
}