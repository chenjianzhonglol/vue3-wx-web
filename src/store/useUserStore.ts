export default defineStore('user', {
  state: () => ({
    name: 'user'
  }),
  actions: {
    setName(name: string) {
      this.name = name;
    }
  }
});
