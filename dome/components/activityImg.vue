<template>
	<view>
		<view class="activityImg" v-for="(item,index) in activityImg" :key="index">
			<text>{{item.text}}</text>
			<image :src="item.src"></image>
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
			activityImg:{
				type: Array,
				default: function(){
					return [];
				}
			}
		},
		created() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang='scss'>
	.activityImg{
		position: relative;
		margin-bottom: 20rpx;
		height: 357rpx;
		image{
			width: 100%;
			height: 100%;
		}
		text{
			position:absolute;
			top:20rpx;
			right:0;
			padding:12rpx 20rpx 12rpx 35rpx;
			border-top-left-radius:50rpx;
			border-bottom-left-radius:50rpx;
			background:rgba(255,255,255,.7);
			color:#666;
			font-size:28rpx;
		}
	}
</style>
