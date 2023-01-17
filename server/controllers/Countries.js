import database from "../db.js";

export function getTotalCasesPerCountry(request, response) {
    const { sort } = request.params;

    database.database.query(`
        SELECT * FROM Countries_Statistics
        ORDER BY total_cases ${sort};
    `, (error, results, fields) => {
        if (error) {
            console.log(error)
            return
        }

        if (results) {
            const total_cases = JSON.parse(JSON.stringify(results));

            response.status(200).json(total_cases)
        }
    })
}