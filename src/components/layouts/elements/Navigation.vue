<template>
  <footer class="bottom-0 absolute inset-x-0 flex flex-row justify-between items-center p-10 w-full">
    <button class="cursor-pointer" @click="goBack">
      <slot name="back" />
    </button>
    <button class="cursor-pointer" @click="goNext">
      <slot name="next" />
    </button>
  </footer>
</template>

<script setup lang="ts">
import { useDrag } from '@vueuse/gesture'

const router = useRouter()
const route = useRoute()

const currentOrder = computed(() => {
  return (route.meta.order as number) ?? 0
})

function getNextRouteInOrder() {
  const routes = router.getRoutes()
  const maxOrder = Math.max(...routes.map(r => (r.meta.order as number) ?? 0))
  const nextOrder = (currentOrder.value + 1) % (maxOrder + 1)
  return routes.find(r => (r.meta.order as number) === nextOrder)
}

function getPrevRouteInOrder() {
  const routes = router.getRoutes()
  const maxOrder = Math.max(...routes.map(r => (r.meta.order as number) ?? 0))
  const prevOrder = (currentOrder.value - 1 + (maxOrder + 1)) % (maxOrder + 1)
  return routes.find(r => (r.meta.order as number) === prevOrder)
}

function goBack() {
  const prevRoute = getPrevRouteInOrder()
  if (!prevRoute) return
  router.push(prevRoute.path)
}
function goNext() {
  const nextRoute = getNextRouteInOrder()
  if (!nextRoute) return
  router.push(nextRoute.path)
}

useDrag(({ swipe }) => {
  if (swipe[0] === -1) {
    goNext()
  }
  else if (swipe[0] === 1) {
    goBack()
  }
})
</script>
