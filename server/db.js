import fs from "fs";
import mysql from "mysql";
import {fileURLToPath} from "url";
import {dirname} from "path";
import dotenv from "dotenv";

dotenv.config({path: ".env"});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


class MySQL {
    constructor() {
        this.mysql = mysql;
        this.certificate = fs.readFileSync(__dirname + "/certificates/DiscoveryCovidDB-ca-certificate.crt");
        this.host = process.env.MYSQL_DATABASE_HOST;
        this.password = process.env.MYSQL_DATABASE_PASSWORD;
        this.database_name = process.env.MYSQL_DATABASE_NAME;
        this.port = process.env.MYSQL_DATABASE_PORT;
        this.user = process.env.MYSQL_DATABASE_USERNAME;
        this.database = 
                            this.mysql.createConnection({
                                host: process.env.MYSQL_DATABASE_HOST,
                                user: process.env.MYSQL_DATABASE_USERNAME,
                                password: process.env.MYSQL_DATABASE_PASSWORD,
                                database: process.env.MYSQL_DATABASE_NAME,
                                port: this.port,
                                ssl: {
                                    ca: this.certificate
                                }
                            });
    }

    connect() {
        this.database.connect((error) => {
            if (error) {
                console.log(error);
            }

            else {
                console.log("Successfully connected to DiscoveryCovidDB.")
            }
        });
    }
}

export default new MySQL();