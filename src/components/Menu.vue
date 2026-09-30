<template>
  <div class="menu">
    <div v-for="menuitem in menu" class="menuitem">
      <div class="title" @click="toggleVisible(menuitem.name)">
        <p>{{ menuitem.name }}</p>
      </div>
      <div class="child" :data-from="menuitem.name" v-show="menuStatus[menuitem.name]">
        <div v-for="submenuitem in menuitem.children" class="sub_menuitem">
          <p>{{ submenuitem.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  menu: Object,
})

const menuStatus = ref({})

onMounted(() => {
  props.menu.forEach((item) => {
    if (!(children in item)) menuStatus.value[item.name] = -1
    menuStatus.value[item.name] = false
  })
  console.log(menuStatus.value)
})

const toggleVisible = (name) => {
  if (menuStatus.value[name] == -1) return
  menuStatus.value[name] = !menuStatus.value[name]
}
</script>

<style scoped lang="scss">
$bgcolor: white;
$menu-width: 14rem;
$font-size: 1.2rem;
$padding-y: 0.76rem;

@mixin xy-center($x: true, $y: true) {
  display: flex;
  @if $x {
    align-items: center;
  }
  @if $y {
    justify-content: center;
  }
}

@mixin block-pad {
  padding: $padding-y 0 !important;
}

.menu {
  min-width: $menu-width;
  outline-style: auto;

  .menuitem {
    background-color: $bgcolor;
    width: 100%;
    &:not(:first-child) {
    }
    &:not(:last-child) {
      .title {
        position: relative;
        ::after {
          content: '';
          width: 80%;
          height: 1px;
          background-color: gray;
          position: absolute;
          bottom: 0%;
          left: 10%;
        }
      }
    }
    .title {
      font-size: $font-size;
      @include block-pad();
      width: 100%;
      @include xy-center();
      cursor: pointer;
      user-select: none;
    }

    .sub_menuitem {
      width: 100%;
      @include block-pad();
      @include xy-center();
      user-select: none;
    }
  }
}
</style>
