<template>
  <div class="relative flex flex-1 justify-center items-center bg-white size-full overflow-hidden">
    <div class="flex-1 size-full">
      <Time class="fixed inset-0 size-screen">
        <template #day>
          <CubeSymbol :symbol="time.day.value?.[0]" />
          <CubeSymbol :symbol="time.day.value?.[1]" />
        </template>
        <template #date-separator>
          <CubeSymbol symbol="dot" />
        </template>
        <template #date-time-separator>
          <CubeSymbol symbol="dash" />
        </template>
        <template #month>
          <CubeSymbol :symbol="time.month.value?.[0]" />
          <CubeSymbol :symbol="time.month.value?.[1]" />
        </template>
        <template #year>
          <CubeSymbol :symbol="time.year.value?.[0]" />
          <CubeSymbol :symbol="time.year.value?.[1]" />
          <CubeSymbol :symbol="time.year.value?.[2]" />
          <CubeSymbol :symbol="time.year.value?.[3]" />
        </template>
        <template #hour>
          <CubeSymbol :symbol="time.hour.value?.[0]" />
          <CubeSymbol :symbol="time.hour.value?.[1]" />
        </template>
        <template #time-separator>
          <CubeSymbol symbol="colon" />
        </template>
        <template #minute>
          <CubeSymbol :symbol="time.minute.value?.[0]" />
          <CubeSymbol :symbol="time.minute.value?.[1]" />
        </template>
        <template #second>
          <CubeSymbol :symbol="time.second.value?.[0]" />
          <CubeSymbol :symbol="time.second.value?.[1]" />
        </template>
      </Time>

      <Navigation class="bottom-4 fixed inset-x-0">
        <template #back>
          <CubeSymbol symbol="arrowLeft" hover-animation />
        </template>
        <template #next>
          <CubeSymbol symbol="arrowRight" hover-animation />
        </template>
      </Navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    order: 3,
  },
})

useSeoMeta({
  title: 'Cube Clock',
  description: 'A cube style clock and date display built with Vue 3 and Tailwind CSS.',
  ogUrl: 'https://time.wintersperger.dev/cube',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  themeColor: '#3f3f46',
})

const time = useTime()

useHead({
  title: () => time.currentDate.value.toLocaleString(),
})
</script>
