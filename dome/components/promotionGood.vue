<template>
	<view>
		<view class="promotion" v-for="(item,index) in promotionList">
			<image class="topimg" :src="item.image"></image>
			<view class="ul">
				<view class="li" v-for="el in item.list" @click="navToDetailPage(el)">
					<view class="image-wrapper">
						<image :src="el.image"></image>
					</view>
					<text class="title clamp">{{el.title}}</text>
					<text class="price">￥{{el.price}}</text>
				</view>
			</view>
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
			promotionList:{
				type: Array,
				default: function(){
					return [];
				}
			}
		},
		created() {
			
		},
		methods:{
			navToDetailPage(item){
				console.log('详情',item)
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			}
		}
	}
</script>

<style lang='scss'>
	.promotion{
		margin-bottom: 20rpx;
		.topimg{
			width: 100%;
			height: 146rpx;
		}
		.ul{
			display:flex;
			flex-wrap:wrap;
			padding: 0 30rpx;
			background: #fff;
			.li{
				display:flex;
				flex-direction: column;
				width: 48%;
				padding-bottom: 40rpx;
				&:nth-child(2n+1){
					margin-right: 4%;
				}
			}
			.image-wrapper{
				width: 100%;
				height: 330rpx;
				border-radius: 6rpx;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
					opacity: 1;
				}
			}
			.title{
				font-size: 30rpx;
				color:#000;
				line-height: 80rpx;
			}
			.price{
				font-size:30rpx;
				color: #f00;
				line-height: 1;
			}
		}
	}
</style>
