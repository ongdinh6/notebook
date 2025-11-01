import express from "express";
import { capitalize } from "@notebook/shared/utils/string.extension";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static file serving (if needed)
app.use(express.static(path.join(__dirname, "../../ui/dist"), { index: "index.html" }));

app.get("/", (_req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "../../ui/dist/index.html"));
});

// Define API endpoints
app.get("/api/hello", (req, res) => {
  res.type("application/json").json({ message: capitalize("hello, " + (req.query.name || "user")) });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
