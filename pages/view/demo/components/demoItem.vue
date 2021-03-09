<template>
	<view class="item">
		<view class="title">{{item.voteTitle}}</view>
		<view class="desc">
			<view class="desc_item">
				<u-icon name="clock"></u-icon>
				<text>2020.01.01-2020.02.02</text>
			</view>
			<view class="desc_item">
				<u-icon name="tags"></u-icon>
				<text>高新区明珠大道星梦园E24栋</text>
			</view>
		</view>
		<view class="status">
			<text>进行中</text>
		</view>
	</view>
</template>

<script>
	/**
	 * 这是列表各个条目的样式，样式请按照设计图进行编写
	 * */
	export default {
		data() {
			return {
				
			};
		},
		
		props: {
			item: {
				type: Object,
				default: () => {
					return {}
				}
			}
		}
	};
</script>

<style lang="scss">
	.item{
		position: relative;
		height: 200rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		margin: 0 0 20rpx;
		padding: 40rpx 30rpx;
		.title{
			color: $uni-text-color;
			font-size: $uni-font-size-lg;
			font-weight: 500;
			height: 64rpx;
		}
		.desc{
			margin-top: 40rpx;
			color: $uni-text-color-greyDark;
			font-size: $uni-font-size-base;
			.desc_item{
				margin-bottom: 10rpx;
				text{
					margin-left: 10rpx;
				}
			}
		}
		.status{
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 120rpx;
			right: 30rpx;
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			border: 1rpx solid $uni-color-error;
			color: $uni-color-error;
			font-size: $uni-font-size-base;
		}
	}
</style>
