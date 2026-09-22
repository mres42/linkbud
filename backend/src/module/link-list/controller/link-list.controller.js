import * as linkListService from '../service/link-list.service.js';

export async function create(req, res) {
    const { name, description, slug, isPublic, links } = req.body;
    const userId = req.user.userId;

    const linkList = await linkListService.create(userId, name, description, slug, isPublic, links);

    return res.status(201).json(linkList);
}