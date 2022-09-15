const express = require("express");

const router = express.Router();

const mysql = require("../database.js");

const { updateWorldSummaryStatistics } = require("../jobs/statistics.js");

router.get("/world", (request, response) => {

    updateWorldSummaryStatistics().then(() => {

        mysql.database.query("SELECT * FROM World_Statistics_Summary", (error, results) => {
            
            const data = JSON.parse(JSON.stringify(results));
            
            return response.json({ summary: data})

        });
    })

});

module.exports = router;