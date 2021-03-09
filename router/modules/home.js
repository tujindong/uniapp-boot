/**
 * 各个分模块的路由配置 -- 主页
 * @param:
 * 	path: 需要和pages.json中的地址对应
 *  aliasPath: h5端需要在首页加上别名并设置为/
 * */
const home = [{
		path: '/pages/view/home/home',
		aliasPath: '/',
		name: 'home',
		meta: {
			title: '首页',
		},
	},
	{
		path: '/pages/home/list',
		name: 'list',
		meta: {
			title: '列表',
		},
	},
]
export default home
