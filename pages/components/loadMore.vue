<template>
	<view class="loadMore">
		<view v-if="isFinish && dataSource.length" class="noMore">-- 我是有底线的 --</view>
		<view v-if="!isFinish" class="circle_wrap">
			<view class="circle"></view>
		</view>
	</view>
</template>

<script>
	/**
	 * 为CSS3特效显示加载中样式的组价
	 * 跳动圆圈的颜色样式默认为uni.scss中主要颜色
	 * */
	export default {
		data() {
			return {}
		},

		props: {
			isFinish: {
				type: Boolean,
				default: false
			},
			dataSource: {
				type: Array,
				default: []
			}
		},
	}
</script>

<style lang="scss" scoped>
	.loadMore {
		.noMore {
			width: 100%;
			height: 60upx;
			line-height: 60upx;
			text-align: center;
			font-size: 24upx;
			color: $uni-text-color-grey;
		}

		.circle_wrap {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 60upx;

			.circle {
				width: 30upx;
				height: 30upx;
				background: $uni-color-primary;
				border-radius: 50%;
				-webkit-animation: fading_circle 1s ease-out infinite alternate;
				animation: fading_circle 1s ease-out infinite alternate;
			}

			@-webkit-keyframes fading_circle {
				0% {
					transform: scale(1.5);
					opacity: 0.2;
				}

				100% {
					transform: scale(0.1);
					opacity: 1;
				}
			}

			@keyframes fading_circle {
				0% {
					transform: scale(1.5);
					opacity: 0.2;
				}

				100% {
					transform: scale(0.1);
					opacity: 1;
				}
			}
		}
	}
</style>
