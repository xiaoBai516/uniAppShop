<template>
	<view class="searchTopBox">
		<view class="cnt">  
			<view class="iptCnt">
				<icon type="search" size="20" class="icon" color="#fff"/>
				<input class="ipt" type="text" placeholder="商品编码/名称/条形码" placeholder-style="color:#fff"></input>
			</view>
			<view class="chat"><image  src="/static/chat.png"></image></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			
		},
		created() {
			
		},
		methods:{
			
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
		padding-top: 15rpx;
		z-index: 222;
		.cnt {
			height: 70rpx;
			margin-left: 5%;
			display: flex;
			border-radius: 35rpx;
		}
		.chat{
			width:120rpx;
			height: 60rpx;
			image{
				margin-left:30rpx;
				width:60rpx;
				height: 60rpx;
			}
		}
		.iptCnt{
			flex: 1 1;
			background-color: #FF9898;
			color: #fff;
			border-radius: 60rpx;
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
