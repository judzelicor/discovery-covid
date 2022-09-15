const axios = require("axios");
const mysql = require("../database.js");

async function generateCountriesDetails() {
    
    const countryHistories = [];

    const countries = await axios({
        method: "GET",
        url: `${ process.env.CORONAVIRUS_API_BASE_URL }/get-places`,
        headers: {
            "authorization": `Bearer ${ process.env.CORONAVIRUS_API_KEY }`,
            "content-type": "application/json"
        }
    }).then(response => {
        return response.data.data
    });

    for (let country in countries) {
        if (countries[country].country === "US") {
            continue;
        }

        const countryID = countries[country].id;
        const _countryHistory = {
            name: "",
            iso_code: "",
            total_cases: 0,
            total_vaccinations: 0,
            total_deaths: 0,
            total_recoveries: 0,
            longitude: 0.000,
            latitude: 0.000
        }

        const _countryTimelineData = await axios({
            method: "GET",
            url: `${ process.env.CORONAVIRUS_API_BASE_URL }/get-history?id=${ countryID }`,
            headers: {
                "authorization": `Bearer ${ process.env.CORONAVIRUS_API_KEY }`,
                "content-type": "application/json"
            }
        }).then(response => {
            return response.data.data
        })


        // for(let day in _countryTimelineData.history) {
        //     _countryHistory["total_cases"] += _countryTimelineData.history[day].sick;
        //     _countryHistory["total_vaccinations"] += _countryTimelineData.history[day].vaccinated;
        //     _countryHistory["total_deaths"] += _countryTimelineData.history[day].dead; 
        //     _countryHistory["total_recoveries"] += _countryTimelineData.history[day].recovered
        // }
        _countryHistory["total_cases"] = countries[country].infected;
        _countryHistory["total_vaccinations"] = countries[country].vaccinated;
        _countryHistory["total_deaths"] = countries[country].dead; 
        _countryHistory["total_recoveries"] = countries[country].recovered
        _countryHistory.name = countries[country].name
        _countryHistory.iso_code = countries[country].country
        _countryHistory.longitude = countries[country].longitude
        _countryHistory.latitude = countries[country].latitude
        _countryHistory.flag = `https://judzelicor.github.io/judzelicor/discovery-covid/country-flags-icons/${ countries[country].country }.svg`
        _countryHistory.last_updated = countries[country].lastUpdated

        database.database.query(`
        INSERT INTO Countries_Statistics (id, name, iso_code, longitude, latitude, last_updated, flag, total_cases, total_vaccinations, total_deaths, total_recoveries)
        VALUES ("${ parseInt(country) + 1 }", "${ _countryHistory.name }", "${ _countryHistory.iso_code }", ${ _countryHistory.longitude }, ${ _countryHistory.latitude }, "${ _countryHistory.last_updated }", "${ _countryHistory.flag }", ${ _countryHistory.total_cases }, ${ _countryHistory.total_vaccinations }, ${ _countryHistory.total_deaths }, ${ _countryHistory.total_recoveries })
        `, (error) => {
            console.log(error);
        })
    }

    // const countryHistory = await axios({
    //     method: "GET",
    //     url: `${ process.env.CORONAVIRUS_API_BASE_URL }/get-history`,
    //     headers: {
    //         "authorization": `Bearer ${ process.env.CORONAVIRUS_API_KEY }`,
    //         "content-type": "application/json"
    //     }
    // })

    // console.log(countryHistory)
        // const data = response.data.data;

        // for (datapoint in data) {
        //     const country = {
        //         id: parseInt(datapoint) + 1,
        //         name: data[datapoint].name,
        //         iso_code: data[datapoint].country,
        //         longitude: data[datapoint].longitude,
        //         latitude: data[datapoint].latitude,
        //         last_updated: data[datapoint].lastUpdated,
        //         flag: `https://judzelicor.github.io/judzelicor/discovery-covid/country-flags-icons/${ data[datapoint].country }.svg`,
        //     };

        //     database.database.query(`
        //     INSERT INTO Countries (id, name, iso_code, longitude, latitude, last_updated, flag)
        //     VALUES (${ country.id }, "${ country.name }", "${ country.iso_code }", ${ country.longitude }, ${ country.latitude }, "${ country.last_updated }", "${ country.flag }")
        //     `, (error) => {
        //         console.log(error)
        //     })
        // }
}

module.exports = {
    generateCountriesDetails
}