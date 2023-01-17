import axios from "axios";
import database from "../db.js";

export async function updateWorldSummaryStatistics() {
    axios({
        method: "GET",
        url: `${ process.env.CORONAVIRUS_API_BASE_URL }/get-places`,
        headers: {
            "authorization": `Bearer ${ process.env.CORONAVIRUS_API_KEY }`,
            "content-type": "application/json"
        }
    })
    .then(response => {
        const data = response.data.data;

        const statistics = {
            totalCases: 0,
            totalVaccinations: 0,
            totalDeaths: 0,
            totalRecoveries: 0
        }
        
        for (datapoint in data) {
            statistics["totalCases"] += data[datapoint].infected
            statistics["totalVaccinations"] += data[datapoint].vaccinated
            statistics["totalDeaths"] += data[datapoint].dead
            statistics["totalRecoveries"] += data[datapoint].recovered
        }

        database.database.query(`
            UPDATE World_Statistics_Summary
            SET value = CASE id
                WHEN "1" THEN ${ statistics["totalCases"] }
                WHEN "2" THEN ${ statistics["totalVaccinations"] }
                WHEN "3" THEN ${ statistics["totalDeaths"] }
                WHEN "4" THEN ${ statistics["totalRecoveries"] }
            END
            WHERE ID in (1, 2, 3, 4)
        `, (error, results) => {
            if (error) {
                console.log(error);
            }
        })
    })
}