<script>
	export default {
		globalData: {  
			globalParam: '全部变量222'  
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./common/css/iconfont.css";
	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}
	/*空格*/
	.space10{
		height: 20rpx;
	}
	.ellipsis {
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	/* 左右布局 */
	.space-between {
	    display: -webkit-flex;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	}
	/* 等间距布局 */
	.space-around{
	    display: -webkit-flex;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-around;
	}
	/* 不换行 */
	.nowrap{
	    display: -webkit-flex;
	    display: flex;
	    flex-direction: row;
	    flex-wrap: nowrap;
	}
	/* 换行 */
	.wrap{
	    display: -webkit-flex;
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    justify-content: space-around;
	}
	/*超出2行 省略号*/
	.clampellipsis{
	    overflow: hidden;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    word-break: break-all;
	    text-overflow: ellipsis;
	}
	.clamp{
		overflow:hidden;
		-o-text-overflow:ellipsis;
		text-overflow:ellipsis;
		white-space:nowrap;
		display:block;

	}
	/* 图片载入替代方案 */
	.image-wrapper {
		font-size: 0;
		background: #f3f3f3;
		border-radius: 8rpx;
	
		image {
			width: 100%;
			height: 100%;
			transition: .6s;
			opacity: 0;
	
			&.loaded {
				opacity: 1;
			}
		}
	}
	/*边框*/
	.b-b:after,
	.b-t:after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		height: 0;
		content: '';
		transform: scaleY(.5);
		border-bottom: 1rpx solid #E4E7ED;
	}
	
	.b-b:after {
		bottom: 0;
	}
	
	.b-t:after {
		top: 0;
	}
	
	/* button样式改写 */
	uni-button,
	button {
		height: 80rpx;
		line-height: 80rpx;
		font-size: 34rpx;
		font-weight: normal;
	
		&.no-border:before,
		&.no-border:after {
			border: 0;
		}
	}
	
	uni-button[type=default],
	button[type=default] {
		color: #DCDFE6;
	}
	
	/* input 样式 */
	.input-placeholder {
		color: #999999;
	}
	
	.placeholder {
		color: #999999;
	}
</style>
