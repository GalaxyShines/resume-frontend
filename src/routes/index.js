import main from '@/views/主页.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
    name: 'default',
  },
  {
    path: '/home',
    name: 'home',
    component: main
  },
]

export default routes
