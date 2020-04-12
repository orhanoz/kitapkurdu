var mysql = require('mysql');
var sequelize = require('sequelize');
var sequelizeAuto = require('sequelize-auto');

/* 
 TABLES 
  area : 
*/
module.exports = {

    //Remote - Heroku
    hostname: 'eu-cdbr-west-02.cleardb.net',
    username: 'b82685b8b6885b',
    password: 'f7fb688a',
    database: 'heroku_89d5ac14fc58b20',

    syncModels: function () {
        var auto = new sequelizeAuto(this.database, this.username, this.password, {
            host: this.hostname,
            dialect: 'mysql',
            directory: false, // prevents the program from writing to disk5
            port: 3306,
            directory: "./models",
            additional: {
                timestamps: false
            },
            tables: [
                'user'
            ]
    
        });

        auto.run(function (err) {
            try {
                if (err) throw err;
            } catch (error) {
                console.log('Exception ->    ./config/database.js -> syncModels()');
            }
        });
    }
}