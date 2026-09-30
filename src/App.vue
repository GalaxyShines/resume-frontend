<script setup>
import Menu from '@/components/Menu.vue'

const menu = [
  {
    name: '主选项1',
    children: [
      {
        name: '子选项1',
      },
    ],
  },
  {
    name: '主选项2',
    children: [
      {
        name: '子选项2-1'
      }
    ]
  },
  {
    name: '主选项3'
  }
]
</script>

<template>
  <header class="h-[4rem] w-screen bg-red-200"></header>
  <aside class="w-[15rem] h-[calc(100vh-4rem)] bg-blue-300 float-left">
    <Menu :menu="menu" class="w-full"></Menu>
  </aside>
  <section class="float-left w-[calc(100vw-15rem)] h-[calc(100vh-4rem)] bg-orange-300">
    <router-view />
  </section>
</template>

<style scoped></style>
