import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/sehilton/Documents/github/meeovi-learning/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}