import {Router} from 'express';
import * as linkListController from '../controller/link-list.controller.js';
import { authenticateToken } from '../../../middleware/auth.middleware.js';

const router = Router();

router.post('/', authenticateToken, linkListController.create);

export default router;