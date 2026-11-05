<script setup lang="ts">
import { ArrowDown, ArrowUpRight, BarChart3, Cloud, GitFork, ScanLine } from "@lucide/vue"
import { RouterLink } from "vue-router"
import AppScreenshotPlaceholder from "../components/AppScreenshotPlaceholder.vue"
import SiteHeader from "../components/SiteHeader.vue"

const maimaidRepoUrl = "https://github.com/rhythmeta/maimaid"

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
                        <a class="button button-primary" :href="maimaidRepoUrl" target="_blank" rel="noreferrer">
                            <GitFork :size="18" aria-hidden="true" />
                            查看源码
                        </a>
                    </div>
                </div>

                <div class="maimaid-hero-art" aria-label="maimaid 项目图标与玩家数据标记">
                    <div class="maimaid-art-meta" aria-hidden="true">
                        <span>MAIMAI DX / PLAYER TOOLS</span>
                        <span>PROJECT 01</span>
                    </div>
                    <div class="maimaid-mark-plane" aria-hidden="true">
                        <span class="maimaid-mark-ring"></span>
                        <img src="/maimaid-icon.png" alt="" />
                        <strong>B50<br />TRACKER</strong>
                    </div>
                    <div class="maimaid-art-footer" aria-hidden="true">
                        <span>LOCAL FIRST</span>
                        <span>IOS / ANDROID</span>
                    </div>
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

        <section id="screens" class="maimaid-screens section-light">
            <div class="screens-heading">
                <div class="section-label">
                    <span>02</span>
                    <span>APP SCREENS</span>
                </div>
                <div>
                    <p class="project-overline">CURRENT IOS BUILD</p>
                    <h2>成绩与进度，<br />直接看见。</h2>
                </div>
                <p>
                    从 Best 50 配置到完整成绩查询，核心数据路径都在原生 App 中完成。
                </p>
            </div>

            <div class="maimaid-screen-gallery">
                <figure class="maimaid-screen maimaid-screen-best">
                    <figcaption>
                        <span>01 / BEST 50</span>
                        <strong>调整 B35 与 B15，<br />追踪 DX Rating。</strong>
                    </figcaption>
                    <AppScreenshotPlaceholder
                        index="01"
                        label="maimaid / best 50"
                        image="/maimaid/best-50-screenshot.png"
                    />
                </figure>

                <figure class="maimaid-screen maimaid-screen-query">
                    <AppScreenshotPlaceholder
                        index="02"
                        label="maimaid / score query"
                        image="/maimaid/score-query-screenshot.jpg"
                    />
                    <figcaption>
                        <span>02 / SCORE QUERY</span>
                        <strong>按完成状态筛选，<br />快速定位成绩。</strong>
                    </figcaption>
                </figure>
            </div>
        </section>

        <section id="features" class="project-section maimaid-features">
            <div class="project-heading">
                <div class="section-label section-label-dark">
                    <span>03</span>
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
                <a class="button button-primary" :href="maimaidRepoUrl" target="_blank" rel="noreferrer">
                    <GitFork :size="18" aria-hidden="true" />
                    查看源码
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
                <RouterLink to="/chunithmd">CHUNITHMD ↗</RouterLink>
                <a :href="maimaidRepoUrl" target="_blank" rel="noreferrer">GITHUB ↗</a>
            </div>
            <span>© {{ new Date().getFullYear() }} RHYTHMETA</span>
        </footer>
    </main>
</template>
