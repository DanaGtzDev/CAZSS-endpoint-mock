import express from "express";
import { InnvoiceController } from "../controllers/innvoice.controller";

const router = express.Router();

router.post("/acct/account-functions/document-management-bs/v2/getDocumentByMediaTypeByDocumentID",InnvoiceController.getInnvoiceById)
router.post("/acct/account-functions/document-management-bs/v2/getDocumentByMediaTypeByDocumentID/info",InnvoiceController.getInvoiceInfoByInvoiceId)

export default router;