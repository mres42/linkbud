import db from '../../../../config/database.js';

export async function findByEmail(email) {
    const [result] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    return result[0];
}