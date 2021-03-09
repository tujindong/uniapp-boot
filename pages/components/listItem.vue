<template>
	<view class="listItem">
		<!-- 搜索部分 -->
		<view v-if="isSearch" class="navBar_wrap">
			<view class="navBar">
				<view class="search" :style="{width: isFilter ? '90%' : '100%'}">
					<u-search 
						:placeholder="placeholder"
						:show-action="false" 
						bg-color="#f8f8f8" 
						clearabled 
						v-model="searchValue"
						@search="handleSearchConfrim"
						@clear="handleSearchClear"
					></u-search>
				</view>
				<view class="action" :style="{width: isFilter ? '10%' : '0'}">
					<image src="../../static/images/icon_filter.png" @click="isFilterShow = true"></image>
				</view>
			</view>
		</view>
		
		<!-- tab切换部分 -->
		<view class="tab_wrap" :style="{marginTop: isSearch ? '90rpx' : '0'}">
			<u-tabs :list="tabs" :is-scroll="false" active-color="#5a9fdd" :current="current" @change="handleTabsChange"></u-tabs>
		</view>

		<!-- 列表部分 -->
		<view class="list" :style="{paddingTop: listTop}">
			<slot name="item"/>
			<LoadMore :isFinish="isFinish" :dataSource="dataSource" />
		</view>
		<Empty :dataSource="dataSource" />
		<Loading :isLoading="isLoading"></Loading>

		<!-- 高级筛选 -->
		<u-popup v-model="isFilterShow" mode="right" z-index="200">
			<view class="filter_wrap">
				<view class="content_area">
					筛选内容
				</view>
				<view class="btn_area">
					<view class="btn reset" @click="handleFilterReset">重置</view>
					<view class="btn confirm" @click="handleFilterConfirm">确定</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	/**
	 * dataSource:（必填）数据源
	 * isFinish: (必填) 列表是否加载完全
	 * isLoading:（必填）列表刷新前loading动画
	 * isSearch:（选填）默认不显示搜索框
	 * isFilter: （选填）默认不显示高级搜索
	 * tabList: (选填) 当数组长度不为0 显示tab切换，格式[{value: "", text: ""}]
	 * currentTab: (当tabList长度不为0必填) 为初始化当前的tab值，格式[{key: "", value: ""}]
	 * */
	export default {
		data() {
			return {
				isFilterShow: false,
				searchValue: "",
			}
		},

		props: {
			dataSource: {
				type: Array,
				default: []
			},
			isFinish: {
				type: Boolean,
				default: false
			},
			isLoading: {
				type: Boolean,
				default: false,
			},
			isSearch: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: "请输入标题搜索"
			},
			isFilter: {
				type: Boolean,
				default: false
			},
			tabList: {
				type: Array,
				default: [],
			},
			currentTab: {
				type: Object,
				default: {key: "", value: ""}
			}
		},
		
		onLoad() {
			
		},
		
		computed:{
			listTop() {
				if (this.isSearch && this.tabList.length) {
					return "180rpx"
				} else if (this.isSearch || this.tabList.length) {
					return "90rpx"
				} else {
					return "0"
				}
			},
			
			tabs() {
				return this.tabList.map(item => {
					return {name: item.text}
				})
			},
			
			current() {
				return this.currentTab.value
			},
		},

		methods: {
			/**
			 * 基本搜索确定
			 * */
			handleSearchConfrim(value) {
				this.$emit("handleSearchConfrim", value)
			},
			
			/**
			 * 基本搜索清空
			 * */
			handleSearchClear(value) {
				this.$emit("handleSearchClear", "")
			},
			
			/**
			 * tab切换
			 * */
			handleTabsChange(value) {
				this.$emit("handleTabsChange", value, this.tabList)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.listItem {
		padding: 0 20rpx 20rpx;

		.navBar_wrap {
			position: fixed;
			top: var(--window-top);
			left: 0;
			width: 710rpx;
			padding: 0 20rpx;
			height: 90rpx;
			z-index: 101;
			background: #ffffff;

			.navBar {
				display: flex;
				align-items: center;
				width: 100%;
				height: 100%;

				.action {
					display: flex;
					align-items: center;
					justify-content: flex-end;

					image {
						width: 60rpx;
						height: 60rpx;
					}
				}
			}
		}

		.tab_wrap{
			position: fixed;
			width: 100%;
			top: var(--window-top);
			left: 0;
			z-index: 102;
			height: 90rpx;
		}

		.filter_wrap {
			z-index: 200;
			position: relative;
			width: 600rpx;
			height: calc(100% - var(--window-top));
			padding-top: var(--window-top);

			.btn_area {
				display: flex;
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 80rpx;
				border-top: 1rpx solid $uni-bg-color-grey;

				.btn {
					display: flex;
					align-items: center;
					justify-content: center;
					flex: 1;
					font-size: $uni-font-size-base;

					&.reset {
						color: $uni-color-primary;
					}

					&.confirm {
						background-color: $uni-color-primary;
						color: #ffffff;
					}
				}
			}
		}
	}
</style>
