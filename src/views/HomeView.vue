<script setup lang="ts">
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Cloud,
  Code2,
  GitFork,
  ScanLine,
  Sparkles,
} from "@lucide/vue"
import { RouterLink } from "vue-router"
import RhythmStage from "../components/RhythmStage.vue"
import SiteHeader from "../components/SiteHeader.vue"

const githubUrl = "https://github.com/rhythmeta"
const dashboardUrl = "https://dash.rhythmeta.org"

const capabilityRows = [
  {
    icon: ScanLine,
    index: "01",
    title: "端侧能力",
    description: "把识别与计算带到玩家设备上，让高频动作更快、更稳。",
  },
  {
    icon: BarChart3,
    index: "02",
    title: "数据体验",
    description: "把复杂成绩与进度整理成清晰、可行动的信息。",
  },
  {
    icon: Cloud,
    index: "03",
    title: "开放生态",
    description: "连接跨平台应用、社区数据与长期可维护的基础设施。",
  },
]
</script>

<template>
  <main>
    <section id="top" class="hero">
      <div class="hero-grid" aria-hidden="true"></div>
      <SiteHeader />

      <div class="hero-content">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> OPEN SOURCE / RHYTHM GAMES</p>
          <h1>RHYTHMETA</h1>
          <h2>让每一次击打，<br />留下更清晰的轨迹。</h2>
          <p class="hero-description">
            为音游玩家构建开放、可靠、好用的跨平台工具。
          </p>
          <div class="hero-actions">
            <a class="button button-primary" :href="dashboardUrl" target="_blank" rel="noreferrer">
              进入 Dashboard
              <ArrowUpRight :size="18" aria-hidden="true" />
            </a>
            <a class="button button-quiet" :href="githubUrl" target="_blank" rel="noreferrer">
              <GitFork :size="18" aria-hidden="true" />
              查看 GitHub
            </a>
            <a class="button button-quiet" href="#capabilities">
              我们如何构建
              <ArrowDown :size="18" aria-hidden="true" />
            </a>
          </div>
        </div>

        <RhythmStage />
        <div class="stage-chuni-badge" aria-label="chunithmd：CHUNITHM 玩家工具">
          <img src="/chunithmd-icon.png" alt="" />
          <span>CHUNITHMD</span>
          <strong>PLAYER / 02</strong>
        </div>
      </div>

      <a class="scroll-cue" href="#about">
        <span>SCROLL TO START</span>
        <ArrowDown :size="18" aria-hidden="true" />
      </a>
    </section>

    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span>CHUNITHM</span><i></i><span>MAIMAI DX</span><i></i><span>PLAYER TOOLS</span><i></i>
        <span>CHUNITHM</span><i></i><span>MAIMAI DX</span><i></i><span>PLAYER TOOLS</span><i></i>
      </div>
    </div>

    <section id="about" class="manifesto section-light">
      <div class="section-label">
        <span>01</span>
        <span>ABOUT RHYTHMETA</span>
      </div>
      <div class="manifesto-body">
        <p class="manifesto-kicker">BUILD FOR THE NEXT PLAY</p>
        <h2>
          从玩家的真实场景出发，<br />
          把数据、工具与社区<br />
          <em>对齐到同一个节拍。</em>
        </h2>
        <p class="manifesto-copy">
          Rhythmeta 是专注音游体验的开源组织。我们连接端侧能力、跨平台应用与社区协作，让每次游玩都更容易记录、理解和继续。
        </p>
      </div>
    </section>

    <section id="metamorph" class="metamorph-section">
      <div class="metamorph-marks" aria-hidden="true">
        <span class="metamorph-mark metamorph-orbit"></span>
        <span class="metamorph-mark metamorph-orbit metamorph-orbit-small"></span>
        <span class="metamorph-mark metamorph-halftone"></span>
        <span class="metamorph-mark metamorph-cross"></span>
        <span class="metamorph-mark metamorph-tape">FRAGMENT / RECONSTRUCT / REDEFINE</span>
        <span class="metamorph-mark metamorph-barcode"></span>
        <span class="metamorph-mark metamorph-swatch"></span>
      </div>

      <div class="section-label metamorph-section-label">
        <span>02</span>
        <span>RHYTHMETA / MASCOT</span>
      </div>

      <div class="metamorph-layout">
        <div class="metamorph-identity">
          <p class="metamorph-overline">PLAYER SIDE / 00</p>
          <h2>Metamorph</h2>
          <p class="metamorph-description">
            Rhythmeta 的看板娘，陪你在节拍、数据与灵感之间不断变形。
          </p>
          <div class="metamorph-meta">
            <span>ORIGINAL / RECOMPOSED</span>
            <span>RHYTHMETA CHARACTER 01</span>
          </div>
        </div>

        <div class="metamorph-artwork" role="group" aria-label="Metamorph 原图与解构主义版本">
          <figure class="metamorph-art metamorph-art-deconstructed">
            <img src="/metamorph/deconstructed.png" alt="Metamorph 的蓝白解构主义拼贴形象" />
            <figcaption>01 / DECONSTRUCTED</figcaption>
          </figure>
          <figure class="metamorph-art metamorph-art-original">
            <img src="/metamorph/original.png" alt="Metamorph 原始形象：银发少女抱着 maimai 风格玩偶" />
            <figcaption>00 / ORIGINAL</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="capabilities" class="project-section capability-section">
      <div class="project-heading">
        <div class="section-label section-label-dark">
          <span>03</span>
          <span>WHAT WE BUILD</span>
        </div>
        <div>
          <p class="project-overline">OUR FOCUS</p>
          <h2>玩家工具</h2>
        </div>
        <p class="project-intro">
          围绕一次游玩的完整路径，构建从采集、整理到理解数据的开放工具。
        </p>
      </div>

      <div class="capability-visual">
        <div class="capability-copy">
          <span class="visual-index">PLAY / TRACK / SHARE</span>
          <h3>让工具跟上<br />每一次游玩。</h3>
        </div>
        <div class="capability-signal" aria-hidden="true">
          <span v-for="index in 16" :key="index" :style="{ '--signal-index': index }"></span>
          <strong>R/</strong>
        </div>
      </div>

      <div class="feature-list">
        <article v-for="capability in capabilityRows" :key="capability.index" class="feature-row">
          <span class="feature-number">{{ capability.index }}</span>
          <component :is="capability.icon" :size="28" stroke-width="1.7" aria-hidden="true" />
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.description }}</p>
          <ArrowUpRight class="feature-arrow" :size="22" aria-hidden="true" />
        </article>
      </div>
    </section>

    <section id="projects" class="home-project-index section-light">
      <div class="section-label">
        <span>04</span>
        <span>RHYTHMETA PROJECTS</span>
      </div>
      <div class="project-index-heading">
        <p>PLAYER TOOLS / OPEN SOURCE</p>
        <h2>为每一种<br />游玩方式。</h2>
        <span>两款原生玩家工具，<br />共享同一套开放数据理念。</span>
      </div>
      <div class="project-index-list">
        <RouterLink class="project-index-row project-index-maimaid" to="/maimaid">
          <span class="project-index-number">01 / MAIMAI DX</span>
          <img src="/maimaid-icon.png" alt="" />
          <span class="project-index-name">maimaid</span>
          <span class="project-index-copy">记录、查询与同步你的游玩数据</span>
          <ArrowUpRight :size="26" aria-hidden="true" />
        </RouterLink>
        <RouterLink class="project-index-row project-index-chunithmd" to="/chunithmd">
          <span class="project-index-number">02 / CHUNITHM</span>
          <img src="/chunithmd-icon.png" alt="" />
          <span class="project-index-name">chunithmd</span>
          <span class="project-index-copy">曲库、Rating 与相机识别</span>
          <ArrowUpRight :size="26" aria-hidden="true" />
        </RouterLink>
      </div>
    </section>

    <section id="principles" class="principles section-light">
      <div class="section-label">
        <span>05</span>
        <span>OUR PRINCIPLES</span>
      </div>
      <div class="principles-header">
        <p>THE WAY WE BUILD</p>
        <h2>开放，是持续进化的节拍。</h2>
      </div>
      <div class="principle-grid">
        <article>
          <Code2 :size="30" stroke-width="1.6" aria-hidden="true" />
          <span>01 / OPEN</span>
          <h3>开放协作</h3>
          <p>代码与过程保持透明，让好想法进入共同的轨道。</p>
        </article>
        <article>
          <Sparkles :size="30" stroke-width="1.6" aria-hidden="true" />
          <span>02 / PLAYER</span>
          <h3>玩家体验</h3>
          <p>从一次查询、一次录入开始，认真打磨每个高频动作。</p>
        </article>
        <article>
          <Cloud :size="30" stroke-width="1.6" aria-hidden="true" />
          <span>03 / DURABLE</span>
          <h3>长期可靠</h3>
          <p>选择可维护的技术，让玩家数据拥有稳定的归宿。</p>
        </article>
      </div>
    </section>

    <section class="final-cta">
      <div class="cta-grid" aria-hidden="true"></div>
      <p>PLAYER 2, READY?</p>
      <h2>一起把下一拍<br />做得更好。</h2>
      <div class="cta-actions">
        <a class="button button-primary" :href="githubUrl" target="_blank" rel="noreferrer">
          <GitFork :size="19" aria-hidden="true" />
          加入 GitHub
        </a>
        <RouterLink class="button button-outline" to="/chunithmd">
          探索 chunithmd
          <ArrowUpRight :size="18" aria-hidden="true" />
        </RouterLink>
      </div>
    </section>

    <footer>
      <RouterLink class="brand footer-brand" to="/">
        <span class="brand-mark">R/</span>
        <span>RHYTHMETA</span>
      </RouterLink>
      <p>OPEN TOOLS FOR RHYTHM PLAYERS.</p>
      <div>
        <a :href="githubUrl" target="_blank" rel="noreferrer">GITHUB ↗</a>
        <RouterLink to="/maimaid">PROJECTS ↗</RouterLink>
        <RouterLink to="/chunithmd">CHUNITHMD ↗</RouterLink>
      </div>
      <span>© {{ new Date().getFullYear() }} RHYTHMETA</span>
    </footer>
  </main>
</template>
