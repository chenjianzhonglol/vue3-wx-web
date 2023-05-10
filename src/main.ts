import piniaPersist from 'pinia-plugin-persist';

import App from './App.vue';
import i18n from '@/locales';
import router from '@/router';
import { Lazyload } from 'vant';

import 'vant/es/toast/style';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);
app.use(Lazyload, {
  throttleWait: 500,
  observer: true
});

app.use(pinia).use(i18n).use(router).mount('#app');
