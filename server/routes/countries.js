const express = require("express");

const router = express.Router();

const mysql = require("../database.js");

router.get("/:filter/:orderBy", (request, response) => {

    const filter = request.params.filter;
    const orderBy = request.params.orderBy;

    mysql.database.query(`
    SELECT * FROM Countries_Statistics
    ORDER BY ${ filter } ${ orderBy }
    `, (error, results) => {
        
        const data = JSON.parse(JSON.stringify(results));

        response.json({ countries: data });
    });

})

module.exports = router;