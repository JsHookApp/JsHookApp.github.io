<template>
  <VPNavbar />
  <VPHome />
  <div class="w-full flex flex-col items-center mt-[30px]">
    <div class="grid grid-cols-6 gap-[10px] m-[0_10%] pb-[100px]">
      <img src="../assets/img/img_100.png" class="rounded-[5px]" />
      <img src="../assets/img/img_101.png" class="rounded-[5px]" />
      <img src="../assets/img/img_102.png" class="rounded-[5px]" />
      <img src="../assets/img/img_103.png" class="rounded-[5px]" />
      <img src="../assets/img/img_104.png" class="rounded-[5px]" />
      <img src="../assets/img/img_105.png" class="rounded-[5px]" />
    </div>
    <div class="w-full bg-[#373F5E] flex flex-col items-center text-[#fff] p-[30px_0]">
      <div>Released under the GPL3 license.</div>
      <div class="mt-[10px]">Copyright © 2022-now JsHook Developer</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref, defineAsyncComponent } from 'vue'
import VPNavbar from '@vuepress/theme-default/lib/client/components/VPNavbar.vue'
import VPHome from '@vuepress/theme-default/lib/client/components/VPHome.vue'
</script>