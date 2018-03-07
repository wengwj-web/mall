import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/view/Goodslist'
import Cart from '@/view/cart'
import Address from '@/view/address'
import OrderConfirm from '@/view/OrderConfirm'
import OrderSuccess from '@/view/OrderSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/OrderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    }
  ]
})
