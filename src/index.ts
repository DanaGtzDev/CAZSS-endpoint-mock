import express, { Request, Response } from "express";
import gcpRoutes from "./routes/gcp.routes"
import innvoiceRoutes from "./routes/innvoice.routes"
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

//app.use(express.json()); // Middleware para parsear JSON
// Middleware para recibir el cuerpo como texto
app.use(bodyParser.text({ type: "application/xml" }));

app.use("/gcp", gcpRoutes);
app.use("/innvoice", innvoiceRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
