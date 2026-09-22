import * as linkService from '../service/link.service.js';

export async function findByUserAndListId(req, res) {
    const userId = req.user.userId;
    const linkListId = parseInt(req.params.linkListId);

    const links = await linkService.findByUserAndListId(
        userId,
        linkListId
    );

    return res.status(200).json(links);
}