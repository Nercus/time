<template>
  <div class="fixed inset-0 flex flex-col">
    <div ref="swipeTarget" class="bg-transparent cursor-grab grow" />
    <footer class="flex flex-row justify-between items-center p-10 w-full">
      <button class="cursor-pointer" @click="goBack">
        <slot name="back" />
      </button>
      <button class="cursor-pointer" @click="goNext">
        <slot name="next" />
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useDrag } from '@vueuse/gesture'

const router = useRouter()
const route = useRoute()
const swipeTarget = useTemplateRef<HTMLDivElement>('swipeTarget')

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
}, {
  domTarget: swipeTarget,
  preventWindowScrollY: true,
  swipeDistance: [50, 50],
  axis: 'x',
  swipeDuration: 5000,
  swipeVelocity: 0,
})
</script>
