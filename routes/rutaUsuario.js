import express from "express";
import { login, loginPost,ordenPendiente } from "../controllers/userControllers.js";

const router =express.Router();

router.get('/login',login);
router.post('/login',loginPost);

router.post('/ordenes-pendientes',ordenPendiente);

export default router;