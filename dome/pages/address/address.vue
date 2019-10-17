<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view class="wrapper">
				<view class="u-box">
					<text class="name">{{item.name}}</text>
					<text class="mobile">{{item.mobile}}</text>
				</view>
				<view class="address-box">
					<text v-if="item.default" class="tag">默认</text>
					<text class="address">{{item.addressName}} {{item.area}}</text>
				</view>
			</view>
			<text class="iconfont icon-_huabanfuben" @click.stop="addAddress('edit', item)"></text>
		</view>
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: 0,
				addressList: [
					{
						name: '刘晓晓',
						mobile: '18666666666',
						addressName: '贵族皇仕牛排(东城店)',
						address: '北京市东城区',
						area: 'B区山东省济南市历城区楼下村龙潭自然村5栋804号潭自然村5栋804号潭自然村5栋804号',
						default: true
					},{
						name: '刘大大',
						mobile: '18667766666',
						addressName: '龙回1区12号楼',
						address: '山东省济南市历城区楼下村龙潭自然村5栋804号',
						area: '山东省济南市历城区楼下村龙潭自然村5栋804号山东省济南市历城区楼下村龙潭自然村5栋804号',
						default: false,
					}
				]
			}
		},
		onLoad(option){
			console.log('',option.source);
			this.source = option.source;
		},
		methods: {
			//选择地址
			checkAddress(item){
				console.log(item,"选中",this.source)
				if(this.source == 1){
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$apiFn.prePage().addressData = item;
					uni.navigateBack()
				}
			},
			addAddress(type, item){
				uni.navigateTo({
					url: `/pages/address/addressManage?type=${type}&data=${JSON.stringify(item)}`
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				console.log(data, type);
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120rpx;
	}
	.content{
		position: relative;
	}
	.list{
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;;
		background: #fff;
		position: relative;
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
/* 		display: flex;
		align-items: center; */
		.tag{
			font-size: 24rpx;
			color: #fa436a;
			margin-right: 10rpx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4rpx;
			padding: 4upx 10rpx;
			line-height: 1;
		}
		.address{
			font-size:28rpx;
			color:#000;
		}
	}
	.u-box{
		font-size:30rpx;
		margin-bottom:10rpx;
		color: #000;
		.name{
			margin-right:30rpx;
		}
		.mobile{
			font-size:28rpx;
			color:#909399;
		}
	}
	.icon-_huabanfuben{
		display: flex;
		align-items: center;
		height: 80rpx;
		font-size: 40rpx;
		color: #000;
		font-weight: 600;
		padding-left: 30rpx;
	}
	.add-btn{
		position: fixed;
		left: 30rpx;
		right: 30rpx;
		bottom: 16rpx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690rpx;
		height: 80rpx;
		font-size: 32rpx;
		color: #fff;
		background-color:#fa436a;
		border-radius: 10rpx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);		
	}
</style>
