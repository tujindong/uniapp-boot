import indexConfig from '@/config/index.config';

const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: indexConfig.baseUrl,
		loadingTime: 80000,
		originalData: false,
		header: {
			'content-type': 'application/json;charset = UTF-8'
		},
	});
	
	//请求拦截部分
	Vue.prototype.$u.http.interceptor.request = (config) => {
		config.header['X-Access-Token'] = uni.getStorageSync('token') || '123';
		return config;
	}
	
	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.code === 200) {
			return res
		} else {
			errorHandler(res.code)
		}
	},(error)=>{
		console.log("错误信息")
		console.log(error.response)
	}
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandler = (status) => {
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            console.log('未登录')
            break;
        // 403 token过期 清除token并跳转登录页
        case 403:
            console.log('登录过期')
            break;
        // 404请求不存在
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log('其他');
    }
};

export default { install }