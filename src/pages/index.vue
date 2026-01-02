<template>
  <div
    class="relative flex flex-1 justify-center items-center bg-white size-full overflow-hidden">
    <div class="flex-1 size-full">
      <Time class="fixed inset-0 size-screen">
        <template #day>
          <DrawnSymbol :symbol="time.day.value?.[0]" />
          <DrawnSymbol :symbol="time.day.value?.[1]" />
        </template>
        <template #date-separator>
          <DrawnSymbol symbol="dot" />
        </template>
        <template #date-time-separator>
          <DrawnSymbol symbol="dash" />
        </template>
        <template #month>
          <DrawnSymbol :symbol="time.month.value?.[0]" />
          <DrawnSymbol :symbol="time.month.value?.[1]" />
        </template>
        <template #year>
          <DrawnSymbol :symbol="time.year.value?.[0]" />
          <DrawnSymbol :symbol="time.year.value?.[1]" />
          <DrawnSymbol :symbol="time.year.value?.[2]" />
          <DrawnSymbol :symbol="time.year.value?.[3]" />
        </template>
        <template #hour>
          <DrawnSymbol :symbol="time.hour.value?.[0]" />
          <DrawnSymbol :symbol="time.hour.value?.[1]" />
        </template>
        <template #time-separator>
          <DrawnSymbol symbol="colon" />
        </template>
        <template #minute>
          <DrawnSymbol :symbol="time.minute.value?.[0]" />
          <DrawnSymbol :symbol="time.minute.value?.[1]" />
        </template>
        <template #second>
          <DrawnSymbol :symbol="time.second.value?.[0]" />
          <DrawnSymbol :symbol="time.second.value?.[1]" />
        </template>
      </Time>

      <Navigation class="bottom-4 fixed inset-x-0">
        <template #back>
          <DrawnSymbol symbol="arrowLeft" hover-animation />
        </template>
        <template #next>
          <DrawnSymbol symbol="arrowRight" hover-animation />
        </template>
      </Navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    order: 0,
  },
})

useSeoMeta({
  title: 'Hand-Drawn Clock',
  description: 'A hand-drawn style clock and date display built with Vue 3 and Tailwind CSS.',
  ogUrl: 'https://time.wintersperger.dev',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  themeColor: '#FFFFFF',
})

const time = useTime()
</script>
