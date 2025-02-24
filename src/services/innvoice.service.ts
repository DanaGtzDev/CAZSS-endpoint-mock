import fs from "fs/promises";
export class InnvoiceService{
    static async getInnvoiceById(innvoiceID: number, innvoiceDT: string){
        const filePath = "resources/download.pdf";
        
        try {
            // Read the PDF file asynchronously
            const data = await fs.readFile(filePath);

            // Convert PDF buffer to Base64
            const base64Encoded = data.toString("base64");

            // Return Base64 string
            return base64Encoded
        } catch (error) {
            console.error("Error reading PDF:", error);
            return 500
        }
    }
}