import express from "express";
const router = express.Router();
import emailController from "../controllers/emailControllers.js";
router.post("/email", emailController);
export default router;
