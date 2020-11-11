'use strict';
const { resolveConfig } = require('prettier');
const db = require('../lib/db'); // 引入数据库方法
const Utils = require('../lib/utils');

const Model = {
    // 按条件分页查询
    find ( ctx, condition) {
        const page = Utils.contain(ctx.request.query, [ 'pageSize', 'pageNum' ]);
        const data = Utils.filter(ctx.request.query, [ 'pageSize', 'pageNum' ]);
        const where = Utils.formatWhere(data, condition.fuzzy);
        const offset = (page.pageNum - 1) * page.pageSize;
        let sql = `SELECT * FROM ${condition.table} ${where ? `WHERE ${where} AND delete_flag=0` : ''}`;
        sql += ` ORDER BY create_time ${condition.sort ? 'DESC' : 'ASC'}`;
        sql += ` limit ${offset},${page.pageSize};`;
        return new Promise((resolve, reject) => {
            db.query(sql).then(res=>{
                resolve(res);
            }).catch((error)=>{
                reject(error);
            });
        });
    },
    // 查询所有
    findAll (table) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${table} WHERE  delete_flag=0`).then(res=>{
                resolve(res);
            }).catch((error)=>{
                reject(error);
            });
        });
    },
    // 新增
    add (ctx, table) {
        const fv = Utils.formatInsert(ctx.request.body);
        const sql = `INSERT INTO ${table}(${fv.fields}) VALUES(${fv.values})`;
        return new Promise((resolve, reject) => {
            db.query(sql).then(res=>{
                resolve(res);
            }).catch((error)=>{
                reject(error);
            });
        });
    },
    // 修改
    update (ctx, table, field) {
        const fields = Utils.formatUpdate(field || ctx.request.body);
        const sql = `UPDATE ${table} SET ${fields} WHERE id=${ctx.request.query.id} AND delete_flag=0`;
        return new Promise((resolve, reject) => {
            db.query(sql).then(res=>{
                resolve(res);
            }).catch((error)=>{
                reject(error);
            });
        });
    },
};

module.exports = Model;
