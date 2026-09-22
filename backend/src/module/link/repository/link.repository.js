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