import { Request, Response } from "express";
import { GcpService } from "../services/gcp.service";

export class GcpController{
    static clearGcpCache(req: Request, res: Response){
        const gcpId = parseInt(req.params.id);
        const operationResult = GcpService.clearGCPCache(gcpId)
        res.status(operationResult).end();
    }
}