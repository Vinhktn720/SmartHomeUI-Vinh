import express from "express";
import { Device } from '../models/devices.model.js';
import { getDevices,postDevices } from '../controllers/devices.controllers.js';
const router = express.Router();

router.get("/", getDevices);
router.post("/", postDevices);

export default router;