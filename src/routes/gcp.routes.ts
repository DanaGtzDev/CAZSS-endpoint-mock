import express from "express";
import { GcpController } from "../controllers/gcp.controller";

const router = express.Router();

router.post("/commercial-customers-service/customers/commercial/v3/customers/evict-cache/customerBaseInformation/:id", GcpController.clearGcpCache);


export default router;