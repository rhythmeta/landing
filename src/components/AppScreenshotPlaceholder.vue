<script setup lang="ts">
import { Camera } from "@lucide/vue"

defineProps<{
  index: string
  label: string
  image?: string
  variant?: "portrait" | "wide"
}>()
</script>

<template>
  <div
    class="capture-placeholder"
    :class="[`capture-placeholder-${variant ?? 'portrait'}`, { 'capture-placeholder-loaded': image }]"
  >
    <div class="capture-placeholder-caption">
      <span>{{ index }} / APP CAPTURE</span>
      <span>RHYTHMETA / {{ label }}</span>
    </div>
    <div
      class="capture-placeholder-frame"
      role="img"
      :aria-label="image ? `${label} app screenshot` : `${label} app screenshot placeholder`"
    >
      <img v-if="image" class="capture-screenshot" :src="image" :alt="`${label} app screenshot`" />
      <template v-else>
        <span class="capture-corner capture-corner-tl" aria-hidden="true"></span>
        <span class="capture-corner capture-corner-tr" aria-hidden="true"></span>
        <span class="capture-corner capture-corner-bl" aria-hidden="true"></span>
        <span class="capture-corner capture-corner-br" aria-hidden="true"></span>
        <div class="capture-placeholder-center">
          <Camera :size="24" stroke-width="1.6" aria-hidden="true" />
          <strong>SCREEN SLOT {{ index }}</strong>
          <span>{{ label }}</span>
        </div>
        <span class="capture-axis capture-axis-x" aria-hidden="true"></span>
        <span class="capture-axis capture-axis-y" aria-hidden="true"></span>
        <span class="capture-placeholder-foot">SCREENSHOT / PENDING</span>
      </template>
    </div>
  </div>
</template>
