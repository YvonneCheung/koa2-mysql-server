const mysql = require('mysql');
const config = require('../../config/config');
const Utils = require('./utils');

const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
});

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        const newObj = {};
                        const data = rows.map(obj => {
                            for (const key in obj ) {
                                const newKey = Utils.toCamel(key);
                                newObj[newKey] = obj[key];
                            }
                            obj = newObj;
                            return obj;
                        });
                        resolve(data);
                    }
                    connection.end();
                });
            }
        });
    });
};
module.exports = {
    query,
};

