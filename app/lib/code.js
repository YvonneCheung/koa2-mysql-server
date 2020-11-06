const Code = {
    success (res) {
        return {
            code: 0,
            message: '成功',
            data: res,
        };
    },
    error (code) {
        return {
            code: code,
            message: this[code] || '',
        };
    },
    0: '成功',
    9999: '服务器未知错误',
    10000: '数据有误',
    10001: '参数错误',
};
module.exports = Code;
