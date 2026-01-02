<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <div class="relative flex flex-1 justify-center items-center bg-white size-full overflow-hidden will-change-transform">
    <div class="flex-1 size-full noise-bg">
      <Time class="fixed inset-0 size-screen">
        <template #day>
          <NoiseSymbol :symbol="time.day.value?.[0]" />
          <NoiseSymbol :symbol="time.day.value?.[1]" />
        </template>
        <template #date-separator>
          <NoiseSymbol symbol="." />
        </template>
        <template #date-time-separator>
          <NoiseSymbol symbol="-" />
        </template>
        <template #month>
          <NoiseSymbol :symbol="time.month.value?.[0]" />
          <NoiseSymbol :symbol="time.month.value?.[1]" />
        </template>
        <template #year>
          <NoiseSymbol :symbol="time.year.value?.[0]" />
          <NoiseSymbol :symbol="time.year.value?.[1]" />
          <NoiseSymbol :symbol="time.year.value?.[2]" />
          <NoiseSymbol :symbol="time.year.value?.[3]" />
        </template>
        <template #hour>
          <NoiseSymbol :symbol="time.hour.value?.[0]" />
          <NoiseSymbol :symbol="time.hour.value?.[1]" />
        </template>
        <template #time-separator>
          <NoiseSymbol symbol=":" />
        </template>
        <template #minute>
          <NoiseSymbol :symbol="time.minute.value?.[0]" />
          <NoiseSymbol :symbol="time.minute.value?.[1]" />
        </template>
        <template #second>
          <NoiseSymbol :symbol="time.second.value?.[0]" />
          <NoiseSymbol :symbol="time.second.value?.[1]" />
        </template>
      </Time>

      <Navigation class="bottom-4 fixed inset-x-0">
        <template #back>
          <motion.div :hover="{ y: -3 }" :intial="{ y: 0 }" :transition="{ type: 'spring', duration: 0.75, bounce: 0.5 }">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" class="size-8 text-rose-800">
              <path
                fill="currentColor"
                d="m1.38 7.18l4.83-4.15c.7-.6 1.79-.1 1.79.82v8.29c0 .93-1.09 1.42-1.79.82L1.38 8.82c-.5-.43-.5-1.21 0-1.64" />
            </svg>
          </motion.div>
        </template>
        <template #next>
          <motion.div :hover="{ y: -3 }" :intial="{ y: 0 }" :transition="{ type: 'spring', duration: 0.75, bounce: 0.5 }">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" class="size-8 text-rose-800">
              <path
                fill="currentColor"
                d="M7.62 7.18L2.79 3.03c-.7-.6-1.79-.1-1.79.82v8.29c0 .93 1.09 1.42 1.79.82l4.83-4.14c.5-.43.5-1.21 0-1.64" />
            </svg>
          </motion.div>
        </template>
      </Navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

definePage({
  meta: {
    order: 2,
  },
})

useHead({
  meta: [
    { name: 'theme-color', content: 'white' },
  ],
})

useSeoMeta({
  title: 'Noise Clock',
  description: 'A noise style clock and date display built with Vue 3 and Tailwind CSS.',
  ogUrl: 'https://time.wintersperger.dev/noise',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  themeColor: '#e7e5e4',
})

const time = useTime()
</script>

<style lang="css" scoped>
.noise-bg {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMDkyIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE1IiBzcGVjdWxhckNvbnN0YW50PSIwLjgiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzc5NTdBOCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj48L2ZlRGlzdGFudExpZ2h0PgogIAk8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAKPC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjNzk1N2E4IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+PC9zdmc+');
  mask: radial-gradient(circle at center, black 0%, black 20%, transparent 100%);
  -webkit-mask: radial-gradient(circle at center, black 0%, black 20%, transparent 100%);
}
</style>
