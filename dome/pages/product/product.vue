<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in imgList" :key="index">
					<view class="image-wrapper">
						<image
							:src="item.src" 
							class="loaded" 
							mode="aspectFill"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="introduce-section">
			<text class="title">恒源祥2019春季长袖白色t恤 新款春装</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">341.6</text>
				<text class="m-price">¥488</text>
				<text class="coupon-tip">7折</text>
			</view>
			<view class="bot-row">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view>
		</view>
		
		<!--  分享 -->
		<view class="share-section" @click="share">
			<view class="share-icon">
				<text class="iconfont icon-daishouhuo"  style="color: #fff;"></text>
				 返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="iconfont icon-dibudaohanglan-"></text>
			</view>
			
		</view>
		
		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec('null')">
				<text class="tit">购买类型</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view>
				<text class="iconfont icon-dibudaohanglan-"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">优惠券</text>
				<text class="con t-r red">领取优惠券</text>
				<text class="iconfont icon-dibudaohanglan-"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购买满两件免邮费</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">服务</text>
				<view class="bz-list con">
					<text>7天无理由退换货 ·</text>
					<text>假一赔十 ·</text>
				</view>
			</view>
		</view>
		
		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="iconfont icon-dibudaohanglan-"></text>
			</view> 
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<rich-text :nodes="desc"></rich-text>
		</view>
		
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="iconfont icon-shouye1"></text>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="iconfont icon-gouwucheman"></text>
				<text>购物车</text>
			</navigator>
			<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
				<text class="iconfont icon-aixin"></text>
				<text>收藏</text>
			</view>
			
			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border add-cart-btn"  @click="toggleSpec('cart')" id="cart">加入购物车</button>
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
			</view>
		</view>
		
		
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
			@touchmove.stop.prevent="stopPrevent"
			@click="toggleSpec"
		>
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text 
							v-for="(childItem, childIndex) in specChildList" 
							v-if="childItem.pid === item.id"
							:key="childIndex" class="tit"
							:class="{selected: childItem.selected}"
							@click="selectSpec(childIndex, childItem.pid)"
						>
							{{childItem.name}}
						</text>
					</view>
				</view>
				<button class="btn" @click="toggleSpec('null')">完成</button>
			</view>
		</view>
		<!-- 分享 -->
		<share 
			ref="share" 
			:contentHeight="580"
			:shareList="shareList"
		></share>
	</view>
</template>

<script>
import share from '@/components/share';
export default{
	components: {
		share
	},
	data() {
		return {
			specClass: 'none',//商品规则的弹出框是否显示
			specSelected:[],//选中规则的数据
			buyBool:false,//是否是立即购买按钮点击
			cartBool:false,//从加入购物车 按钮 点击弹出框选择时 不能跳转的判断
			favorite: true,//收藏的状态
			shareList: [],//分析的数据
			imgList: [
				{
					src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'
				},
				{
					src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
				},
				{
					src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'
				}
			],
			desc: `
				<div style="width:100%">
					<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />
					<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />
					<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />
					<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />
					<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />
				</div>
			`,
			specList: [
				{
					id: 1,
					name: '尺寸',
				},
				{	
					id: 2,
					name: '颜色',
				},
			],
			specChildList: [
				{
					id: 1,
					pid: 1,
					name: 'XS',
				},
				{
					id: 2,
					pid: 1,
					name: 'S',
				},
				{
					id: 3,
					pid: 1,
					name: 'M',
				},
				{
					id: 4,
					pid: 1,
					name: 'L',
				},
				{
					id: 5,
					pid: 1,
					name: 'XL',
				},
				{
					id: 6,
					pid: 1,
					name: 'XXL',
				},
				{
					id: 7,
					pid: 2,
					name: '白色',
				},
				{
					id: 8,
					pid: 2,
					name: '珊瑚粉',
				},
				{
					id: 9,
					pid: 2,
					name: '草木绿',
				},
			]
		};
	},
	async onLoad(options){
		//接收传值,id里面放的是标题，因为测试数据并没写id 
		let id = options.id;
		if(id){
			this.$apiFn.msg(`点击了${id}`);
		}
		
		
		//规格 默认选中第一条
		this.specList.forEach(item=>{
			for(let cItem of this.specChildList){
				if(cItem.pid === item.id){
					this.$set(cItem, 'selected', true);
					// this.specSelected.push(cItem);
					break; //forEach不能使用break
				}
			}
		})
		this.shareList = await this.$apiFn.asyncJson('shareList');
	},
	methods:{
		//规格弹窗开关
		toggleSpec(el) {
			if(this.specClass === 'show'){
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
				//立即购买按钮 选中后直接去购买
				if(this.buyBool === true && this.specSelected.length !== 0 && this.cartBool === false){
					uni.navigateTo({
						url: `/pages/order/createOrder`
					})
				}
			}else if(this.specClass === 'none'){
				this.specClass = 'show';
				//是否 是加入购物车按钮 点进来的
				if(el === 'cart'){
					this.cartBool = true;
				}
			}
		},
		//选择规格
		selectSpec(index, pid){
			let list = this.specChildList;
			list.forEach(item=>{
				if(item.pid === pid){
					this.$set(item, 'selected', false);
				}
			})

			this.$set(list[index], 'selected', true);
			//存储已选择
			/**
			 * 修复选择规格存储错误
			 * 将这几行代码替换即可
			 * 选择的规格存放在specSelected中
			 */
			this.specSelected = []; 
			list.forEach(item=>{ 
				if(item.selected === true){ 
					this.specSelected.push(item); 
				} 
			})
			
		},
		//分享
		share(){
			this.$refs.share.toggleMask();	
		},
		//收藏
		toFavorite(){
			this.favorite = !this.favorite;
		},
		buy(){
			if(this.specSelected.length === 0){
				this.buyBool = true;
				this.specClass = 'show';
			}else{
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			}
			
		},
		stopPrevent(){}
	},

}
</script>

<style lang='scss'>
	page{
		background: #f8f8f8;
		padding-bottom: 160rpx;
	}
	.icon-you{
		font-size: 30rpx;
		color: #888;
	}
	.carousel {
		height: 722rpx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750rpx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20rpx 30rpx;
		
		.title{
			font-size: 32rpx;
			color: #303133;
			height: 50rpx;
			line-height: 50rpx;
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64rpx;
			padding: 10rpx 0;
			font-size: 26rpx;
			color:#fa436a;
		}
		.price{
			font-size: 32rpx + 2rpx;
		}
		.m-price{
			margin:0 12rpx;
			color: #909399;
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4rpx 10rpx;
			background: #fa436a;
			font-size: 24rpx;
			color: #fff;
			border-radius: 6rpx;
			line-height: 1;
			transform: translateY(-4rpx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50rpx;
			font-size: 24rpx;
			color: #909399;
			text{
				flex: 1;
			}
		}
	}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: #606266;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12rpx 30rpx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70rpx;
			height: 30rpx;
			line-height: 1;
			border: 1px solid #fa436a;
			border-radius: 4rpx;
			position:relative;
			overflow: hidden;
			font-size: 22rpx;
			color: #fa436a;
			&:after{
				content: '';
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				left: -20rpx;
				top: -12rpx;
				position:absolute;
				background: #fa436a;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24rpx;
			margin-left: 2rpx;
			margin-right: 10rpx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: 28rpx;
			margin-left:10rpx;
		}
		.icon-bangzhu1{
			padding: 10rpx;
			font-size: 30rpx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size:24rpx;
			color: #fa436a;
		}
		.icon-you{
			font-size: 24rpx;
			margin-left: 4rpx;
			color:#fa436a;
		}
	}
	
	.c-list{
		font-size:26rpx;
		color: #606266;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20rpx 30rpx;
			position:relative;
		}
		.tit{
			width: 140rpx;
		}
		.con{
			flex: 1;
			color: #303133;
			.selected-text{
				margin-right: 10rpx;
			}
		}
		.bz-list{
			height: 40rpx;
			font-size:26rpx;
			color: #303133;
			text{
				display: inline-block;
				margin-right: 30rpx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: #303133;
			line-height: 40rpx;
		}
		.red{
			color: #fa436a;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20rpx 30rpx;
		background: #fff;
		margin-top: 16rpx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70rpx;
			font-size: 26rpx;
			color:#909399;
			.tit{
				font-size: 30rpx;
				color: #303133;
				margin-right: 4rpx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10rpx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20rpx 0;
		.portrait{
			flex-shrink: 0;
			width: 80rpx;
			height: 80rpx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 28rpx;
			color:#606266;
			padding-left: 26rpx;
			.con{
				font-size:28rpx;
				color: #303133;
				padding: 20rpx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: 24rpx;
				color:#909399;
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16rpx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80rpx;
			font-size: 30rpx;
			color: #303133;
			position: relative;
				
			text{
				padding: 0 20rpx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300rpx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10rpx 30rpx;
		.a-t{
			display: flex;
			image{
				width: 170rpx;
				height: 170rpx;
				flex-shrink: 0;
				margin-top: -40rpx;
				border-radius: 8rpx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24rpx;
				font-size: 26rpx;
				color: #606266;
				line-height: 42rpx;
				.price{
					font-size: 32rpx;
					color: #fa436a;
					margin-bottom: 10rpx;
				}
				.selected-text{
					margin-right: 10rpx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: 30rpx;
			color: #606266;
			padding-top: 30rpx;
			padding-left: 10rpx;
		}
		.item-list{
			padding: 20rpx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20rpx;
				margin-bottom: 20rpx;
				border-radius: 20rpx;
				min-width: 60rpx;
				height: 60rpx;
				padding: 0 20rpx;
				font-size: 28rpx;
				color: #303133;
			}
			.selected{
				background: #fbebee;
				color: #fa436a;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10rpx 10rpx 0 0;
			background-color: #fff;
			.btn{
				height: 66rpx;
				line-height: 66rpx;
				border-radius: 100rpx;
				background: #fa436a;
				font-size: 30rpx;
				color: #fff;
				margin: 30rpx auto 20rpx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30rpx;
		bottom:30rpx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690rpx;
		height: 100rpx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20rpx 0 rgba(0,0,0,.5);
		border-radius: 16rpx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;
			color: #606266;
			width: 96rpx;
			height: 80rpx;
			.yticon{
				font-size: 40rpx;
				line-height: 48rpx;
				color: #909399;
			}
			&.active, &.active .yticon{
				color: #fa436a;
			}
			.icon-fenxiang2{
				font-size: 42rpx;
				transform: translateY(-2rpx);
			}
			.icon-shoucang{
				font-size: 46rpx;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76rpx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20rpx 40rpx -16rpx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20rpx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28rpx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180rpx;
				height: 100%;
				font-size: 28rpx;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
	
</style>
