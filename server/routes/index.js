import express from "express";
import { User } from "../controllers/User";

const router = express.Router()

router.get('/user/all', User.getUsersList)
router.post('/user/register', User.register)
router.post('/user/login', User.login)


export default router