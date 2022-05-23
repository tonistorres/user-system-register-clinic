import { Router } from 'express';
import UserController from '../controllers/user.system.controller';

const userController = new UserController();

const router = Router();

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getById)

export default router;