/**
 * 各个分模块的路由配置
 * @param:
 * 	path: 需要和pages.json中的地址对应
 *  aliasPath: h5端需要在首页加上别名并设置为/
 * */
const exception = [{
		path: '/pages/view/demo/demoList',
		aliasPath: '/pages/view/demo/demoList',
		name: 'demoList',
		meta: {
			title: 'demoList',
		},
	},
]
export default exception
