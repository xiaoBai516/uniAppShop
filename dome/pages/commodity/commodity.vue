<template>
	<view class="content">
		<!-- 搜索条 -->
		<search-box></search-box>
		<!-- 左边菜单 -->
		<view class="left-aside">
			<scroll-view scroll-y >
				<view v-for="item in flist" :key="item.id" class="f-item b-b" :class="{active: item.id === currentId}" @click="tabtap(item)">
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<view class="right-aside">
			<!-- 筛选头部 -->
			<view class="navbar" >
				<view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">
					综合排序
				</view>
				<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">
					销量优先
				</view>
				<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
					<text>价格</text>
					<view class="p-box">
						<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="iconfont icon-jiantoushang"></text>
						<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="iconfont icon-jiantouxia xia"></text>
					</view>
				</view>
				<text class="cate-item iconfont icon-fenlei" @click="toggleCateMask('show')"></text>
			</view>
			<scroll-view scroll-with-animation scroll-y class="scrollItem" @scroll="asideScroll" :scroll-top="tabScrollTop">
				<view v-for="item in slist" :key="item.id" class="s-list" :id="'main-'+item.id">
					<view class="t-list">
						<view  v-if="titem.pid === item.id" class="t-item" v-for="titem in tlist" :key="titem.id">
							<image :src="titem.picture" @click="navToList(item.id, titem.id)"></image>
							<view class="t-item-info" @click="navToList(item.id, titem.id)">
								<view class="title clampellipsis">樱花味润手霜樱花味润手霜 樱花味润手霜 樱花味润手霜 樱花味润手霜 </view>
								<view class="price">¥<text>30.22</text>元</view>
							</view>
							<view class="step">
								<number-box
								:min="1" 
								:max="20"
								:value="1"
								:isMax="20"
								:isMin="1"
								:index="titem.id"
								@eventChange="numberChange"
							></number-box>
							</view>
							
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 筛选条件 -->
		<view class="cate-mask" :class="cateMaskState===0 ? 'none' : cateMaskState===1 ? 'show' : ''" @click="toggleCateMask">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
					<view class="cate-box">
						<view class="cate-title">尺码</view>
						<view class="cate-cnt">
							<text>XXS</text>
							<text>XS</text>
							<text>S</text>
							<text>M</text>
							<text>L</text>
							<text>XXS</text>
							<text>XS</text>
							<text>S</text>
							<text>M</text>
							<text>L</text>
						</view>
					</view>
					<view class="cate-box">
						<view class="cate-title">款式</view>
						<view class="cate-cnt">
							<text>小清新</text>
							<text>卫衣</text>
							<text>套装</text>
						</view>
					</view>
				</scroll-view>
				<view class="cate-btn">
					<button class="btn">重置</button>
					<button class="btn confirm" @click.stop="toggleCateMask">确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import searchBox from '@/components/searchTopBox';
import numberBox from '@/components/uni-ui/numberBox/numberBox';
export default {
	components: {
		searchBox,
		numberBox
	},
	data() {
		return {
			priceOrder: 0, //筛选tab  1 价格从低到高 2价格从高到低
			filterIndex: 0, //筛选tab 当前的标签
			cateMaskState: 0, //分类面板展开状态
			cateList:[],//筛选条件 数据
			sizeCalcState: false,
			tabScrollTop: 0,
			currentId: 1,
			flist: [],
			slist: [],
			tlist: [],
		}
	},
	onLoad(){
		this.loadData();
	},
	methods: {
		async loadData(){
			let list = await this.$apiFn.asyncJson('cateList');
			list.forEach(item=>{
				if(!item.pid){
					this.flist.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
				}else if(!item.picture){
					this.slist.push(item); //没有图的是2级分类
				}else{
					this.tlist.push(item); //3级分类
				}
			}) 
		},
		//一级分类点击
		tabtap(item){
			let _this = this;
			if(!this.sizeCalcState){
				this.calcSize();
			}
			this.currentId = item.id;
			let index = this.slist.findIndex(sitem=>sitem.pid === item.id);
			setTimeout(function(){
				_this.tabScrollTop = _this.slist[index].top;
			},200)
			
		},
		//右侧栏滚动
		asideScroll(e){
			console.log('滚动 ',e)
			if(!this.sizeCalcState){
				this.calcSize();
			}
			let scrollTop = e.detail.scrollTop;
			let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
			if(tabs.length > 0){
				this.currentId = tabs[0].pid;
			}
		},
		//显示分类面板
		toggleCateMask(type){
			let timer = type === 'show' ? 10 : 300;
			let	state = type === 'show' ? 1 : 0;
			console.log('点击',type,this.cateMaskState,state)
			this.cateMaskState = 2;
			setTimeout(()=>{
				this.cateMaskState = state;
			}, timer)
		},
		//规格弹窗开关
		toggleSpec(el) {
			if(this.specClass === 'show'){
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			}else if(this.specClass === 'none'){
				this.specClass = 'show';
			}
		},
		//计算右侧栏每个tab的高度等信息
		calcSize(){
			let h = 0;
			this.slist.forEach(item=>{
				let view = uni.createSelectorQuery().select("#main-" + item.id);
				view.fields({
					size: true
				}, data => {
					item.top = h;
					h += data.height;
					item.bottom = h;
				}).exec();
			})
			this.sizeCalcState = true;
		},
		navToList(sid, tid){
			uni.navigateTo({
				url: `/pages/product/product`
			})
		},
		//筛选点击
		tabClick(index){
			console.log('索引',index)
			if(this.filterIndex === index && index !== 2){
				return;
			}
			this.filterIndex = index;
			if(index === 2){
				this.priceOrder = this.priceOrder === 1 ? 2: 1;
			}else{
				this.priceOrder = 0;
			}
			// uni.pageScrollTo({
			// 	duration: 300,
			// 	scrollTop: 0
			// })
			// this.loadData('refresh', 1);
			// uni.showLoading({
			// 	title: '正在加载'
			// })
		},
		//数量
		numberChange(data){
			console.log('点击',data)
		},
	}
}
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
		margin-top: 100rpx;
	}
	.content {
		display: flex;
	}
	/* 左边菜单 */
	.left-aside {
		width: 200rpx;
		height: 100%;
		background-color: #fff;
		position: fixed;
		top:100rpx;
		left:0;
		z-index: 12;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100rpx;
		font-size: 28rpx;
		color:#606266;
		position: relative;
		&.active{
			background: #f8f8f8;
			color:#fa436a;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36rpx;
				width: 8rpx;
				background-color: #fa436a;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}
/* 	右边内容 */
	.right-aside{
		flex: 1;
		overflow: hidden;
		padding-left: 20rpx;
		margin-left: 200rpx;
	}
	/* 筛选 头部*/
	.navbar{
		display: flex;
		width: 100%;
		height: 80rpx;
		background: #fff;
		box-shadow: 0 2rpx 10rpx rgba(0,0,0,.06);
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30rpx;
			color: #303133;
			position: relative;
			&.current{
				color: #fa436a;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120rpx;
					height: 0;
					border-bottom: 4rpx solid #fa436a;
				}
			}
		}
		.p-box{
			display: flex;
			flex-direction: column;
			padding-top:6rpx;
			margin-left:10rpx;
			.iconfont{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size:18rpx;
				line-height: 1;
				font-weight:700;
				color: #888;
				&.active{
					color: #fa436a;
				}
			}
		}
		.cate-item{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80rpx;
			position: relative;
			font-size: 44rpx;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36rpx;
			}
		}
	}
	
	/*滚动*/
	.scrollItem{
		overflow: hidden;
		height: calc(100% - 80px);
	}
	/*商品列表*/
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12rpx;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
		.t-item{
			flex-shrink: 0;
			display: flex;
			width: 100%;
			font-size: 26rpx;
			color: #666;
			padding:20rpx;
			position: relative;
			image{
				width: 180rpx;
				height: 240rpx;
			}
			.t-item-info{
				padding-left: 20rpx;
				flex: 1;
				.title{
					color:#000;
					font-weight:600;
				}
				.price{
					color:#f00;
					margin-top:20rpx;
					text{
						font-size: 38rpx;
					}
				}
			}
			.step{
				position:absolute;
				bottom:20rpx;
				right:55rpx;
				width:230rpx;
			}
		}
	}
	/* 分类 */
	.cate-mask{
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 999;
		transition: .3s;
		
		.cate-content{
			width: 630rpx;
			height: 100%;
			background: #fff;
			float:right;
			transform: translateX(100%);
			transition: .3s;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.cate-content{
				transform: translateX(0);
			}
		}
	}
	.cate-list{
		padding: 40rpx 30rpx;
		.cate-box{
			margin-bottom: 20rpx;
			.cate-title{
				color: #333333;
				font-size: 30rpx;
			}
			.cate-cnt{
				padding: 20rpx 0 0;
				display: flex;
				flex-wrap: wrap;
				text{
					display: flex;
					align-items: center;
					justify-content: center;
					border: 1px solid #eee;
					margin-right: 30rpx;
					margin-bottom: 20rpx;
					border-radius: 4rpx;
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
	}
	.cate-btn{
		display: flex;
		flex-wrap: wrap;
		padding: 0 30rpx;
		position: fixed;
		bottom: 30rpx;
		left: 0;
		width: 100%;
		.btn{
			flex-direction: column;
			width: 48%;
		}
		.confirm{
			background: #f00;
			color:#fff;
		}
	}
</style>
