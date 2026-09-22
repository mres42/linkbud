import db from '../../../../config/database.js';

export async function create(userId, name, description, slug, isPublic) {
    const [result] = await db.query(
        'INSERT INTO link_lists (user_id, name, description, slug, is_public) VALUES (?, ?, ?, ?, ?)', [userId, name, description, slug, isPublic]
    )

    return result.insertId;
}

export async function findById(id) {
    const [result] = await db.query('SELECT * FROM link_lists WHERE id = ?', [id]);

    return result[0];
}