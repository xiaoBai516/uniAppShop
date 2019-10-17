import Request from '../utils/http-request/request'
const baseUrl = 'https://apiwlzs.191cn.com.cn'
//接口
export default {
	 // 校验有无复诊资格
    getTreatQualification(data) {
        return requestData(`${baseUrl}/v1.0.0/doctwork/getTreatQualification`,data,"post");
    },
}
/**
 * 网络请求方法
 * @param url {string} 请求url
 * @param data {object} 参数
 * @param type 请求的类型
 * @returns {Promise}
*/

function requestData(url, data,type) {
	const http = new Request();
	return new Promise(function(resolve, reject) {
		http.request({
            url: url,
            data: data || {},
            method: type == undefined ? "GET" : "POST",
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                if (res.statusCode == 200) {
                    resolve(res.data);
                } else {
                    reject(res);
                }
            },
            fail: function(e) {
                reject(e);
                console.log('异常', e)
            }
        });
	});
}

// -为什么会请求两次？
// 总有些小白问这些很那啥的问题，有两种可能，一种是‘post三次握手’还有一种可能是本地访问接口时跨域请求，所以浏览器会先发一个option 去预测能否成功，然后再发一个真正的请求。