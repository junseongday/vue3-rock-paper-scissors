import { defineStore } from "pinia";
import { store } from "~/store";

export const useCommonStore = defineStore("common", {
  state: () => {
    return { loading: false, token: "" };
  },
  actions: {
    setLoading(value = false) {
      this.loading = value;
    },
  },
  getters: {}
});

// Need to be used outside the setup
export function useCommonStoreWithOut() {
  return useCommonStore(store);
}
