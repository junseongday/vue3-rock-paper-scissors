import type { App } from 'vue'
import { createPinia } from 'pinia'
import {watch} from 'vue'

const store = createPinia()

if (sessionStorage.getItem('store')) {
  store.state.value = {
    ...JSON.parse(sessionStorage.getItem('store') ?? '{}')
  }
}
watch(()=>store.state.value,
  (state) => {
    sessionStorage.setItem('store', JSON.stringify(state))
  },
  { deep: true }
)

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
