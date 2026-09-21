import {Router} from 'express';
import * as userController from '../controller/user.controller.js';
import { authenticateToken } from '../../../middleware/auth.middleware.js';

const router = Router();

// second parameter goes middleware
router.get('/', authenticateToken, userController.findAll);

export default router;