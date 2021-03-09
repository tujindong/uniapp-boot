/**
 * 各个分模块的路由配置
 * @param:
 * 	path: 需要和pages.json中的地址对应
 *  aliasPath: h5端需要在首页加上别名并设置为/
 * */
const exception = [{
		path: '/pages/view/exception/404',
		aliasPath: '/pages/view/exception/404',
		name: '404',
		meta: {
			title: '404',
		},
	},
]
export default exception
