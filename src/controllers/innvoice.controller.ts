import { XMLParser } from "fast-xml-parser";
import { InnvoiceService } from "../services/innvoice.service";
import { Request, Response } from "express";

export class InnvoiceController{
    static async getInnvoiceById(req: Request, res: Response){
        const xmlParser = new XMLParser();
        try {
            const jsonObj = xmlParser.parse(req.body); // Convierte XML a JSON
            const entries = jsonObj.document_request.parameters.entry;
            
            const invoiceID = entries.find((e: any) => e.key === "invoiceID")?.value;
            const invoiceDT = entries.find((e: any) => e.key === "invoiceDT")?.value;
            
            const innvoice = await InnvoiceService.getInnvoiceById(invoiceID, invoiceDT)
            if(innvoice === 500){
                res.status(innvoice).end();
            }
            res.status(200).send(innvoice)
        } catch (error) {
            res.status(400).end();
        }
    }
}