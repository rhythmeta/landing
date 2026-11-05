<script setup lang="ts">
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Camera,
  Cloud,
  GitFork,
} from "@lucide/vue"
import { RouterLink } from "vue-router"
import AppScreenshotPlaceholder from "../components/AppScreenshotPlaceholder.vue"
import SiteHeader from "../components/SiteHeader.vue"

const repositoryUrl = "https://github.com/rhythmeta/chunithmd"

const featureRows = [
  {
    icon: BookOpen,
    index: "01",
    title: "曲库与谱面",
    description: "按曲名、别名或 ID 搜索，切换日服、国际服与国服数据。",
  },
  {
    icon: BarChart3,
    index: "02",
    title: "成绩与 Rating",
    description: "维护玩家档案，查看游玩历史、单曲 Rating 和 Best 50。",
  },
  {
    icon: Camera,
    index: "03",
    title: "相机识别",
    description: "识别选曲与成绩画面，逐项核对后再保存游玩记录。",
  },
  {
    icon: Cloud,
    index: "04",
    title: "导入与备份",
    description: "导入常用成绩数据源，并通过 Rhythmeta 账号手动备份。",
  },
]
</script>

<template>
  <main class="chunithmd-page">
    <section id="top" class="chunithmd-hero">
      <div class="hero-grid" aria-hidden="true"></div>
      <SiteHeader page="chunithmd" />

      <div class="chunithmd-hero-content">
        <div class="chunithmd-copy">
          <p class="eyebrow"><span></span> RHYTHMETA / PROJECT 02</p>
          <h1>chunithmd</h1>
          <h2>读懂每一次游玩，<br />再选下一首。</h2>
          <p>
            面向 CHUNITHM 玩家的 Android / iOS 助手，整合曲库、成绩、Rating 分析与设备端相机识别。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="repositoryUrl" target="_blank" rel="noreferrer">
              <GitFork :size="18" aria-hidden="true" />
              查看源码
            </a>
            <a class="button button-quiet" href="#overview">
              探索功能
              <ArrowDown :size="18" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div class="chunithmd-hero-art" aria-label="chunithmd 项目形象与平台信息">
          <div class="chunithmd-art-coordinate" aria-hidden="true">
            <span>37° 33' 58.8" N</span>
            <span>PLAYER SIDE / 02</span>
          </div>
          <div class="chunithmd-mark-plane" aria-hidden="true">
            <span class="chunithmd-mark-line chunithmd-mark-line-one"></span>
            <span class="chunithmd-mark-line chunithmd-mark-line-two"></span>
            <img src="/chunithmd-icon.png" alt="" />
            <strong>CHU<br />NI</strong>
          </div>
          <div class="chunithmd-art-meta">
            <span>ANDROID / IOS</span>
            <span>KOTLIN MULTIPLATFORM</span>
          </div>
        </div>
      </div>

      <a class="scroll-cue" href="#overview">
        <span>EXPLORE CHUNITHMD</span>
        <ArrowDown :size="18" aria-hidden="true" />
      </a>
    </section>

    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span>SEARCH</span><i></i><span>SCAN</span><i></i><span>CONFIRM</span><i></i><span>RECORD</span><i></i>
        <span>SEARCH</span><i></i><span>SCAN</span><i></i><span>CONFIRM</span><i></i><span>RECORD</span><i></i>
      </div>
    </div>

    <section id="overview" class="chunithmd-overview section-light">
      <div class="section-label">
        <span>01</span>
        <span>PLAYER WORKFLOW</span>
      </div>
      <div class="chunithmd-overview-heading">
        <p class="manifesto-kicker">FIND / READ / PLAY AGAIN</p>
        <h2>从曲库到成绩，<br />把下一步看清楚。</h2>
        <p class="manifesto-copy">
          曲库可离线查询，记录留在本机。扫描结果会先展示给玩家核对，确认后才会写入游玩历史。
        </p>
      </div>
      <div class="chunithmd-facts" aria-label="chunithmd 支持平台与能力">
        <div><span>01 / PLATFORMS</span><strong>Android + iOS</strong></div>
        <div><span>02 / REGIONS</span><strong>JP / INTL / CN</strong></div>
        <div><span>03 / LANGUAGES</span><strong>中 / 繁 / EN / 日</strong></div>
      </div>
    </section>

    <section id="screens" class="chunithmd-screens section-light">
      <div class="screens-heading">
        <div class="section-label">
          <span>02</span>
          <span>APP SCREENS</span>
        </div>
        <div>
          <p class="project-overline">PLAYER / COLLECTION / SCAN</p>
          <h2>围绕游玩，<br />逐步整理。</h2>
        </div>
        <p>曲库、成绩分析与扫描确认流程，会在这里展示对应的 Android 与 iOS 界面。</p>
      </div>

      <div class="chunithmd-capture-grid">
        <AppScreenshotPlaceholder
          index="01"
          label="chunithmd / song catalog"
          image="/chunithmd/song-catalog.jpg"
        />
        <AppScreenshotPlaceholder
          index="02"
          label="chunithmd / rating & best 50"
          image="/chunithmd/best-table.png"
        />
        <AppScreenshotPlaceholder
          index="03"
          label="chunithmd / scan review"
          image="/chunithmd/scan-review.jpg"
        />
      </div>
    </section>

    <section id="features" class="project-section chunithmd-features">
      <div class="project-heading">
        <div class="section-label section-label-dark">
          <span>03</span>
          <span>FEATURES</span>
        </div>
        <div>
          <p class="project-overline">PLAY DATA / PLAYER CONTROL</p>
          <h2>曲库<br />到记录</h2>
        </div>
        <p class="project-intro">
          查询、整理和复盘都围绕玩家自己的档案；个人数据按本地优先与手动备份设计。
        </p>
      </div>

      <div class="feature-list">
        <article v-for="feature in featureRows" :key="feature.index" class="feature-row">
          <span class="feature-number">{{ feature.index }}</span>
          <component :is="feature.icon" :size="28" stroke-width="1.7" aria-hidden="true" />
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <ArrowUpRight class="feature-arrow" :size="22" aria-hidden="true" />
        </article>
      </div>
    </section>

    <section class="chunithmd-scan-band">
      <div class="chunithmd-scan-art" aria-hidden="true">
        <span class="scan-ray scan-ray-a"></span>
        <span class="scan-ray scan-ray-b"></span>
        <span class="scan-ray scan-ray-c"></span>
        <span class="scan-crosshair"></span>
        <span class="scan-target-label">LOCAL MODEL / IMAGE STAYS ON DEVICE</span>
      </div>
      <div class="chunithmd-scan-copy">
        <span>SCAN / CHECK / SAVE</span>
        <h2>识别先完成，<br />记录由你确认。</h2>
        <p>模型下载并校验后，识别在设备上执行。检查成绩与 FC / AJ / AJC 状态，再决定是否保存。</p>
      </div>
    </section>

    <section class="final-cta chunithmd-final">
      <div class="cta-grid" aria-hidden="true"></div>
      <p>CHUNITHM PLAYER TOOL / OPEN SOURCE</p>
      <h2>准备好下一局。</h2>
      <div class="cta-actions">
        <a class="button button-primary" :href="repositoryUrl" target="_blank" rel="noreferrer">
          <GitFork :size="18" aria-hidden="true" />
          打开 GitHub
        </a>
        <RouterLink class="button button-outline" to="/maimaid">
          查看 maimaid
          <ArrowUpRight :size="18" aria-hidden="true" />
        </RouterLink>
      </div>
    </section>

    <footer>
      <RouterLink class="brand footer-brand" to="/">
        <span class="brand-mark">R/</span>
        <span>RHYTHMETA</span>
      </RouterLink>
      <p>CHUNITHMD / CHUNITHM PLAYER COMPANION.</p>
      <div>
        <RouterLink to="/">RHYTHMETA ↗</RouterLink>
        <RouterLink to="/maimaid">MAIMAID ↗</RouterLink>
        <a :href="repositoryUrl" target="_blank" rel="noreferrer">GITHUB ↗</a>
      </div>
      <span>© {{ new Date().getFullYear() }} RHYTHMETA</span>
    </footer>
  </main>
</template>
