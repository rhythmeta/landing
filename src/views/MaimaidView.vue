<script setup lang="ts">
import { ArrowDown, ArrowUpRight, BarChart3, Cloud, GitFork, ScanLine } from "@lucide/vue"
import { RouterLink } from "vue-router"
import SiteHeader from "../components/SiteHeader.vue"

const maimaidRepoUrl = "https://github.com/rhythmeta/maimaid"
const dashboardUrl = "https://maimaid.rhythmeta.org"

const featureRows = [
  {
    icon: ScanLine,
    index: "01",
    title: "端侧视觉识别",
    description: "用设备端模型完成快速成绩录入与歌曲查询。",
  },
  {
    icon: BarChart3,
    index: "02",
    title: "成绩与进度",
    description: "记录游玩历史，查看 B50、牌子与段位进度。",
  },
  {
    icon: Cloud,
    index: "03",
    title: "跨设备同步",
    description: "连接本地数据与云端备份，让记录稳定流动。",
  },
]
</script>

<template>
  <main class="maimaid-page">
    <section id="top" class="maimaid-hero">
      <div class="hero-grid" aria-hidden="true"></div>
      <SiteHeader page="maimaid" />

      <div class="maimaid-hero-content">
        <div class="maimaid-copy">
          <p class="eyebrow"><span></span> RHYTHMETA / PROJECT 01</p>
          <h1>maimaid</h1>
          <h2>你的游玩数据，<br />随时接上节奏。</h2>
          <p>
            面向 maimai DX 玩家生态的跨平台 App，覆盖成绩记录、曲库检索、进度统计与社区数据协同。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="dashboardUrl" target="_blank" rel="noreferrer">
              进入 Dashboard
              <ArrowUpRight :size="18" aria-hidden="true" />
            </a>
            <a class="button button-quiet" :href="maimaidRepoUrl" target="_blank" rel="noreferrer">
              <GitFork :size="18" aria-hidden="true" />
              查看源码
            </a>
          </div>
        </div>

        <div class="device-orbit maimaid-hero-orbit" aria-hidden="true">
          <div class="device-ticks"></div>
          <div class="app-disc">
            <img src="/maimaid-icon.png" alt="" />
          </div>
          <span class="orbit-note note-a">B50</span>
          <span class="orbit-note note-b">SYNC</span>
          <span class="orbit-note note-c">SCAN</span>
        </div>
      </div>

      <a class="scroll-cue" href="#overview">
        <span>EXPLORE MAIMAID</span>
        <ArrowDown :size="18" aria-hidden="true" />
      </a>
    </section>

    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span>SCAN</span><i></i><span>BEST 50</span><i></i><span>SYNC</span><i></i>
        <span>SCAN</span><i></i><span>BEST 50</span><i></i><span>SYNC</span><i></i>
      </div>
    </div>

    <section id="overview" class="manifesto maimaid-overview section-light">
      <div class="section-label">
        <span>01</span>
        <span>OVERVIEW</span>
      </div>
      <div class="manifesto-body">
        <p class="manifesto-kicker">LOCAL FIRST / PLAYER FIRST</p>
        <h2>
          从一次识别开始，<br />
          把成绩、曲库与进度<br />
          <em>留在玩家手中。</em>
        </h2>
        <p class="manifesto-copy">
          maimaid 采用本地数据优先策略，并结合云端能力完成备份与跨设备恢复，让记录始终跟得上下一局。
        </p>
      </div>
    </section>

    <section id="features" class="project-section maimaid-features">
      <div class="project-heading">
        <div class="section-label section-label-dark">
          <span>02</span>
          <span>FEATURES</span>
        </div>
        <div>
          <p class="project-overline">PLAYER WORKFLOW</p>
          <h2>从记录到进步</h2>
        </div>
        <p class="project-intro">
          快速采集成绩，理解自己的进度，再把数据安全地带到每台设备。
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

    <section class="project-visual maimaid-access">
      <div class="visual-copy">
        <span class="visual-index">YOUR DATA / YOUR RHYTHM</span>
        <h3>随时查看，<br />继续下一局。</h3>
        <div class="visual-links">
          <a :href="dashboardUrl" target="_blank" rel="noreferrer">
            <span>进入 Dashboard</span>
            <ArrowUpRight :size="22" aria-hidden="true" />
          </a>
          <a :href="maimaidRepoUrl" target="_blank" rel="noreferrer">
            <span>查看项目源码</span>
            <GitFork :size="21" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div class="metric-board" aria-label="maimaid 功能概览">
        <div>
          <span>BEST</span>
          <strong>50</strong>
          <small>RATING TRACK</small>
        </div>
        <div>
          <span>SCAN</span>
          <strong>01</strong>
          <small>ON-DEVICE</small>
        </div>
        <div>
          <span>SYNC</span>
          <strong>∞</strong>
          <small>CROSS-DEVICE</small>
        </div>
      </div>
    </section>

    <section class="final-cta maimaid-final">
      <div class="cta-grid" aria-hidden="true"></div>
      <p>READY FOR THE NEXT PLAY?</p>
      <h2>打开 maimaid，<br />接上你的记录。</h2>
      <div class="cta-actions">
        <a class="button button-primary" :href="dashboardUrl" target="_blank" rel="noreferrer">
          进入 Dashboard
          <ArrowUpRight :size="18" aria-hidden="true" />
        </a>
        <a class="button button-outline" :href="maimaidRepoUrl" target="_blank" rel="noreferrer">
          <GitFork :size="18" aria-hidden="true" />
          GITHUB
        </a>
      </div>
    </section>

    <footer>
      <RouterLink class="brand footer-brand" to="/">
        <span class="brand-mark">R/</span>
        <span>RHYTHMETA</span>
      </RouterLink>
      <p>MAIMAID / OPEN SOURCE RHYTHM TOOL.</p>
      <div>
        <RouterLink to="/">RHYTHMETA ↗</RouterLink>
        <a :href="maimaidRepoUrl" target="_blank" rel="noreferrer">GITHUB ↗</a>
        <a :href="dashboardUrl" target="_blank" rel="noreferrer">DASHBOARD ↗</a>
      </div>
      <span>© {{ new Date().getFullYear() }} RHYTHMETA</span>
    </footer>
  </main>
</template>
