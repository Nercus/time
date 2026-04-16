<template>
  <div class="relative flex flex-1 justify-center items-center bg-white size-full overflow-hidden">
    <div class="flex-1 size-full">
      <Time class="fixed inset-0 size-screen">
        <template #day>
          <ButtonSymbol color="blue" :symbol="time.day.value?.[0]" />
          <ButtonSymbol color="blue" :symbol="time.day.value?.[1]" />
        </template>
        <template #date-separator>
          <ButtonSymbol color="white" symbol="dot" />
        </template>
        <template #date-time-separator>
          <ButtonSymbol color="white" symbol="dash" />
        </template>
        <template #month>
          <ButtonSymbol color="green" :symbol="time.month.value?.[0]" />
          <ButtonSymbol color="green" :symbol="time.month.value?.[1]" />
        </template>
        <template #year>
          <ButtonSymbol color="teal" :symbol="time.year.value?.[0]" />
          <ButtonSymbol color="teal" :symbol="time.year.value?.[1]" />
          <ButtonSymbol color="teal" :symbol="time.year.value?.[2]" />
          <ButtonSymbol color="teal" :symbol="time.year.value?.[3]" />
        </template>
        <template #hour>
          <ButtonSymbol color="purple" :symbol="time.hour.value?.[0]" />
          <ButtonSymbol color="purple" :symbol="time.hour.value?.[1]" />
        </template>
        <template #time-separator>
          <ButtonSymbol color="white" symbol="colon" />
        </template>
        <template #minute>
          <ButtonSymbol color="amber" :symbol="time.minute.value?.[0]" />
          <ButtonSymbol color="amber" :symbol="time.minute.value?.[1]" />
        </template>
        <template #second>
          <ButtonSymbol color="pink" :symbol="time.second.value?.[0]" />
          <ButtonSymbol color="pink" :symbol="time.second.value?.[1]" />
        </template>
      </Time>

      <Navigation class="bottom-4 fixed inset-x-0">
        <template #back>
          <ButtonSymbol color="white" symbol="arrowLeft" click-animation />
        </template>
        <template #next>
          <ButtonSymbol color="white" symbol="arrowRight" click-animation />
        </template>
      </Navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    order: 6,
    title: 'Clock of Buttons',
  },
})

useSeoMeta({
  title: 'Button Clock',
  description: 'A button style clock and date display built with Vue 3 and Tailwind CSS.',
  ogUrl: 'https://time.wintersperger.dev/button',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const time = useTime()
</script>
