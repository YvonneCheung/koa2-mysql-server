const IS = require('is');

const Utils = {

  /**
   * @param {Object} params
   * @param {Array} filterArr
   */
  filter (params, filterArr) {
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
};

module.exports = Utils;
