import * as userService from '../service/user.service.js';

export async function findAll(req, res) {
    const users = await userService.findAll();
    
    return res.status(200).json(users);
}