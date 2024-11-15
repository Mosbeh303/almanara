import { createPinia } from 'pinia';
import { useGlobalStore } from '@/stores/global';

const pinia = createPinia();

export function registerPiniaPlugins(app) {
  app.use(pinia);

  // Register the store globally
  app.config.globalProperties.$globalStore = useGlobalStore();
}
