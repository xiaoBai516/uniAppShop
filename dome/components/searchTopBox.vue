<template>
	<view class="searchTopBox">
		<view class="cnt">  
			<view class="iptCnt" @click="navToList">
				<icon type="search" size="20" class="icon" color="#fff"/>
				<input class="ipt" type="text" placeholder="商品编码/名称/条形码" placeholder-style="color:#fff" v-model="iptval"></input>
			</view>
			<view class="chat">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iptval:""
			};
		},
		props:{
			showClick: { //是否显示箭头
				type: [Boolean, String],
				default: true
			}
		},
		created() {
		},
		methods:{
			//搜索调整  商品列表
			navToList(){
				if(this.showClick ==true){
					uni.navigateTo({
						url: '/pages/searchPage/searchPage'
					})
				}
			},
		}
	}
</script>

<style lang='scss'>
	.searchTopBox {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #FE7F79;
		height: 100rpx;
		box-sizing: border-box;
		z-index: 222;
		.cnt {
			margin-left: 5%;
			display: flex;
			border-radius: 35rpx;
		}
		.chat{
			width:120rpx;
			color: #fff;
		}
		.iptCnt{
			flex: 1 1;
			background-color: #FF9898;
			color: #fff;
			border-radius: 60rpx;
			height: 70rpx;
			margin-top: 15rpx;
		}
		.icon{
			float:left;
			padding:16rpx 0rpx 15rpx 40rpx;
		}
		.ipt {
			color:#fff;
			height:70rpx;
			min-height:70rpx;
			line-height:70rpx;
			display:inline-block;
			width:calc(100% - 100rpx);
			padding-left:10rpx;
			font-size:28rpx;
		}
	}
</style>
