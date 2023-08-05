import express from 'express'
import { authUser } from '../controllers/userController.js';
const route=express.Router();

route.post('/auth',authUser)
// export default router;