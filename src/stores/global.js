import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('counter', {
  state: () => ({
    count: 0,
    isToggled: true,
    isSmallScreen :false,
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    },
    toggleSidebar() {
      this.isToggled = !this.isToggled;
      console.log('toggled sidebar');
    }
  }
});
