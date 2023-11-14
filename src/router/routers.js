export default [
  {
    path: '/',
    name: 'home',
    // redirect: '/',
    // component: home,
    children: [
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
      },
      {
        path: '/course/course-details/:course_id/:instructor_id',
        name: 'course details',
        meta: {
          access: [],
          title: 'course details',
          icon: 'md-build',
          transition: 'slide-right',
        },
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
      {
        path: '/login',
        name: 'Login',
        meta: {
          access: [],
          title: 'Login Page',
        },
        component: () => import('../views/login_register/loginPage.vue'),
      },
      {
        path: '/portal',
        name: 'Portal',
        meta: {
          requireAuth: true,
          access: [],
          title: 'Portal Page',
        },
        component: () => import('../views/portal/portalPage.vue'),
      },
      {
        path: '/portal/setting',
        name: 'setting',
        meta: {
          access: [],
          requireAuth: true,
          title: 'Portal Page',
        },
        component: () => import('../views/setting/setting_page.vue'),
      },
    ],
  },
]
