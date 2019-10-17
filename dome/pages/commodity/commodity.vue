<template>
	<view class="content">
		<!-- 搜索条 -->
		<search-box></search-box>
		<view class="left-aside">
			<scroll-view scroll-y >
				<view v-for="item in flist" :key="item.id" class="f-item b-b" :class="{active: item.id === currentId}" @click="tabtap(item)">
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<view v-for="item in slist" :key="item.id" class="s-list" :id="'main-'+item.id">
				<text class="s-item">{{item.name}}</text>
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
			if(!this.sizeCalcState){
				this.calcSize();
			}
			let scrollTop = e.detail.scrollTop;
			let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
			if(tabs.length > 0){
				this.currentId = tabs[0].pid;
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

	.right-aside{
		flex: 1;
		overflow: hidden;
		padding-left: 20rpx;
		margin-left: 200rpx;
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70rpx;
		padding-top: 8rpx;
		font-size: 28rpx;
		color: #303133;
	}
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
</style>
