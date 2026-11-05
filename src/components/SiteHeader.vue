<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { ArrowUpRight, ChevronDown, GitFork, Menu, X } from "@lucide/vue"
import { RouterLink, useRoute } from "vue-router"

const props = withDefaults(
  defineProps<{
    page?: "home" | "maimaid" | "chunithmd"
  }>(),
  { page: "home" },
)

const route = useRoute()
const menuOpen = ref(false)
const projectsOpen = ref(false)
const dropdownRef = ref<HTMLDivElement | null>(null)

const links = computed(() =>
  props.page === "maimaid"
    ? [
        { label: "OVERVIEW", to: "/maimaid#overview" },
        { label: "SCREENS", to: "/maimaid#screens" },
        { label: "FEATURES", to: "/maimaid#features" },
      ]
    : props.page === "chunithmd"
      ? [
          { label: "OVERVIEW", to: "/chunithmd#overview" },
          { label: "SCANS", to: "/chunithmd#screens" },
          { label: "FEATURES", to: "/chunithmd#features" },
        ]
    : [
        { label: "ABOUT", to: "/#about" },
        { label: "CAPABILITIES", to: "/#capabilities" },
        { label: "PRINCIPLES", to: "/#principles" },
      ],
)

const githubUrl = computed(() =>
  props.page === "maimaid"
    ? "https://github.com/rhythmeta/maimaid"
    : props.page === "chunithmd"
      ? "https://github.com/rhythmeta/chunithmd"
      : "https://github.com/rhythmeta",
)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
    projectsOpen.value = false
  },
)

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    menuOpen.value = false
    projectsOpen.value = false
  }
}

function onProjectsFocusout(event: FocusEvent) {
  const nextTarget = event.relatedTarget
  if (!(nextTarget instanceof Node) || !dropdownRef.value?.contains(nextTarget)) {
    projectsOpen.value = false
  }
}

onMounted(() => window.addEventListener("keydown", onKeydown))
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown))
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="Rhythmeta 首页">
      <span class="brand-mark">R/</span>
      <span>RHYTHMETA</span>
    </RouterLink>

    <nav class="desktop-nav" aria-label="主导航">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to">
        {{ link.label }}
      </RouterLink>

      <div
        ref="dropdownRef"
        class="nav-dropdown"
        @mouseenter="projectsOpen = true"
        @mouseleave="projectsOpen = false"
        @focusin="projectsOpen = true"
        @focusout="onProjectsFocusout"
      >
        <button
          class="nav-dropdown-trigger"
          type="button"
          :aria-expanded="projectsOpen"
          aria-controls="projects-dropdown"
          @click="projectsOpen = true"
        >
          PROJECTS
          <ChevronDown :size="14" :class="{ rotated: projectsOpen }" aria-hidden="true" />
        </button>

        <Transition name="dropdown-fade">
          <div v-if="projectsOpen" id="projects-dropdown" class="projects-dropdown">
            <RouterLink class="project-menu-item" to="/maimaid">
              <span>01</span>
              <div>
                <strong>maimaid</strong>
                <small>maimai DX player companion</small>
              </div>
              <ArrowUpRight :size="17" aria-hidden="true" />
            </RouterLink>
            <RouterLink class="project-menu-item" to="/chunithmd">
              <span>02</span>
              <div>
                <strong>chunithmd</strong>
                <small>CHUNITHM player companion</small>
              </div>
              <ArrowUpRight :size="17" aria-hidden="true" />
            </RouterLink>
          </div>
        </Transition>
      </div>
    </nav>

    <a
      class="header-github"
      :href="githubUrl"
      target="_blank"
      rel="noreferrer"
      :aria-label="
        page === 'maimaid'
          ? '访问 maimaid GitHub'
          : page === 'chunithmd'
            ? '访问 chunithmd GitHub'
            : '访问 Rhythmeta GitHub'
      "
    >
      <GitFork :size="19" aria-hidden="true" />
      <span>GITHUB</span>
    </a>

    <button
      class="menu-button"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="mobile-menu"
      :aria-label="menuOpen ? '关闭导航' : '打开导航'"
      @click="menuOpen = !menuOpen"
    >
      <X v-if="menuOpen" :size="23" aria-hidden="true" />
      <Menu v-else :size="23" aria-hidden="true" />
    </button>
  </header>

  <Transition name="menu-fade">
    <nav v-if="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="移动端导航">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to">
        {{ link.label }}
      </RouterLink>
      <button
        class="mobile-projects-trigger"
        type="button"
        :aria-expanded="projectsOpen"
        aria-controls="mobile-projects"
        @click="projectsOpen = !projectsOpen"
      >
        <span>PROJECTS</span>
        <ChevronDown :size="16" :class="{ rotated: projectsOpen }" aria-hidden="true" />
      </button>
      <Transition name="mobile-projects">
        <div v-if="projectsOpen" id="mobile-projects" class="mobile-project-list">
          <RouterLink class="mobile-project-link" to="/maimaid">
            <span>01</span>
            <strong>maimaid</strong>
            <ArrowUpRight :size="17" aria-hidden="true" />
          </RouterLink>
          <RouterLink class="mobile-project-link" to="/chunithmd">
            <span>02</span>
            <strong>chunithmd</strong>
            <ArrowUpRight :size="17" aria-hidden="true" />
          </RouterLink>
        </div>
      </Transition>
      <a :href="githubUrl" target="_blank" rel="noreferrer">GITHUB ↗</a>
    </nav>
  </Transition>
</template>
