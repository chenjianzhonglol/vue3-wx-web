<template>
  <div></div>
</template>

<script lang="ts" setup>
import { APPID } from '@/constant/global';
import useAuthStore from '@/store/useAuthStore';

const route = useRoute();
const router = useRouter();
const { code, redirectUrl } = route.query;
if (code) {
  console.log(code, redirectUrl);
  // 获取微信用户信息
  const authStore = useAuthStore();
  try {
    await authStore.getToken(code as string);
    router.replace({
      path: (redirectUrl as string) || '/'
    });
  } catch (e) {
    console.log(e);
  }
} else {
  location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${location.href}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
}
</script>
