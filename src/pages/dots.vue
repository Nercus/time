<template>
  <div class="relative flex flex-1 justify-center items-center bg-black size-full">
    <div class="flex-1 size-full">
      <TimeSorted class="fixed inset-0 size-screen">
        <template #year>
          <DotsSymbol :num="yearInMillennia" :max="yearInMillennia" color="rose-600" label="Year" />
        </template>
        <template #month>
          <DotsSymbol :num="time.currentDate.value.getMonth() + 1" :max="12" color="rose-500" label="Month" />
        </template>
        <template #day>
          <DotsSymbol :num="time.currentDate.value.getDate()" :max="daysInMonth" color="rose-400" label="Day" />
        </template>
        <template #hour>
          <DotsSymbol :num="time.currentDate.value.getHours()" :max="24" color="rose-300" label="Hour" />
        </template>
        <template #minute>
          <DotsSymbol :num="time.currentDate.value.getMinutes()" :max="60" color="rose-200" label="Minute" />
        </template>
        <template #second>
          <DotsSymbol :num="time.currentDate.value.getSeconds()" :max="60" color="rose-100" label="Second" />
        </template>
        <template #separator>
          <div class="bg-linear-to-b from-transparent via-gray-200 to-transparent w-px h-60 md:h-96" />
        </template>
      </TimeSorted>
      <Navigation class="bottom-4 fixed inset-x-0">
        <template #back>
          <DotsSymbol :num="0" :max="0" color="rose-100" arrow="left" />
        </template>
        <template #next>
          <DotsSymbol :num="0" :max="0" color="rose-100" arrow="right" />
        </template>
      </Navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    order: 5,
  },
})

useSeoMeta({
  title: 'Dots Clock',
  description: 'A dots only clock and date display built with Vue 3 and Tailwind CSS.',
  ogUrl: 'https://time.wintersperger.dev/dots',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const time = useTime()

const daysInMonth = computed(() => {
  const year = time.currentDate.value.getFullYear()
  const month = time.currentDate.value.getMonth()
  return new Date(year, month + 1, 0).getDate()
})

const yearInMillennia = computed(() => {
  const millennium = Math.floor(time.currentDate.value.getFullYear() / 1000)
  return time.currentDate.value.getFullYear() - millennium * 1000
})
</script>
