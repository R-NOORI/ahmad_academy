import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      access: [],
      title: 'home page',
      icon: 'md-build',
      transition: 'slide-right',
    },
    component: () => import('../views/home_page/home_view.vue'),
  },
  {
    path: '/course',
    name: 'course',
    meta: {
      access: [],
      title: 'course page',
      icon: 'md-build',
      transition: 'slide-right',
    },
    component: () => import('../views/course_page/course_view.vue'),
    children: [],
  },
  {
    path: '/course/course-details',
    name: 'course details',
    component: () => import('../views/course_page/course_details_view.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      access: [],
      title: 'about page',
      icon: 'md-build',
      transition: 'slide-right',
    },
    component: () => import('../views/about_page/about_view.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      access: [],
      title: 'contact page',
      icon: 'md-build',
      transition: 'slide-right',
    },
    component: () => import('../views/contact_page/contact_view.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
