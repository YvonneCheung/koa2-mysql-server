const IS = require('is');

const Utils = {

    /**
   * @param {Object} params
   * @param {Array} filterArr
   */
    contain (params, filterArr) {
        if (IS.object(params) && IS.array(filterArr)) {
            const data = {};
            filterArr.forEach(e => {
                const val = params[e];
                if (!IS.undefined(val) && !IS.null(val) && !IS.empty(val) || IS.array.empty(val)) {
                    data[e] = val;
                }
            });
            return data;
        }
        return params;
    },
    filter (params, filterArr) {
        const data = JSON.parse(JSON.stringify(params));
        if (IS.object(data) && IS.array(filterArr)) {
            filterArr.forEach(e => {
                const val = data[e];
                if (!IS.undefined(val) && !IS.null(val) && !IS.empty(val) || IS.array.empty(val)) {
                    delete data[e];
                }
            });
        }
        return data;
    },

    // 格式化查询条件
    formatWhere (data, fuzzy) {
        // 精确条件
        const exactData = Object.entries(this.filter(data, fuzzy));
        const exactArr = exactData.map(item=>{
            item[1] = JSON.stringify(item[1]);
            item = item.join('=');
            return item;
        });
        // 模糊条件
        const fuzzyData = Object.entries(this.contain(data, fuzzy));
        const fuzzyArr = fuzzyData.map(item=>{
            item[1] = JSON.stringify( `%${item[1]}%`);
            item = item.join(' LIKE ');
            return item;
        });
        const arr = exactArr.concat(fuzzyArr).join(' AND ');
        return arr;
    },
    // 格式化插入条件
    formatInsert (body) {
        const data = {
            fields: '',
            values: '',
        };
        data.fields = Object.keys(body).join(',');
        const arr = Object.values(body).map(item=>{
            item = JSON.stringify(item);
            return item;
        });
        data.values = arr.join(',');
        return data;
    },
    // 格式化更新条件
    formatUpdate (body) {
        const entries = Object.entries(body);
        const arr = entries.map(item=>{
            item[1] = JSON.stringify(item[1]);
            item = item.join('=');
            return item;
        });
        return arr.join(', ');
    },
};

module.exports = Utils;
