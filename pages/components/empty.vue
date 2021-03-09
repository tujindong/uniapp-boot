<template>
	<view v-if="!dataSource.length" class="empty">
		<image src="../../static/images/img_empty.png" mode=""></image>
		<view>{{tipsText}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			tipsText: {
				type: String,
				default: "暂无数据"
			},
			dataSource: {
				type: Array,
				default: []
			}
		},
	}
</script>

<style lang="scss" scoped>
	.empty {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		text-align: center;
		image{
			margin-top: 400rpx;
			display: inline-block;
			width: 300rpx;
			height: 300rpx;
		}
		>view{
			margin-top: 20rpx;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-placeholder;
		}
	}
</style>
