<template>
	<view class="app">
		<view class="price-box">
			<text>支付剩余时间 14:41</text>
			<text class="price">38.88</text>
		</view>

		<view class="pay-type-list">

			<view class="type-item b-b" @click="changePayType(1)">
				<text class="icon iconfont icon-weixinzhifu"></text>
				<view class="con">
					<text class="tit">微信支付</text>
					<text>推荐使用微信支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 1' />
					</radio>
				</label>
			</view>
			<view class="type-item b-b" @click="changePayType(2)">
				<text class="icon iconfont icon-zhifubaozhifu"></text>
				<view class="con">
					<text class="tit">支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 2' />
					</radio>
				</label>
			</view>
			<view class="type-item" @click="changePayType(3)">
				<text class="icon iconfont icon-yuezhifu"></text>
				<view class="con">
					<text class="tit">预存款支付</text>
					<text>可用余额 ¥198.5</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 3' />
					</radio>
				</label>
			</view>
			<view class="type-item b-b" @click="changePayType(4)">
				<text class="icon iconfont icon-zhifupingtai-yinlian"></text>
				<view class="con">
					<text class="tit">银联卡支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 4' />
					</radio>
				</label>
			</view>
		</view>
		
		<text class="mix-btn" @click="confirm">确认支付</text>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				payType: 1,
				orderInfo: {}
			};
		},
		computed: {
		
		},
		onLoad(options) {
			
		},

		methods: {
			//选择支付方式
			changePayType(type) {
				this.payType = type;
			},
			//确认支付
			confirm: async function() {
				uni.redirectTo({
					url: '/pages/money/paySuccess'
				})
			},
		}
	}
</script>

<style lang='scss'>
	.app {
		width: 100%;
	}
	.price-box {
		background-color: #fff;
		height: 265rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #909399;
		.price{
			font-size: 60rpx;
			color: #303133;
			margin-top: 12rpx;
			font-weight:700;
			&:before{
				content: '￥';
				font-size: 40rpx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20rpx;
		background-color: #fff;
		padding-left: 60rpx;
		
		.type-item{
			height: 120rpx;
			padding: 20rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60rpx;
			font-size: 30rpx;
			position:relative;
		}
		
		.icon{
			width: 100rpx;
			font-size: 52rpx;
		}
		.icon-yuezhifu {
			color: #fe8e2e;
		}
		.icon-weixinzhifu {
			color: #36cb59;
		}
		.icon-zhifubaozhifu{
			color: #01aaef;
		}
		.tit{
			font-size:32rpx;
			color: #303133;
			margin-bottom: 4rpx;
		}
		.con{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 24rpx;
			color: #909399;
		}
	}
	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630rpx;
		height: 80rpx;
		margin: 80rpx auto 30rpx;
		font-size: 32rpx;
		color: #fff;
		background-color:  #fa436a;
		border-radius: 10rpx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

</style>
