export default defineStore('auth', {
  state: () => ({
    token: ''
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    async getToken() {
      this.token = 'ceshi';
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['token'] }]
  }
});
