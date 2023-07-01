import { defineStore } from "pinia";
import { Log } from "~/interfaces/Main";

export const useMainStore = defineStore("main", {
  state: () => {
    return { 
      myChoice: null as Nullable<string>,
      comChoice: null as Nullable<string>,
      count: 3,
      winner: null as Nullable<string>,
      lifeOfMe: 3,
      lifeOfCom: 3,
      isSelectable: true,
      logs: [] as Log[]
     };
  },
  actions: {
    addLog(log:Log) {
      this.logs.unshift(log)
    },
    resetLog() {
      this.logs.length = 0
    }
  },
  getters: {
  }
});
