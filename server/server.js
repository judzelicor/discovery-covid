const express = require("express");

const path = require("path");

const app = express();

const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const port = process.env.PORT;

const database = require("./database.js");

const { 
    statistics,
    countries
} = require("./routes/index.js");

database.connect();

const { generateCountriesDetails } = require("./jobs/countries");

app.use("/api/statistics", statistics);
app.use("/api/countries", countries);

app.listen(port, () => {
    console.log(`DiscoveryCovid server is listening on PORT: ${ port }`);
});