<template>
	<view class="container">
		<!-- 空白页 -->
		<view v-if="!hasLogin || empty===true" class="empty">
			<image src="../../static/emptyCart.jpg" mode="aspectFit"></image>
			<view v-if="hasLogin" class="empty-tips">
				空空如也
				<navigator class="navigator" v-if="hasLogin" url="../index/index" open-type="switchTab">随便逛逛></navigator>
			</view>
			<view v-else class="empty-tips">
				空空如也
				<view class="navigator" @click="navToLogin">去登陆></view>
			</view>
		</view>
		<view v-else >
			<!-- 列表 -->
			<view class="cart-list">
				<block v-for="(item, index) in cartList" :key="item.id">
					<view
						class="cart-item" 
						:class="{'b-b': index!==cartList.length-1}"
					>
						<view class="image-wrapper">
							<image :src="item.image" 
								:class="[item.loaded]"
								mode="aspectFill" 
								lazy-load 
								@load="onImageLoad('cartList', index)" 
								@error="onImageError('cartList', index)"
							></image>
							<view 
								class="iconfont icon-dagou checkbox"
								:class="{checked: item.checked}"
								@click="check('item', index)"
							></view>
						</view>
						<view class="item-right">
							<text class="clamp title">{{item.title}}</text>
							<text class="attr">{{item.attr_val}}</text>
							<text class="price">¥{{item.price}}</text>
							<numberBox
								class="step"
								:min="1" 
								:max="item.stock"
								:value="item.number>item.stock?item.stock:item.number"
								:isMax="item.number>=item.stock?true:false"
								:isMin="item.number===1"
								:index="index"
								@eventChange="numberChange"
							></numberBox>
						</view>
						<text class="del-btn iconfont icon-guanbi" @click="deleteCartItem(index)"></text>
					</view>
				</block>
			</view>
			<!-- 底部菜单栏 -->
			<view class="action-section">
				<view class="checkbox">
					<image 
						:src="allChecked?'/static/selected.png':'/static/select.png'" 
						mode="aspectFit"
						@click="check('all')"
					></image>
					<view class="clear-btn" :class="{show: allChecked}" @click="clearCart">
						清空
					</view>
				</view>
				<view class="total-box">
					<text class="price">¥{{total}}</text>
					<text class="coupon">
						已优惠
						<text>74.35</text>
						元
					</text>
				</view>
				<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button>
			</view>
		</view>
	</view>
</template>

<script>
import {mapState} from 'vuex';
import numberBox from '@/components/uni-ui/numberBox/numberBox';
	export default {
		components: {
			numberBox
		},
		data() {
			return {
				hasLogin:true,//是否登录
				total: 0, //总价格
				allChecked: false, //全选状态  true|false
				empty: false, //空白页现实  true|false
				cartList: [],//购物车数据
			};
		},
		onLoad(){
			this.loadData();
			console.log(this.hasLogin,this.empty)
		},
		watch:{
			//显示空白页
			cartList(e){
				let empty = e.length === 0 ? true: false;
				if(this.empty !== empty){
					this.empty = empty;
				}
			}
		},
		computed:{
			// ...mapState(['hasLogin'])
		},
		methods: {
			//请求数据
			async loadData(){
				let list = await this.$apiFn.asyncJson('cartList'); 
				let cartList = list.map(item=>{
					item.checked = true;
					return item;
				});
				this.cartList = cartList;
				this.calcTotal();  //计算总价
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				console.log('错误')
				this[key][index].image = '/static/errorImage.jpg';
			},
			navToLogin(){
				uni.navigateTo({
					url: '/pages/public/login'
				})
			},
			 //选中状态处理
			check(type, index){
				if(type === 'item'){
					this.cartList[index].checked = !this.cartList[index].checked;
				}else{
					const checked = !this.allChecked
					const list = this.cartList;
					list.forEach(item=>{
						item.checked = checked;
					})
					this.allChecked = checked;
				}
				this.calcTotal(type);
			},
			//数量
			numberChange(data){
				this.cartList[data.index].number = data.number;
				this.calcTotal();
			},
			//删除
			deleteCartItem(index){
				let list = this.cartList;
				let row = list[index];
				let id = row.id;

				this.cartList.splice(index, 1);
				this.calcTotal();
				uni.hideLoading();
			},
			//清空
			clearCart(){
				uni.showModal({
					content: '清空购物车？',
					success: (e)=>{
						if(e.confirm){
							this.cartList = [];
						}
					}
				})
			},
			//计算总价
			calcTotal(){
				let list = this.cartList;
				if(list.length === 0){
					this.empty = true;
					return;
				}
				let total = 0;
				let checked = true;
				list.forEach(item=>{
					if(item.checked === true){
						total += item.price * item.number;
					}else if(checked === true){
						checked = false;
					}
				})
				this.allChecked = checked;
				this.total = Number(total.toFixed(2));
			},
			//创建订单
			createOrder(){
				let list = this.cartList;
				let goodsData = [];
				list.forEach(item=>{
					if(item.checked){
						goodsData.push({
							attr_val: item.attr_val,
							number: item.number
						})
					}
				})

				uni.navigateTo({
					url: `/pages/order/createOrder?data=${JSON.stringify({
						goodsData: goodsData
					})}`
				})
				this.$api.msg('跳转下一页 sendData');
			}
		}
	}
</script>

<style lang='scss'>
	.container{
		padding-bottom: 134rpx;
		/* 空白页 vh ,相对于视口的高度*/
		.empty{
			position:fixed;
			left: 0;
			top:0;
			width: 100%;
			height: 100vh;
			padding-bottom:100rpx;
			display:flex;
			justify-content: center;
			flex-direction: column;
			align-items:center;
			background: #fff;
			image{
				width: 240rpx;
				height: 160rpx;
				margin-bottom:30rpx;
			}
			.empty-tips{
				display:flex;
				font-size: 28rpx;
				color: #C0C4CC;
				.navigator{
					color: #fa436a;
					margin-left: 16rpx;
				}
			}
		}
	}
	/* 购物车列表项 */
	.cart-item{
		display:flex;
		position:relative;
		padding:30rpx 40rpx;
		.image-wrapper{
			width: 230rpx;
			height: 230rpx;
			flex-shrink: 0;
			position:relative;
			image{
				border-radius:8rpx;
			}
		}
		.checkbox{
			position:absolute;
			left:-16rpx;
			top: -16rpx;
			z-index: 8;
			font-size: 44rpx;
			line-height: 1;
			padding: 4rpx;
			color: #C0C4CC;
			background:#fff;
			border-radius: 50px;
		}
		.item-right{
			display:flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position:relative;
			padding-left: 30rpx;
			.title,.price{
				font-size:30rpx;
				color: #303133;
				height: 40rpx;
				line-height: 40rpx;
			}
			.attr{
				font-size:26rpx;
				color: #909399;
				height: 50rpx;
				line-height: 50rpx;
			}
			.price{
				height: 50rpx;
				line-height:50rpx;
				color: #fa436a;
				font-weight: 700;
			}
		}
		.del-btn{
			padding:4rpx 10rpx;
			font-size:34rpx; 
			height: 50rpx;
			color: #909399;
			margin-right:-26rpx;
		}
	}
	/* 底部栏*/
	.action-section{
		position:fixed;
		left:0;
		bottom:0rpx;
		z-index:95;
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
		-webkit-box-align:center;
		-webkit-align-items:center;
		-ms-flex-align:center;
		align-items:center;
		width:100%;
		height:110rpx;
		padding:5rpx 30rpx;
		background:rgba(255, 255, 255, 0.9);
		-webkit-box-shadow:0 0 20rpx 0 rgba(0, 0, 0, 0.5);
		box-shadow:0 0 20rpx 0 rgba(0, 0, 0, 0.5);
		.checkbox{
			height:52rpx;
			position:relative;
			image{
				width: 52rpx;
				height: 100%;
				position:relative;
				z-index: 5;
			}
		}
		.clear-btn{
			position:absolute;
			left: 26rpx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52rpx;
			line-height: 52rpx;
			padding-left: 38rpx;
			font-size:28rpx;
			color: #fff;
			background: #C0C4CC;
			border-radius:0 50px 50px 0;
			opacity: 0;
			transition: .2s;
			&.show{
				opacity: 1;
				width: 120rpx;
			}
		}
		.total-box{
			flex: 1;
			display:flex;
			flex-direction: column;
			text-align:right;
			padding-right: 40rpx;
			.price{
				font-size: 32rpx;
				color: #fa436a;
				font-weight: 700;
			}
			.coupon{
				font-size: 24rpx;
				color: #909399;
				text{
					color: #303133;
				}
			}
		}
		.confirm-btn{
			padding: 0 38rpx;
			margin: 0;
			border-radius: 100px;
			height: 76rpx;
			line-height: 76rpx;
			font-size: 30rpx;
			background: #fa436a;
			box-shadow: 1rpx 2rpx 5rpx rgba(217, 60, 93, 0.72)
		}
	}
	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked{
		color: #fa436a;
	}
</style>
