/**
 * 各个分模块的路由配置
 * @param:
 * 	path: 需要和pages.json中的地址对应
 *  aliasPath: h5端需要在首页加上别名并设置为/
 * */
const mine = [{
		path: '/pages/view/mine/mine',
		aliasPath: '/pages/view/mine/mine',
		name: 'mine',
		meta: {
			title: '我的',
		},
	},
]
export default mine
