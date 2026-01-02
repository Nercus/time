<template>
  <div class="relative flex flex-1 justify-center items-center bg-white size-full">
    <div class="flex-1 size-full">
      <Time class="fixed inset-0 size-screen">
        <template #day>
          <SquareSymbol :symbol="time.day.value?.[0]" />
          <SquareSymbol :symbol="time.day.value?.[1]" />
        </template>
        <template #date-separator>
          <SquareSymbol symbol="dot" />
        </template>
        <template #date-time-separator>
          <SquareSymbol symbol="dash" />
        </template>
        <template #month>
          <SquareSymbol :symbol="time.month.value?.[0]" />
          <SquareSymbol :symbol="time.month.value?.[1]" />
        </template>
        <template #year>
          <SquareSymbol :symbol="time.year.value?.[0]" />
          <SquareSymbol :symbol="time.year.value?.[1]" />
          <SquareSymbol :symbol="time.year.value?.[2]" />
          <SquareSymbol :symbol="time.year.value?.[3]" />
        </template>
        <template #hour>
          <SquareSymbol :symbol="time.hour.value?.[0]" />
          <SquareSymbol :symbol="time.hour.value?.[1]" />
        </template>
        <template #time-separator>
          <SquareSymbol symbol="colon" />
        </template>
        <template #minute>
          <SquareSymbol :symbol="time.minute.value?.[0]" />
          <SquareSymbol :symbol="time.minute.value?.[1]" />
        </template>
        <template #second>
          <SquareSymbol :symbol="time.second.value?.[0]" />
          <SquareSymbol :symbol="time.second.value?.[1]" />
        </template>
      </Time>
      <Navigation class="bottom-4 fixed inset-x-0">
        <template #back>
          <SquareSymbol symbol="arrowLeft" hover-animation />
        </template>
        <template #next>
          <SquareSymbol symbol="arrowRight" hover-animation />
        </template>
      </Navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    order: 1,
  },
})

useHead({
  meta: [
    { name: 'theme-color', content: 'white' },
  ],
})

useSeoMeta({
  title: 'Squares Clock',
  description: 'A squares style clock and date display built with Vue 3 and Tailwind CSS.',
  ogUrl: 'https://time.wintersperger.dev/square',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  themeColor: '#000000',
})

const time = useTime()
</script>
