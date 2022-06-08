<template>
  <div class="px-10 dark:text-white">
    <h1>useMouse</h1>
    <div>pos: {{ x }}, {{ y }}</div>
    <OnClickOutside @trigger="close">
      <div >Click Outside of Me</div>
    </OnClickOutside>
    <video src="https://upos-sz-mirrorhw.bilivideo.com/upgcxcode/88/83/336448388/336448388-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1654189774&gen=playurlv2&os=hwbv&oi=1972575723&trid=0b3afced57e94204ac532dc9934a68f0h&platform=html5&upsig=c263ee248ab39a6c0912900cc2cf7cc5&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=194618265&bvc=vod&nettype=0&bw=28957&logo=80000000" width="" height="" controls ref="el">
    </video>
    <button type="" @click="toggle">全屏{{isFullscreen}}</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { debounceFilter, useMouse ,useDark, useToggle,useFullscreen} from "@vueuse/core";
import { OnClickOutside } from "@vueuse/components";

const { x, y } = useMouse();
const isDark = useDark()
const toggleDark = useToggle(isDark)

function close () {
  /* ... */
  console.log("close")
}

const el = ref<HTMLElement | null>(null)
const { isFullscreen, enter, exit, toggle } = useFullscreen(el )

</script>

<style scoped></style>
