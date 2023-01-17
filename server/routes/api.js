import express from "express";
import dotenv from "dotenv";
import axios from "axios";

import getWorldwideStatistics from "../controllers/Worldwide.js";

import { getLocations } from "../controllers/Locations.js";
import { getTotalCasesPerCountry } from "../controllers/Countries.js";

dotenv.config();

let router;
let baseURI;
let apiKey;

router = express.Router();

router.get("/locations", getLocations)

router.get("/statistics/worldwide", getWorldwideStatistics)

router.get("/countries/total_cases/:sort", getTotalCasesPerCountry)

export default router;