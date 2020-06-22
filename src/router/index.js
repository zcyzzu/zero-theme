// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: 'news',
          name: 'News',
          component: () => import('@/views/news/Index.vue'),
          meta: { src: require('@/assets/news.jpg') },
        },
        {
          path: 'news/:slug',
          name: 'Article',
          component: () => import('@/views/news/Article.vue'),
          meta: { src: require('@/assets/article.jpg') },
        },
        {
          path: 'marketing',
          name: 'Marketing',
          component: () => import('@/views/marketing/Index.vue'),
          meta: { src: require('@/assets/marketing.jpg') },
        },
        {
          path: 'gallery',
          name: 'Gallery',
          component: () => import('@/views/gallery/Index.vue'),
          meta: { src: require('@/assets/gallery.jpg') },
        },
        {
          path: 'gallery/:project',
          name: 'Project',
          component: () => import('@/views/gallery/Project.vue'),
          meta: { src: require('@/assets/project.jpg') },
        },
        {
          path: 'pricing-plans',
          name: 'Pricing',
          component: () => import('@/views/pricing-plans/Index.vue'),
          meta: { src: require('@/assets/pricing.jpg') },
        },
        {
          path: 'contact-us',
          name: 'Contact',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'pro',
          name: 'Pro',
          component: () => import('@/views/pro/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: 'kitchen-sink',
          name: 'Sink',
          component: () => import('@/views/sink/Index.vue'),
          meta: { src: require('@/assets/sink.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
