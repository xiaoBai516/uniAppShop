<template>
	<view class="content">
		<!-- 搜索条 -->
		<search-box></search-box>
		<!-- 轮播图 -->
		<swiper class="carousel" indicator-dots="true" indicator-color="#BB2E3A" indicator-active-color="#FF9899">
			<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item">
				<image :src="item.src" />
			</swiper-item>
		</swiper>
		<view class="space10"></view>
		<!-- 通知 -->
		<view class="noticeBg">
			<view class="notice-title">
				<icon class="iconfont icon-dizhi" ></icon>【最新通知】
			</view>
			<swiper class="notice-carousel"  vertical="true" autoplay="true">
				<swiper-item v-for="(item, index) in noticelList" :key="item.id" class="carousel-item">
					{{item.title}}<text>></text>
				</swiper-item>
			</swiper>
		</view>
		<view class="space10"></view>
		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item">
				<image src="/static/temp/c3.png"></image>
				<text>环球美食</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c5.png"></image>
				<text>个护美妆</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c6.png"></image>
				<text>营养保健</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c7.png"></image>
				<text>家居厨卫</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c8.png"></image>
				<text>速食生鲜</text>
			</view>
		</view>
		<view class="space10"></view>
		<!-- 活动图片 -->
		<activity-img :activityImg="activityImg"></activity-img>
		<!-- 秒杀楼层 -->
		<view class="seckill-section m-t">
			<view class="s-header">
				<image class="s-img" src="/static/temp/secskill-img.jpg" mode="widthFix"></image>
				<text class="hour timer">{{countTime.h}}</text>
				<text class="minute timer">{{countTime.m}}</text>
				<text class="second timer">{{countTime.s}}</text>
				<text class="yticon icon-you"></text>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.image" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 促销活动 -->
		<promotion-good :promotionList="promotionList"></promotion-good>
	</view>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import API from '../../utils/api.js';
import searchBox from '@/components/searchTopBox';
import activityImg from '@/components/activityImg';
import promotionGood from '@/components/promotionGood';
	export default {
		components: {
			searchBox,
			activityImg,
			promotionGood,
			
		},
		data() {
			return {
				carouselList: [],//轮播图
				noticelList:[],//通知
				activityImg:[],//活动图片
				promotionList:[],//促销商品活动,
				goodsList:[],//秒杀商品
				dataTime:"16:35",
				clearTime:null,//清除定时器
				countTime:{
					h:0,
					m:0,
					s:0
				},
				
			}
		},
		onLoad() {
			// let params = {"hospid":"222137","patiid":"17418","treanotype":0,"treano":"350101571969","openid":"oXeOPt92Vuf0JBeTyOlbpgRuIxhY"};
			// API.getTreatQualification(params).then(res => {
			// 	if(res.success == true){
			// 		console.log('res',res.data)
			// 	}
			// })
			this.loadData();
		},
		onShow() {
			this.setIntervalData();
			console.log('全局变量：',getApp().globalData.globalParam)
		},
		onHide() {
			// 每次离开当前界面时，清除定时器
			if(this.clearTime != null) {  
				clearInterval(this.clearTime);  
				this.clearTime = null;  
			}  
		},
		methods: {
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() {
				this.carouselList = await this.$apiFn.asyncJson('carouselList');
				this.noticelList = await this.$apiFn.asyncJson('noticelList');
				this.activityImg = await this.$apiFn.asyncJson('activityImg');
				this.promotionList = await this.$apiFn.asyncJson('promotionList');
				this.goodsList = await this.$apiFn.asyncJson('goodsList');
			},
			//倒计时计算
			setIntervalData(){
				//获取当前得时间
				var nowTime=new Date();
				var year=nowTime.getFullYear().toString();  //年
				var month=nowTime.getMonth()+1;  //月
				month = (month < 10)?month:("0" + month);
				var day=nowTime.getDate().toString();//日
				day =(day < 10)?day:("0" + day);
				let letlimiTime =  year+'/'+month+'/'+day + " "+this.dataTime;
				
				this.clearTime = setInterval( ()=> {
					var startTimeStamp = new Date(letlimiTime).getTime();
					var currentTimeStamp = new Date().getTime();
					var duraction = startTimeStamp - currentTimeStamp;
					if (duraction > 0) {
						var dd = Math.floor(duraction / 1000 / 60 / 60 / 24);
						var hh = Math.floor((duraction / 1000 / 60 / 60) % 24);
						var mm = Math.floor((duraction / 1000 / 60) % 60);
						var ss = Math.floor((duraction / 1000) % 60);
						if (dd >0){
							clearInterval(this.clearTime);
							this.$set(this.countTime,"h","00");
							this.$set(this.countTime,'m',"00");
							this.$set(this.countTime,"s","00");
						}else{
							
							this.$set(this.countTime,"h",(parseInt(hh) >= 10?hh:"0"+hh));
							this.$set(this.countTime,"m",(parseInt(mm) >= 10?mm:"0"+mm));
							this.$set(this.countTime,"s",(parseInt(ss) >= 10?ss:"0"+ss));
						}
					}else{
						clearInterval(this.clearTime);
						this.$set(this.countTime,"h","00");
						this.$set(this.countTime,'m',"00");
						this.$set(this.countTime,"s","00");
					}
				}, 1000);
			},
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
<style  lang="scss">
	page{
		background: #EFEFEF;
	}
	//轮播图
	.carousel{
		height:375rpx;
		.carousel-item{
			padding: 0;
			image{
				width:100%;
				height:100%;
			}
		}
	}
	//通知
	.noticeBg{
		display: flex;
		line-height:80rpx; 
		font-size: 28rpx;
		color: #999DAB;
		background: #fff;
		.notice-title{
			padding-left: 30rpx;
			width: 240rpx;
			i{
				color: #999DAB;
			}
		}
		.notice-carousel{
			flex: 1 1;
			height:auto;
			text{
				float: right;
				padding-right: 20rpx;
			}
		}
	}
	//分类
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30rpx 22rpx; 
		background: #fff;
		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 28rpx;
			color: #999DAB;
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88rpx;
			height: 88rpx;
			margin-bottom: 14rpx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4rpx 4rpx 20rpx rgba(250, 67, 106, 0.3);
		}
	}
	/* 秒杀专区 */
	.seckill-section{
		padding: 4rpx 30rpx 24rpx;
		background: #fff;
		.s-header{
			display:flex;
			align-items:center;
			height: 92rpx;
			line-height: 1;
			.s-img{
				width: 140rpx;
				height: 30rpx;
				margin-right:20rpx;
			}
			.timer{
				display:inline-block;
				width: 40upx;
				height: 36upx;
				text-align:center;
				line-height: 36rpx;
				margin-right: 14rpx;
				font-size: 26rpx;
				color: #fff;
				border-radius: 2px;
				background: rgba(0,0,0,.8);
			}
			.icon-you{
				font-size:32rpx;
				color: #909399;
				flex: 1;
				text-align: right;
			}
		}
		.floor-list{
			white-space: nowrap;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 150upx;
			margin-right: 20upx;
			font-size: 26rpx;
			color: #303133;
			line-height: 1.8;
			image{
				width: 150upx;
				height: 150upx;
				border-radius: 6upx;
			}
			.price{
				color: #f00;
			}
		}
	}
</style>
