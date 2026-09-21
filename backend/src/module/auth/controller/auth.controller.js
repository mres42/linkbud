import * as authService from '../service/auth.service.js';

export async function register(req, res) {
    const {email, password} = req.body;
    const user = await authService.register(email, password);
    return res.status(200).json({
        msg: "User registered succesfully!",
        user: user
    });
}