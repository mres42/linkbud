import * as linkRepository from '../repository/link.repository.js';

export async function findByUserAndListId(userId, linkListId) {
    return await linkRepository.findByUserAndListId(
        userId,
        linkListId
    );
}