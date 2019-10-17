<template>
	<view class="uni-list">
		<view class="uni-list-head" v-if="headTitle">{{headTitle}}</view>
		<slot></slot>
	</view>
</template>
<script>
	export default {
		name: 'uni-list',
		props: {
			headTitle: String, //列表头部标题
		},
	}
</script>
<style lang="scss">
	.uni-list {
		background-color: $uni-bg-color;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;

		&:after {
			position: absolute;
			z-index: 10;
			right: 0;
			bottom: 0;
			left: 0;
			height: 1px;
			content: '';
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			background-color: $uni-border-color;
		}

		&:before {
			position: absolute;
			z-index: 10;
			right: 0;
			top: 0;
			left: 0;
			height: 1px;
			content: '';
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			background-color: $uni-border-color;
		}
		.uni-list-head{
			line-height:100rpx;
			background:#ffff;
			padding-left:30rpx;
			font-size:34rpx;
			border-bottom:1rpx solid #fafafa;
		}
	}
</style>
