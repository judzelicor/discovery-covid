import database from "../db.js";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({path: ".env"});

let coronavirusAppAPIKey;
let coronavirusAppBaseURI;
let worldwideStatistics;

coronavirusAppAPIKey = process.env.CORONAVIRUS_API_KEY;
coronavirusAppBaseURI = process.env.CORONAVIRUS_API_BASE_URL;


async function getWorldwideStatistics(request, response) {
    const worldwideStatistics = database.database.query(`
        SELECT * FROM Worldwide_Summary_Statistics
    ` , (error, results, fields) => {
        if (error) {
            console.log(error)
            return;
        }

        response.status(200).json({summary: JSON.parse(JSON.stringify(results))})
        
        // axios({
        //     method: "GET",
        //     url: `${coronavirusAppBaseURI}/get-places`,
        //     headers: {
        //         "authorization": `Bearer ${coronavirusAppAPIKey}`,
        //         "content-type": "application/json"
        //     }
        // })
        //     .then(reply => {
        //         let totalVaccinations;
        //         let totalCases;
        //         let totalDeaths;
        //         let totalRecoveries;

        //         totalCases = 0;
        //         totalDeaths = 0;
        //         totalRecoveries = 0;
        //         totalVaccinations = 0;

        //         const data = reply.data.data;

        //         for (let i = 0; i < data.length; i++) {
        //             console.log(data[i])
        //             totalCases += data[i].infected;
        //             totalDeaths += data[i].dead;
        //             totalRecoveries += data[i].recovered;
        //             totalVaccinations += data[i].vaccinated;
        //         }

        //         response.json({ summary: [{totalCases}, {totalVaccinations}, {totalDeaths}, {totalRecoveries} ] })
        //     })
    })
    
    // worldwideStatistics = database.database.collection("Worldwide").find().project({ "_id": 0 }).toArray().then(statistics => {
    //     if (statistics.length > 0) {
    //         response.json({ data: statistics[0] })
    //     }
    //     else {

    //         axios({
    //             method: "GET",
    //             url: `${coronavirusAppBaseURI}/get-places`,
    //             headers: {
    //                 "authorization": `Bearer ${coronavirusAppAPIKey}`,
    //                 "content-type": "application/json"
    //             }
    //         })
    //             .then(reply => {
    //                 let totalVaccinations;
    //                 let totalCases;
    //                 let totalDeaths;
    //                 let totalRecoveries;

    //                 totalCases = 0;
    //                 totalDeaths = 0;
    //                 totalRecoveries = 0;
    //                 totalVaccinations = 0;

    //                 const data = reply.data.data;

    //                 for (let i = 0; i < data.length; i++) {
    //                     console.log(data[i])
    //                     totalCases += data[i].infected;
    //                     totalDeaths += data[i].dead;
    //                     totalRecoveries += data[i].recovered;
    //                     totalVaccinations += data[i].vaccinated;
    //                 }

    //                 database.database.collection("Worldwide").insertOne({
    //                     totalCases,
    //                     totalDeaths,
    //                     totalVaccinations,
    //                     totalRecoveries
    //                 })

    //                 response.json({ summary: { totalCases, totalVaccinations, totalDeaths, totalRecoveries } })
    //             })
    //     }
    // })
}

export default getWorldwideStatistics;

