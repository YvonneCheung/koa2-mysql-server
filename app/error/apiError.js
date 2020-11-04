/**
 * API错误名称
 */
var ApiError = {};

ApiError.UNKNOW_ERROR = "UNKNOW_ERROR";
ApiError.SUCCESS = "SUCCESS";

/* 参数错误：10001-19999 */
ApiError.PARAM_IS_INVALID = 'PARAM_IS_INVALID';
ApiError.PARAM_IS_BLANK = 'PARAM_IS_BLANK';
ApiError.PARAM_TYPE_BIND_ERROR = 'PARAM_TYPE_BIND_ERROR';
ApiError.PARAM_NOT_COMPLETE = 'PARAM_NOT_COMPLETE';

/* 用户错误：20001-29999*/
ApiError.USER_NOT_LOGGED_IN = 'USER_NOT_LOGGED_IN';
ApiError.USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
ApiError.USER_ACCOUNT_FORBIDDEN = 'USER_ACCOUNT_FORBIDDEN';
ApiError.USER_NOT_EXIST = 'USER_NOT_EXIST';
ApiError.USER_HAS_EXISTED = 'USER_HAS_EXISTED';

/* 业务错误：30001-39999 */
ApiError.SPECIFIED_QUESTIONED_USER_NOT_EXIST = 'SPECIFIED_QUESTIONED_USER_NOT_EXIST';

/* 系统错误：40001-49999 */
ApiError.SYSTEM_INNER_ERROR = 'SYSTEM_INNER_ERROR';

/* 数据错误：50001-599999 */
ApiError.RESULE_DATA_NONE = 'RESULE_DATA_NONE';
ApiError.DATA_IS_WRONG = 'DATA_IS_WRONG';
ApiError.DATA_ALREADY_EXISTED = 'DATA_ALREADY_EXISTED';

/* 接口错误：60001-69999 */
ApiError.INTERFACE_INNER_INVOKE_ERROR = 'INTERFACE_INNER_INVOKE_ERROR';
ApiError.INTERFACE_OUTTER_INVOKE_ERROR = 'INTERFACE_OUTTER_INVOKE_ERROR';
ApiError.INTERFACE_FORBID_VISIT = 'INTERFACE_FORBID_VISIT';
ApiError.INTERFACE_ADDRESS_INVALID = 'INTERFACE_ADDRESS_INVALID';
ApiError.INTERFACE_REQUEST_TIMEOUT = 'INTERFACE_REQUEST_TIMEOUT';
ApiError.INTERFACE_EXCEED_LOAD = 'INTERFACE_EXCEED_LOAD';

/* 权限错误：70001-79999 */
ApiError.PERMISSION_NO_ACCESS = 'PERMISSION_NO_ACCESS';
ApiError.INVALID_TOKEN = 'INVALID_TOKEN';

/**
 * API错误名称对应的错误信息
 */
const error_map = new Map();

error_map.set(ApiError.SUCCESS, { code: 0, message: '成功' });
error_map.set(ApiError.UNKNOW_ERROR, { code: -1, message: '未知错误' });
/* 参数错误：10001-19999 */
error_map.set(ApiError.PARAM_IS_INVALID, { code: 10001, message: '参数无效' });
error_map.set(ApiError.PARAM_IS_BLANK, { code: 10002, message: '参数为空' });
error_map.set(ApiError.PARAM_TYPE_BIND_ERROR, { code: 10003, message: '参数类型错误' });
error_map.set(ApiError.PARAM_NOT_COMPLETE, { code: 10004, message: '参数缺失' });
/* 用户错误：20001-29999*/
error_map.set(ApiError.USER_NOT_LOGGED_IN, { code: 20001, message: '用户未登录' });
error_map.set(ApiError.USER_LOGIN_ERROR, { code: 20002, message: '账号不存在或密码错误' });
error_map.set(ApiError.USER_ACCOUNT_FORBIDDEN, { code: 20003, message: '账号已被禁用' });
error_map.set(ApiError.USER_NOT_EXIST, { code: 20004, message: '用户不存在' });
error_map.set(ApiError.USER_HAS_EXISTED, { code: 20005, message: '用户已存在' });
/* 业务错误：30001-39999 */
error_map.set(ApiError.SPECIFIED_QUESTIONED_USER_NOT_EXIST, { code: 30001, message: '某业务出现问题' });
/* 系统错误：40001-49999 */
error_map.set(ApiError.SYSTEM_INNER_ERROR, { code: 40001, message: '系统繁忙，请稍后重试' });
/* 数据错误：50001-599999 */
error_map.set(ApiError.RESULE_DATA_NONE, { code: 50001, message: '数据未找到' });
error_map.set(ApiError.DATA_IS_WRONG, { code: 50002, message: '数据有误' });
error_map.set(ApiError.DATA_ALREADY_EXISTED, { code: 50003, message: '数据已存在' });
/* 接口错误：60001-69999 */
error_map.set(ApiError.INTERFACE_INNER_INVOKE_ERROR, { code: 60001, message: '内部系统接口调用异常' });
error_map.set(ApiError.INTERFACE_OUTTER_INVOKE_ERROR, { code: 60002, message: '外部系统接口调用异常' });
error_map.set(ApiError.INTERFACE_FORBID_VISIT, { code: 60003, message: '该接口禁止访问' });
error_map.set(ApiError.INTERFACE_ADDRESS_INVALID, { code: 60004, message: '接口地址无效' });
error_map.set(ApiError.INTERFACE_REQUEST_TIMEOUT, { code: 60005, message: '接口请求超时' });
error_map.set(ApiError.INTERFACE_EXCEED_LOAD, { code: 60006, message: '接口负载过高' });
/* 权限错误：70001-79999 */
error_map.set(ApiError.PERMISSION_NO_ACCESS, { code: 70001, message: '无访问权限' });
error_map.set(ApiError.INVALID_TOKEN, { code: 70002, message: '无效token' });

//根据错误名称获取错误信息
ApiError.getErrorInfo = (error_name) => {

    var error_info;

    if (error_name) {
        error_info = error_map.get(error_name);
    }

    //如果没有对应的错误信息，默认'未知错误'
    if (!error_info) {
        error_name = UNKNOW_ERROR;
        error_info = error_map.get(error_name);
    }

    return error_info;
}

//返回正确信息
ApiError.getSuccessInfo = (data) => {

    var success_info;
    let name = 'SUCCESS';
    success_info = error_map.get(name);
    if (data) {
        success_info.data = data
    }

    return success_info;
}

module.exports = ApiError;
