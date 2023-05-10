import { createRouter, createWebHistory } from 'vue-router';
import useAuthStore from '@/store/useAuthStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/index.vue')
    },
    {
      path: '/login',
      component: () => import('@/pages/login/index.vue')
    },
    {
      path: '/mine',
      component: () => import('@/pages/mine/index.vue'),
      meta: {
        needAuth: true
      }
    }
  ],
  sensitive: true,
  strict: true
});

router.beforeEach(async (to) => {
  (document as any).title = to.meta.title ?? '微信公众号开发';
  const authStore = useAuthStore();
  if (to.meta?.needAuth && !authStore.token) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirectUrl: to.fullPath, ...to.query }
    };
  }
});

export default router;
