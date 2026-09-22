import db from '../../../../config/database.js';

export async function create(linkListId, name, url, position) {
    const [result] = await db.query(
        `INSERT INTO links
        (link_list_id, name, url, position)
        VALUES (?, ?, ?, ?)`,
        [linkListId, name, url, position]
    );

    return result.insertId;
}

export async function findByUserAndListId(userId, linkListId) {
    const [rows] = await db.query(
        `SELECT id, name, url, position
         FROM links
         WHERE link_list_id = ?
         AND link_list_id IN (
             SELECT id
             FROM link_lists
             WHERE id = ?
             AND user_id = ?
         )
         ORDER BY position ASC`,
        [linkListId, linkListId, userId]
    );

    return rows;
}