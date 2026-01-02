<template>
  <div class="relative flex flex-1 justify-center items-center bg-white size-full overflow-hidden">
    <div class="flex-1 size-full">
      <Time class="fixed inset-0 size-screen">
        <template #day>
          <ClockSymbol :symbol="time.day.value?.[0]" />
          <ClockSymbol :symbol="time.day.value?.[1]" />
        </template>
        <template #date-separator>
          <ClockSymbol symbol="dot" />
        </template>
        <template #date-time-separator>
          <ClockSymbol symbol="dash" />
        </template>
        <template #month>
          <ClockSymbol :symbol="time.month.value?.[0]" />
          <ClockSymbol :symbol="time.month.value?.[1]" />
        </template>
        <template #year>
          <ClockSymbol :symbol="time.year.value?.[0]" />
          <ClockSymbol :symbol="time.year.value?.[1]" />
          <ClockSymbol :symbol="time.year.value?.[2]" />
          <ClockSymbol :symbol="time.year.value?.[3]" />
        </template>
        <template #hour>
          <ClockSymbol :symbol="time.hour.value?.[0]" />
          <ClockSymbol :symbol="time.hour.value?.[1]" />
        </template>
        <template #time-separator>
          <ClockSymbol symbol="colon" />
        </template>
        <template #minute>
          <ClockSymbol :symbol="time.minute.value?.[0]" />
          <ClockSymbol :symbol="time.minute.value?.[1]" />
        </template>
        <template #second>
          <ClockSymbol :symbol="time.second.value?.[0]" />
          <ClockSymbol :symbol="time.second.value?.[1]" />
        </template>
      </Time>

      <Navigation class="bottom-4 fixed inset-x-0">
        <template #back>
          <ClockSymbol symbol="arrowLeft" hover-animation />
        </template>
        <template #next>
          <ClockSymbol symbol="arrowRight" hover-animation />
        </template>
      </Navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    order: 4,
    title: 'Clock of clocks',
  },
})

useSeoMeta({
  title: 'Clock of clocks',
  description: 'A clock made with multiple clocks built with Vue 3 and Tailwind CSS.',
  ogUrl: 'https://time.wintersperger.dev/clock',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const time = useTime()
</script>
