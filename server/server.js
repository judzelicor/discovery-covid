import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import api from "./routes/api.js";
import database from "./db.js";

dotenv.config();

let app;
let port;

app = express();
port = process.env.PORT || 8080;
database.connect();

app.use(cors());

app.use("/api/v1", api);

app.listen(port, () => {
    console.log(`Server is listening on port: ${ port }`);
});