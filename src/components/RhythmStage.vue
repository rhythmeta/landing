<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue"

const activePad = ref(0)
const pressedPad = ref<number | null>(null)
const combo = ref(27)
const judgement = ref("SYNC")
const audioEnabled = ref(false)

const pads = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  key: String(index + 1),
  angle: index * 45 + 22.5,
}))

let beatTimer: number | undefined
let releaseTimer: number | undefined
let audioContext: AudioContext | undefined

const scoreText = computed(() => String(combo.value).padStart(3, "0"))

function playTone(index: number) {
  if (!audioEnabled.value) return

  audioContext ??= new AudioContext()
  const oscillator = audioContext.createOscillator()
  const gain = audioContext.createGain()
  const now = audioContext.currentTime

  oscillator.type = "sine"
  oscillator.frequency.setValueAtTime(392 + index * 37, now)
  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(0.07, now + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12)
  oscillator.connect(gain)
  gain.connect(audioContext.destination)
  oscillator.start(now)
  oscillator.stop(now + 0.14)
}

function hitPad(index: number) {
  const distance = Math.min(
    Math.abs(index - activePad.value),
    8 - Math.abs(index - activePad.value),
  )

  pressedPad.value = index
  combo.value += 1
  judgement.value = distance === 0 ? "PERFECT" : distance === 1 ? "GREAT" : "GOOD"
  playTone(index)

  window.clearTimeout(releaseTimer)
  releaseTimer = window.setTimeout(() => {
    pressedPad.value = null
  }, 180)
}

function toggleAudio() {
  audioEnabled.value = !audioEnabled.value
  if (audioEnabled.value) playTone(activePad.value)
}

function onKeydown(event: KeyboardEvent) {
  const index = Number(event.key) - 1
  if (index >= 0 && index < pads.length) hitPad(index)
}

onMounted(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (!reduceMotion) {
    beatTimer = window.setInterval(() => {
      activePad.value = (activePad.value + 1) % pads.length
    }, 620)
  }
  window.addEventListener("keydown", onKeydown)
})

onBeforeUnmount(() => {
  window.clearInterval(beatTimer)
  window.clearTimeout(releaseTimer)
  window.removeEventListener("keydown", onKeydown)
  void audioContext?.close()
})
</script>

<template>
  <div class="rhythm-stage" aria-label="交互式节拍控制盘">
    <div class="stage-meta stage-meta-top">
      <span>TRACK 01</span>
      <span>128 BPM</span>
    </div>
    <div class="rhythm-ring">
      <span class="orbit orbit-outer" aria-hidden="true"></span>
      <span class="orbit orbit-inner" aria-hidden="true"></span>
      <button
        v-for="pad in pads"
        :key="pad.id"
        class="rhythm-pad"
        :class="{ active: activePad === pad.id, pressed: pressedPad === pad.id }"
        :style="{ '--angle': `${pad.angle}deg` }"
        type="button"
        :aria-label="`节拍键 ${pad.key}`"
        @click="hitPad(pad.id)"
      >
        <span>{{ pad.key }}</span>
      </button>

      <button class="core core-rhythmeta" type="button" aria-label="切换节拍音效" @click="toggleAudio">
        <span class="core-brand-symbol">R/</span>
        <span class="core-status">{{ audioEnabled ? "SOUND ON" : "SOUND OFF" }}</span>
      </button>
    </div>
    <div class="stage-score" aria-live="polite">
      <span class="judgement">{{ judgement }}</span>
      <span class="combo">{{ scoreText }} <small>COMBO</small></span>
    </div>
  </div>
</template>
