import * as linkListService from '../service/link-list.service.js';

export async function create(req, res) {
    const { name, description, slug, isPublic, links } = req.body;
    // get from jwt the userId
    const userId = req.user.userId;

    const linkList = await linkListService.create(userId, name, description, slug, isPublic, links);

    return res.status(201).json(linkList);
}

export async function findByUserId(req, res) {
    const id = req.user.userId;

    const linkLists = await linkListService.findByUserId(id);

    return res.status(200).json(linkLists);
}