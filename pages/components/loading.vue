<template>
	<transition name="fade">
		<view v-if="isLoading" class="loading_wrap">
			<view class="overlay"></view>
			<view class="loading" :style="{width: size+'px',height: size+'px'}">
				<view :style="{ backgroundColor:color,width:size-10+'px',height:size-10+'px'}" class="cube1"></view>
				<view :style="{ backgroundColor:color,width:size-10+'px',height:size-10+'px'}" class="cube2"></view>
			</view>
		</view>
	</transition>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default: '#5a9fdd'
			},
			size: {
				type: Number,
				default: 40
			},
			isLoading: {
				type: Boolean,
				default: false,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.loading_wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding-top: 500rpx;
		z-index: 100;

		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: $uni-bg-color-grey;
		}

		.loading {
			margin: 0 auto 50%;
			position: relative;
			transform: translate(-50%, -50%);

			.cube1,
			.cube2 {
				position: absolute;
				top: 0;
				left: 0;

				-webkit-animation: cubemove 1.8s infinite ease-in-out;
				animation: cubemove 1.8s infinite ease-in-out;
			}

			.cube2 {
				-webkit-animation-delay: -0.9s;
				animation-delay: -0.9s;
			}
		}
	}

	@-webkit-keyframes cubemove {
		25% {
			-webkit-transform: translateX(42px) rotate(-90deg) scale(0.5)
		}

		50% {
			-webkit-transform: translateX(42px) translateY(42px) rotate(-180deg)
		}

		75% {
			-webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5)
		}

		100% {
			-webkit-transform: rotate(-360deg)
		}
	}

	@keyframes cubemove {
		25% {
			transform: translateX(42px) rotate(-90deg) scale(0.5);
			-webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
		}

		50% {
			transform: translateX(42px) translateY(42px) rotate(-179deg);
			-webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
		}

		50.1% {
			transform: translateX(42px) translateY(42px) rotate(-180deg);
			-webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
		}

		75% {
			transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
			-webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
		}

		100% {
			transform: rotate(-360deg);
			-webkit-transform: rotate(-360deg);
		}
	}
</style>
