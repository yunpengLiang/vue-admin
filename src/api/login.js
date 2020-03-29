// service可以重命名
import service from "@/utils/request.js";
/**
 * 获取验证码的接口
 */
export function GetSms(data) {
    service.request({
        method: "post",
        url: "/getSms/",
        // data: data   在ES6中左边的data时后台接收的，右边的时接收的参数时，可以只写一个data
        data
    });
}

/**
 * 获取用户角色
 */

/**
 * 登录
 */

/**
 * 注册
 */
