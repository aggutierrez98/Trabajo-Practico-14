var mysql = require("mysql");
var settings = require("./settings.json");
var util = require("util");
var db;

function connectDataBase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function(err) {
            if (!err) {
                console.log("Conectado a base de datos");
            } else {
                console.log("Fallo al conectarse a la base de datos");
            }
        });
    }

    db.query = util.promisify(db.query);
    return db;
}

module.exports = connectDataBase();