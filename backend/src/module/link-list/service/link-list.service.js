import * as linkListRepository from '../repository/link-list.repository.js';
import * as linkRepository from '../../link/repository/link.repository.js';

export async function create(
    userId,
    name,
    description,
    slug,
    isPublic,
    links
) {
    
    const linkListId = await linkListRepository.create(
        userId,
        name,
        description,
        slug,
        isPublic
    );

    for (const [index, link] of links.entries()) {
        await linkRepository.create(
            linkListId,
            link.name,
            link.url,
            index
        );
    }

    return await linkListRepository.findById(linkListId);
}
