<template>
	<view  class="content">
		<!-- 搜索条 -->
		<search-box :show-click="false">
			<text class="search-text" @click="searchFn">搜索</text>
		</search-box>
		<view class="historical-cnt">
			<view class="head">
				<view class="head-text">历史搜索</view>
				<icon class="iconfont icon-shanchu" @click="delHistory"></icon>
			</view>
			<view class="list">
				<text v-for="item in historyData" :key="item.id">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from '@/components/searchTopBox';
	export default {
		components: {
			searchBox,
		},
		data() {
			return {
				inpVal:"",
				historyData:[
					{"id":1,"name":"商品"},
					{"id":2,"name":"水果拼盘"},
					{"id":3,"name":"小清新的衣服"},
				]
			};
		},
		props:{
			
		},
		created() {
			
		},
		methods:{
			searchFn(){
				let val = this.$children[0].iptval;
				let addData =[];
				if(val !=""){
					let list = this.historyData;
					let isExist = false;
					for(let i in list){
						if(list[i].name == val){
							isExist = true;
							break;
						}
					}
					if(!isExist){
						let len = this.historyData.length;
						addData.push({"id":len,"name":val});
					}
					this.historyData = this.historyData.concat(addData);
					uni.navigateTo({
						url: '/pages/product/list'
					})
				}
			},
			delHistory(){
				this.historyData = [];
			},
		}
	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.search-text{
		width: 100%;
		line-height: 90rpx;
		font-size: 34rpx;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}
	.historical-cnt{
		margin-top: 100rpx;
		padding: 34rpx 30rpx;
		color: #C8C7CC;
		font-size: 24rpx;
		.head{
			display: flex;
			.head-text{
				width: 100rpx;
				width: 150rpx;
				font-size: 30rpx;
			}
			.iconfont{
				text-align: right;
				font-size: 34rpx;
				margin-top: -17px;
				flex: 1 1;
				color: #000;
			}
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			margin-top: 20rpx;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 30rpx;
				margin-bottom: 20rpx;
				border-radius: 4rpx;
				min-width: 60rpx;
				height: 60rpx;
				padding: 0 30rpx;
				font-size: 28rpx;
				color: #303133;
				background: #eee;
				border-radius: 60rpx;
			}
		}
	}
</style>
