import Vue from 'vue'
import store from './store'
import App from './App'
import dataJson from './dataJson' //测试用数据

//模拟本地异地请求数据
const asyncJson = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(dataJson[type]);
		}, 500)
	})
}
//封装弹出框
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}
Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.$apiFn = {msg,asyncJson,prePage};

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
