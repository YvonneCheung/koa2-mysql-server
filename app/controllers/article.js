const code = require('../lib/code.js');
const Utils = require('../lib/utils');
const Model = require('../model/index');
// const jwt = require('jsonwebtoken')
// const moment = require('moment')
const tableName = 'xm_articles';

exports.get = async (ctx, next) => {
    const condition = {
        table: tableName,
        fuzzy: [ 'article_title', 'article_content' ],
        sort: true,
    };
    try {
        await Model.find(ctx, condition).then(res=>{
            if (res) {
                ctx.body = code.success(res);
            } else {
                ctx.body = code.error(10000);
            }
        }).catch(() => {
            ctx.body = code.error(10001);
        });
    } catch (error) {
        ctx.throw(500);
    }
};

exports.add = async (ctx, next) => {
    try {
        await Model.add(ctx, tableName).then(res=>{
            if (res) {
                ctx.body = code.success();
            } else {
                ctx.body = code.error(10000);
            }
        }).catch(err => {
            ctx.body = code.error(10001);
        });
    } catch (error) {
        ctx.throw(500);
    }
};

exports.update = async (ctx, next) => {
    try {
        await Model.update(ctx, tableName).then(res=>{
            if (res) {
                ctx.body = code.success();
            } else {
                ctx.body = code.error(10000);
            }
        }).catch(err => {
            ctx.body = code.error(10001);
        });
    } catch (error) {
        ctx.throw(500);
    }
};

exports.delete = async (ctx, next) => {
    try {
        await Model.update(ctx, tableName, {'publish': '2', 'delete_flag': 1}).then(res=>{
            if (res) {
                ctx.body = code.success();
            } else {
                ctx.body = code.error(10000);
            }
        }).catch(err => {
            ctx.body = code.error(10001);
        });
    } catch (error) {
        ctx.throw(500);
    }
};

exports.publish = async (ctx, next)=>{
    try {
        await Model.update(ctx, tableName, {'publish': '0'}).then(res=>{
            if (res) {
                ctx.body = code.success();
            } else {
                ctx.body = code.error(10000);
            }
        }).catch(err => {
            ctx.body = code.error(10001);
        });
    } catch (error) {
        ctx.throw(500);
    }
};
exports.draft = async (ctx, next)=>{
    try {
        await Model.update(ctx, tableName, {'publish': '1'}).then(res=>{
            if (res) {
                ctx.body = code.success();
            } else {
                ctx.body = code.error(10000);
            }
        }).catch(err => {
            ctx.body = code.error(10001);
        });
    } catch (error) {
        ctx.throw(500);
    }
};
