<template>
	<view class="page_content">
		mine
		<view @click="handleToGo404">跳往404</view>
		<u-tabbar :list="tabbar"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbar: [{
						iconPath: "/static/images/icon_home_light.png",
						selectedIconPath: "/static/images/icon_home_dark.png",
						text: '主页',
						count: 2,
						isDot: true,
						pagePath: "/pages/view/home/home"
					},
					{
						iconPath: "/static/images/icon_category_light.png",
						selectedIconPath: "/static/images/icon_category_dark.png",
						text: '我的',
						pagePath: "/pages/view/mine/mine"
					},
				]
			};
		},

		components: {

		},

		computed: {

		},

		onLoad() {
			
		},

		onReady() {},

		onShow() {

		},

		onReachBottom() {

		},

		methods: {
			handleToGo404() {
				this.$Router.push({ path: '/pages/view/exception/404', query: { plan: 'private' }})
			}
		},
	};
</script>

<style lang="scss">
</style>
