import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Index'
import Search from '@/components/home/Search'
import Login from '@/components/admin/Login'
import AdminIndex from '@/components/admin/Index'
import CompanyAdd from '@/components/admin/company/Add'
import CompanyShow from '@/components/admin/company/Show'
import PlaneAdd from '@/components/admin/plane/Add'
import PlaneShow from '@/components/admin/plane/Show'
import PlaneEditor from '@/components/admin/plane/Editor'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'Default',
		redirect: '/index',
		component: Home
	}, {
		//home页面不需要被访问,只是作为其他组件的父组件
		path: '/index',
		name: 'Home',
		component: Home,
	}, {
		path: '/search',
		name: 'Search',
		component: Search

	}, {
		path: '/login',
		name: 'Login',
		component: Login
	}, {
		path: '/admin',
		name: 'Admin',
		component: AdminIndex,
		children: [{
			path: '/admin/index',
			name: 'index',
			component: AdminIndex,
			meta: {
				requireAuth: true
			}
		},{
			path: '/admin/company/add',
			name: 'CompanyAdd',
			component: CompanyAdd,
			meta: {
				requireAuth: true
			}
		},{
			path: '/admin/company/show',
			name: 'CompanyShow',
			component: CompanyShow,
			meta: {
				requireAuth: true
			}
		},{
			path: '/admin/plane/add',
			name: 'PlaneAdd',
			component: PlaneAdd,
			meta: {
				requireAuth: true
			}
		},{
			path: '/admin/plane/show',
			name: 'PlaneShow',
			component: PlaneShow,
			meta: {
				requireAuth: true
			}
		}]
	}]
})
