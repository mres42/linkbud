import db from '../../../../config/database.js';

export async function register(email, passwordHash) {
    const [result] = await db.query(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [email, passwordHash]
    )

    return {
        id: result.insertId,
        email
    }
}