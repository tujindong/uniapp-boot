export const listMixin = {
	data() {
		/**
		 * @param
		  * isQuery:是否进入页面就进行列表查询，设置为true可自定义筛选条件页面查询
		  * queryParams: 查询条件
		  * dataSource: 数据源
		  * ipagination: 配置分页的参数，如果是页面自定义，请在页面data内部重写
		  * isLoading: 显示加载中动画
		  * searchKey: 基本搜索的字段名
		  * searchValue: 基本搜索的输入值
		  * isSearch: 显示基本搜索
		  * isFilter: 显示高级搜索
		  * tabList: tabs的数据源 配置了数据默认添加tab切换
		 * */
		return {
			url: {
				list: "",
			},
			isQuery: false,
			queryParams: {
				
			},
			dataSource: [],
			ipagination: {
				pageNo: 1,
				pageSize: 10,
			},
			isFinish: true,
			isLoading: false,
			isSearch: false,
			isFilter: false,
			searchKey: "",
			searchValue: "",
			tabList: [],
			currentTab: {key: "", value: ""},
		};
	},
	
	onLoad() {
		if (!this.isQuery) {
			this.isLoading = true
			this.getList()
		}
	},
	
	onReachBottom() {
		if (!this.isFinish) this.getList()
	},
	
	methods: {
		/**
		 * 查询列表
		 * */
		getList() {
			const params = {
				...{},
				...this.ipagination
			}
			if (this.searchKey) params[this.searchKey] = this.searchValue
			if (this.currentTab.key) params[this.currentTab.key] = this.currentTab.value
			this.$u.get(this.url.list, params).then((res) => {
				if (res.code === 200) {
					const records = res.result.records;
					this.dataSource = [...this.dataSource, ...records]
					this.isFinish = true
					if (records.length < this.ipagination.pageSize) {
						this.isFinish = true
					} else {
						this.isFinish = false
						this.ipagination.pageNo = this.ipagination.pageNo + 1
					}
				} else {
					uni.showToast({
						title: res.message,
						icon: 'none',
						duration: 1500
					})
				}
			}).finally(() => {
				this.isLoading = false
			})
		},
		
		/**
		 * 搜索确定
		 * */
		handleSearchConfrim(value) {
			this.searchValue = value;
			this.resetList();
			this.getList();
		},
		
		/**
		 * 搜索清空
		 * */
		handleSearchClear(value) {
			this.searchValue = value;
			this.resetList();
			this.getList();
		},
		
		/**
		 * 清空列表
		 * */
		resetList() {
			this.isLoading = true;
			this.dataSource = [];
			this.ipagination.pageNo = 1;
		},
		
		/**
		 * 点击tab切换
		 * */
		handleTabsChange(value, tabList) {
			this.currentTab.value = value
			this.resetList();
			this.getList();
		},
	},
}