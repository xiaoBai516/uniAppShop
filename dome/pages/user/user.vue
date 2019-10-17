<template>
	<view class="userBg">
		<view class="user-section">
			<image class="bg" src="/static/user-bg.jpg"></image>
			<view class="user-portrait">
				<image class="portrait" src="/static/missing-face.png"></image><text>游客</text>
			</view>
			<view class="user-info">
				<view class="title">账号</view>
				<view class="text">0.00</view>
			</view>
		</view>
		<view class="userCnt">
			<!-- 订单 -->
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon iconfont icon-shouye"></text>
					<text>全部订单</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon iconfont icon-daifukuan"></text>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navTo('/pages/index/index')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon iconfont icon-daishouhuo"></text>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon iconfont icon-tuikuan"></text>
					<text>退款/售后</text>
				</view>
			</view>
			<view class="space10"></view>
			<view class="space10"></view>
			<view class="set-grid">
				<view class="set-grid-item">
					<icon class="iconfont icon-mulu"></icon>
					<text class="text">公司信息</text>
				</view>
				<view class="set-grid-item">
					<icon class="iconfont icon-myaddress"></icon>
					<text class="text">收货地址</text>
				</view>
				<view class="set-grid-item">
					<icon class="iconfont icon-tuihuo-kuai"></icon>
					<text class="text">退货订单</text>
				</view>
				<view class="set-grid-item last">
					<icon class="iconfont icon-fenxiang1"></icon>
					<text class="text">分享设置</text>
				</view>
				<view class="set-grid-item last">
					<icon class="iconfont icon-yue"></icon>
					<text class="text">邀请抽成</text>
				</view>
				<view class="set-grid-item last">
					<icon class="iconfont icon-youhuiquantuangou"></icon>
					<text class="text">优惠券</text>
				</view>
			</view>
			<view class="space10"></view>
			<view class="space10"></view>
			<uni-grid class="user-grid" :column="3" :show-border="false"  :item-show-border="false" :square="false"  head-title="客户服务" @change="change" >
			    <uni-grid-item >
					<icon class="iconfont icon-qunfengkefujingli"></icon>
			        <text class="text">在线客服</text>
			    </uni-grid-item>
			    <uni-grid-item >
					<icon class="iconfont icon-kefurexian"></icon>
			        <text class="text">服务热线</text>
			    </uni-grid-item>
			    <uni-grid-item >
					<icon class="iconfont icon-qunfengyijianfankui"></icon>
			        <text class="text">意见反馈</text>
			    </uni-grid-item>
			</uni-grid>
			<view class="space10"></view>
			<view class="space10"></view>
			<view class="listSty">
				<uni-list >
					<uni-list-item title="优惠券" marker="0张可用"  thumb-font="col5fc iconfont icon-youhuiquan1"  @click="uniListClick"></uni-list-item>
					<uni-list-item title="积分" marker="0"  thumb-font="cole07 iconfont icon-jifen01"  ></uni-list-item>
					<uni-list-item title="我的收藏"  thumb-font="col54b iconfont icon-shoucang"  ></uni-list-item>
					<uni-list-item title="收货地址"   thumb-font="col5fc iconfont icon-shouhuodizhi"  ></uni-list-item>
					<uni-list-item title="分享"   thumb-font="col978 iconfont icon-fenxiang"  ></uni-list-item>
					<uni-list-item class="last" title="设置"  thumb-font="cole07 iconfont icon-shezhi"  ></uni-list-item>
				</uni-list>
			</view>
			<view class="space10"></view>
		</view>
	</view>
</template>

<script>
import uniList from '@/components/uni-ui/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
import uniGrid from '@/components/uni-ui/uni-grid/uni-grid.vue'
import uniGridItem from '@/components/uni-ui/uni-grid-item/uni-grid-item.vue'
import {mapState,mapMutations} from 'vuex'
export default {
	components: {
		uniList,
		uniListItem,
		uniGrid,
		uniGridItem
	},
	data() {
		return {
			title: '用户'
		}
	},
	onLoad() {

	},
	methods: {
		/**
		 * 统一跳转接口,拦截未登录路由
		 * navigator标签现在默认没有转场动画，所以用view
		 */
		navTo(url){
			// if(!this.hasLogin){
			// 	url = '/pages/public/login';
			// }
			uni.switchTab({  
				url
			})  
		}, 
		//客服服务
		change(e) {
			let {index} = e.detail;
			if(index == 0){
				this.$apiFn.msg('在线聊天');
			}else if(index == 1){
				uni.makePhoneCall({
					phoneNumber: '18911111132' //客服电话
				})
			}else{
				this.$apiFn.msg('建议');
			}
		}
	}
}
</script>

<style lang="scss">
	page{
		background: #f8f8f8;
		padding-bottom: 20rpx;
	}
	%flex-center {
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	%section {
		display:flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10upx;
	}
	/*grid 无边框布局*/
	.set-grid{
		padding: 30rpx 0;
		display:flex;
		flex-wrap:wrap;
		box-sizing: border-box;  
		background: #FFFFFF;
		.set-grid-item{
			width: 30%;
			border-bottom: 1px solid #C0C0C0;
			border-right: 1px solid #C0C0C0;
			font-size: 32rpx;
			color: #666;
			padding: 20rpx 0;
			display:flex;
			flex-direction:column;
			width:33%;
			padding-bottom:40rpx;
			text-align: center;
			&:nth-child(3n+0){
				border-right: none;
			}
			&.last{
				border-bottom: none;
			}
		}
		.iconfont{
			font-size: 70rpx;
			display: block;
		}
		.icon-mulu{
			color:#01A6E6;
		}
		.icon-fenxiang1{
			color:#E73A96;
		}
		.icon-tuihuo-kuai{
			color:#FE6603;
		}
		.icon-yue{
			color:#5fcda2;
		}
		.icon-youhuiquantuangou{
			color:#FDBB05;
		}
		.icon-myaddress{
			color:#014AA6;
		}
		.text{
			margin-top: 20rpx;
			font-size: 28rpx;
			padding-bottom: 30rpx;
		}
	}
	.userBg{
		.user-section{
			padding:50rpx 30rpx 150rpx;
			position:relative;
			margin-bottom:100rpx;

			.bg{
				position:absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				filter: blur(1px);
				opacity: .7;
			}
			.user-portrait{
				position:relative;
				z-index: 1;
				display: flex;
				vertical-align: middle;
				.portrait{
					width: 130rpx;
					height: 130rpx;
					border:5rpx solid #fff;
					border-radius: 50%;
					margin-right: 20rpx;
				}
				text{
					line-height: 130rpx;
				}
			}
			.user-info{
				border-radius:10rpx;
				height:180rpx;
				background:#fff;
				text-align:center;
				position:absolute;
				left:32rpx;
				bottom:-60rpx;
				z-index:1;
				font-size:30rpx;
				padding:30rpx 0;
				color:#909399;
				right:32rpx;
				.text{
					color: #f00;
					font-size: 40rpx;
					font-weight:700;
					margin-top: 20rpx;
				}
			}
		}
	}
	.userCnt{
		padding: 0 32rpx;
			.order-section{
				@extend %section;
				padding: 28rpx 0;
				margin-top: 20rpx;
			.order-item{
				@extend %flex-center;
				width: 120rpx;
				height: 120rpx;
				border-radius: 10rpx;
				font-size: 24rpx;
				color: #000;
			}
			.yticon{
				font-size: 48rpx;
				margin-bottom: 18upx;
				color: #fa436a;
			}
			.icon-shouhoutuikuan{
				font-size:44rpx;
			}
		}
		.listSty{
			.uni-list{
				&:after,&:before{
					display: none;
				}
			}
			.last .uni-list-cell__container:after {
				display: none;
			}
			.uni-list-cell__container{
				&:after{
					right: 32rpx;
					background: #cccdcd;
				}
			}
		}
	}
	.col5fc{
		color:#5fcda2;
	}
	.col978{
		color:#9789f7;
	}
	.cole07{
		color:#e07472;
	}
	.col54b{
		color:#54b4ef;
	}
	.user-grid{
		.iconfont{
			font-size: 70rpx;
		}
		.icon-qunfengkefujingli{
			color:#E58042;
		}
		.icon-qunfengyijianfankui{
			color:#5fcda2;
		}
		.icon-kefurexian{
			color:#54b4ef;
		}
		.text{
			margin-top: 20rpx;
			font-size: 28rpx;
			padding-bottom: 30rpx;
		}
	}
</style>
