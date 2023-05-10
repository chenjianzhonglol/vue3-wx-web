import { FetchUserInfo } from '@/api/user';

export default defineStore('auth', {
  state: () => ({
    token: ''
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    async getToken(code: string) {
      const { data } = await FetchUserInfo({ code });
      this.token = 'ceshi';
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['token'] }]
  }
});
