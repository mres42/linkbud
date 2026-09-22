import {Router} from 'express';
import { authenticateToken } from '../../../middleware/auth.middleware.js';
import * as linkController from '../controller/link.controller.js'

const router = Router();

router.get('/:linkListId', authenticateToken, linkController.findByUserAndListId);

export default router;