<template>
  <!--<VanButton type="primary" @click="change">切换语言</VanButton> -->

  <RouterView />
</template>

<script setup lang="ts">
// import wsInstance from '@/utils/websocket';
// import ws from '@/utils/ws';

// const { locale, t } = useI18n();

// const change = () => {
//   locale.value = locale.value === 'en_US' ? 'zh_CN' : 'en_US';
// };

onMounted(() => {
  // ws.init();
  // wsInstance.init(() => {
  //   wsInstance.subscribe('/topic/soccer/event', (data) => {
  //     // eslint-disable-next-line no-console
  //     console.log(data, 'data');
  //   });
  // });
});

onUnmounted(() => {
  // ws.disconnect();
});
</script>
