const fs = require("fs");


class MySQL {
    constructor() {
        this.mysql = require("mysql");
        this.certificate = fs.readFileSync(__dirname + "/certificates/ashurbanipal-ca-certificate.crt");
        this.host = process.env.MYSQL_HOST;
        this.password = process.env.MYSQL_PASSWORD;
        this.database_name = process.env.MYSQL_DATABASE_NAME;
        this.user = process.env.MYSQL_USER;
        this.database = 
                            this.mysql.createConnection({
                                host: this.host,
                                user: this.user,
                                password: this.password,
                                database: this.database_name,
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

module.exports = new MySQL();