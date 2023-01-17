import axios from "axios";
import dotenv from "dotenv";
import database from "../db.js";

let coronavirusAppAPIKey;
let coronavirusAppBaseURI;
let locations;

coronavirusAppAPIKey = process.env.CORONAVIRUS_DOT_APP_API_KEY;
coronavirusAppBaseURI = process.env.CORONAVIRUS_DOT_APP_BASE_URI;

dotenv.config();

export function getLocations(request, response) {
    locations = database.database.collection("Locations").find({}).project({ "_id": 0 }).toArray()
        .then(storedLocations => {
            if (storedLocations.length === 0) {
                axios({
                    method: "GET",
                    url: `${coronavirusAppBaseURI}/get-places`,
                    headers: {
                        "authorization": `Bearer ${coronavirusAppAPIKey}`,
                        "content-type": "application/json"
                    }
                })
                    .then(feedback => {
                        let data = feedback.data.data;

                        data = data.filter(location => {

                            if (!(location.country === "US")) return true;
                        })

                        database.database.collection("Locations").insertOne({ locations: data })

                        response.json({ data: data })
                    })
            } else {
                console.log("Working...")
                response.json({ data: storedLocations[0].locations })
            }
        })
}