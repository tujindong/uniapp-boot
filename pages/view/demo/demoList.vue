<template>
	<view class="page_content">
		<view class="list_wrap">
			<ListItem
				:dataSource="dataSource"
				:isLoading="isLoading"
				:isFinish="isFinish"
				:isSearch="isSearch"
				@handleSearchConfrim="handleSearchConfrim"
				@handleSearchClear="handleSearchClear"
				:isFilter="isFilter"
				:tabList="tabList"
				:currentTab="currentTab"
				@handleTabsChange="handleTabsChange"
			>
				<!-- 你需要重写的就是这块组件内部的样式，名字可自定义 -->
				<DemoItem
					slot="item"
					v-for="(item, index) in dataSource" 
					:item="item"
					:key="index"
				></DemoItem>
				
			</ListItem>
		</view>
	</view>
</template>

<script>
	/**
	 * 这是一个示例的页面，包含：
	 * 1.列表展示
	 * 2.列表加载更多
	 * 3.空列表展示
	 * 4.基本的按名称搜索（可选择配置，isSearch:true, searchKey: '搜索的字段名称'）
	 * 5.高级的筛选（可选择配置，isFilter:true）
	 * */
	import { listMixin } from "@/mixin/listMixin.js"
	import DemoItem from "./components/demoItem.vue"
	
	export default {
		data() {
			return {
				url: {
					list: "/cpVoteInfo/list"
				},
				isSearch: true,
				// isFilter: true,
				dataSource: [],
				searchKey: "voteTitle",
				isTabs: true,
				tabList: [
					{value: '0', text: '未开始'},
					{value: '1', text: '进行中'},
					{value: '2', text: '已完成'},
				],
				currentTab: {key: "voteStatus", value: "1"}
			};
		},
		
		mixins: [listMixin],
		
		components:{
			DemoItem
		},
	};
</script>

<style lang="scss">
	.page_content {
		padding-top: 20rpx;
	}
</style>
