<script setup lang="ts">
import Layout from "../../../components/Layout.vue";
import Hero from "./Hero.vue";
import About from "./About.vue";
//import AboutSections from "../features/about/Sections.vue";
import Projects from "./Projects.vue";
import ProfessionalSections from "./ProfessionalSections.vue";
import Contact from "./Contact.vue";
import Footer from "../../../components/Footer.vue";
import { ref, onMounted, onUnmounted, watchEffect, computed, watch, shallowRef } from "vue";
import HeaderHome from "../../../components/HeaderHome.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import ScrollIcon from "../../../components/ScrollIcon.vue";
import gsap from "gsap";
import { useAgent } from "../../../composables/useAgent";
import { projectId, projectVisible } from "../../../composables/useRouteObserver";
import { isTransitioning } from "../../../composables/useProjectTransition";
import { supportsWebGL } from "../../../utils/webgl";
import { t } from "../../../i18n/utils/translate";
import { usePortfolioContent } from "../../../content/portfolio";

type ThreeApi = (typeof import("../../../three"))["three"];
type RendererApi = (typeof import("../../../three/core/renderer"))["renderer"];
type RaycastApi = (typeof import("../../../three/utils/raycast"))["raycast"];
type AnimationsApi = (typeof import("../../../animations"))["animations"];

const introRef = ref<HTMLElement | null>(null);
const stickyObserver = ref<IntersectionObserver | null>(null);
const scrolledPastIntro = ref(false);
const projectsLoaded = ref(false);
const contactRef = ref<HTMLElement | null>(null);
const contactBottom = ref<number>(0);
const aboutSpacerRef = ref<HTMLElement | null>(null);
const isHoveringObject3D = ref<boolean>(false);
const threeCanvasRef = ref<HTMLCanvasElement | null>(null);
const threeReady = ref<boolean>(false);
const webglAvailable = ref(true);
const content = usePortfolioContent();
const { isTouch } = useAgent();
const threeApi = shallowRef<ThreeApi | null>(null);
const rendererApi = shallowRef<RendererApi | null>(null);
const raycastApi = shallowRef<RaycastApi | null>(null);

let animationsApi: AnimationsApi | null = null;
let animationsLoading = false;
let animationsStarted = false;
let isUnmounted = false;

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  scrolledPastIntro.value = entries[0]?.isIntersecting ?? false;
};

const isStickyVisible = computed(() => {
  return scrolledPastIntro.value || !projectsLoaded.value;
});

const updateContactBottomOffset = () => {
  if (!contactRef.value) return;
  const bounding = contactRef.value.getBoundingClientRect();
  const documentBottom = document.documentElement.scrollHeight;
  const elementBottom = bounding.bottom + window.scrollY;
  // distance from bottom of document to bottom of contact section
  contactBottom.value = documentBottom - elementBottom;
};

watch([projectVisible, isTransitioning], () => {
  if (!projectVisible.value) {
    updateContactBottomOffset();
  }
});

watchEffect((onInvalidate) => {
  if (!contactRef.value || preloaderVisible.value) return;

  const resizeObserver = new ResizeObserver(updateContactBottomOffset);
  resizeObserver.observe(contactRef.value as HTMLElement);

  //const intersectionObserver = new IntersectionObserver(updateContactBottomOffset);
  //intersectionObserver.observe(contactRef.value as HTMLElement);

  onInvalidate(() => {
    resizeObserver.disconnect();
    //intersectionObserver.disconnect();
  });
});

const updateCursor = () => {
  if (isTouch.value) return;
  const hoveringBox = raycastApi.value?.getHoveringBox();
  const shouldBePointer = !!hoveringBox;

  if (shouldBePointer !== isHoveringObject3D.value) {
    isHoveringObject3D.value = shouldBePointer;
    document.documentElement.style.cursor = shouldBePointer ? "pointer" : "";
  }
};

const startAnimationsIfReady = async () => {
  if (animationsStarted || animationsLoading) return;
  if (!projectsLoaded.value || preloaderVisible.value) return;
  if (!webglAvailable.value || !threeReady.value) return;

  animationsLoading = true;
  const module = await import("../../../animations");
  animationsLoading = false;

  if (isUnmounted) return;

  animationsApi = module.animations;
  animationsApi.init();
  animationsStarted = true;
};

const initWebgl = async () => {
  if (!webglAvailable.value || !threeCanvasRef.value || threeApi.value) return;

  const [threeModule, rendererModule, raycastModule] = await Promise.all([
    import("../../../three"),
    import("../../../three/core/renderer"),
    import("../../../three/utils/raycast"),
  ]);

  if (isUnmounted || !threeCanvasRef.value) return;

  threeApi.value = threeModule.three;
  rendererApi.value = rendererModule.renderer;
  raycastApi.value = raycastModule.raycast;

  rendererApi.value.setIsActive(webglAvailable.value && !projectVisible.value);
  threeApi.value.init(threeCanvasRef.value, () => {
    threeReady.value = true;
    void startAnimationsIfReady();
  });
};

onMounted(() => {
  isUnmounted = false;
  stickyObserver.value = new IntersectionObserver(handleIntersection);
  stickyObserver.value.observe(introRef.value as HTMLElement);

  webglAvailable.value = supportsWebGL();

  void initWebgl();

  gsap.ticker.add(updateCursor);
});

onUnmounted(() => {
  isUnmounted = true;
  stickyObserver.value?.disconnect();
  stickyObserver.value = null;

  animationsApi?.destroy();
  animationsApi = null;
  animationsLoading = false;
  animationsStarted = false;

  threeApi.value?.destroy();
  threeApi.value = null;
  rendererApi.value = null;
  raycastApi.value = null;
  threeReady.value = false;

  document.documentElement.style.cursor = "";

  gsap.ticker.remove(updateCursor);
});

const handleProjectsLoaded = () => {
  projectsLoaded.value = true;
};

watch([projectsLoaded, threeReady, preloaderVisible], () => {
  void startAnimationsIfReady();
});

watch(
  projectVisible,
  (newVal) => {
    rendererApi.value?.setIsActive(webglAvailable.value && !newVal);
  },
  { immediate: true },
);
</script>

<template>
  <div
    :class="[
      'home-wrapper',
      typeof projectId === 'string' && isTransitioning && `home-wrapper-out`,
      typeof projectId !== 'string' && isTransitioning && `home-wrapper-in`,
    ]"
  >
    <ScrollIcon />
    <Layout>
      <div class="intro-wrapper" ref="introRef">
        <div
          class="intro-sticky"
          :class="{ 'intro-sticky-visible': isStickyVisible }"
          :style="{ '--contact-bottom': `${contactBottom}px` }"
        >
          <canvas
            v-if="webglAvailable"
            :class="['three-canvas', { 'three-canvas-contact': !isStickyVisible }]"
            ref="threeCanvasRef"
            aria-hidden="true"
          ></canvas>
          <div
            v-else
            :class="['three-fallback', { 'three-fallback-contact': !isStickyVisible }]"
            role="img"
            :aria-label="t('webgl-fallback-title')"
          >
            <div class="three-fallback-card">
              <p class="three-fallback-kicker">{{ content.about.label }}</p>
              <h2>{{ t("webgl-fallback-title") }}</h2>
              <p>{{ t("webgl-fallback-copy") }}</p>
            </div>
          </div>
          <div :class="{ 'intro-about-hidden': !isStickyVisible }">
            <About :spacer-ref="aboutSpacerRef" :three-ready="threeReady" />
          </div>
        </div>
        <Hero class="intro-hero" id="hero" />
        <div class="intro-wrapper-spacer"></div>
        <div class="about-spacer" ref="aboutSpacerRef" id="about"></div>
      </div>
      <Projects id="projects" @loaded="handleProjectsLoaded" />
      <ProfessionalSections />
      <div ref="contactRef" class="home-contact">
        <Contact id="contact" v-if="projectsLoaded" />
      </div>
      <Footer :withSocial="false"></Footer>
    </Layout>
  </div>
  <HeaderHome v-if="projectsLoaded" />
</template>

<style scoped lang="scss">
.three-canvas {
  width: calc(var(--svw) * 100);
  height: calc(var(--lvh) * 100);
  max-height: calc(var(--lvh) * 100);
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 55% 42%, rgba(105, 245, 239, 0.16), transparent 28%),
    linear-gradient(180deg, var(--color-beige-400), var(--color-beige-600));

  &-contact {
    position: absolute;
    bottom: var(--contact-bottom);
    left: 0;
    width: 100%;
    height: calc(var(--lvh) * 100);
    max-height: calc(var(--lvh) * 100);
  }
}

.three-fallback {
  width: calc(var(--svw) * 100);
  height: calc(var(--lvh) * 100);
  max-height: calc(var(--lvh) * 100);
  position: relative;
  overflow: hidden;
  display: grid;
  align-items: end;
  padding: var(--space-outer);
  background:
    linear-gradient(90deg, rgba(15, 31, 43, 0.08) 1px, transparent 1px),
    linear-gradient(0deg, rgba(15, 31, 43, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 64% 34%, rgba(105, 245, 239, 0.22), transparent 26%),
    linear-gradient(180deg, var(--color-beige-400), var(--color-beige-600));
  background-size:
    44px 44px,
    44px 44px,
    auto,
    auto;
  pointer-events: none;

  &-contact {
    position: absolute;
    bottom: var(--contact-bottom);
    left: 0;
    width: 100%;
  }

  &-card {
    width: min(100%, 430px);
    border: 1px solid rgba(15, 31, 43, 0.2);
    border-radius: var(--radius-md);
    background: rgba(245, 239, 230, 0.78);
    padding: var(--space-md);
    display: grid;
    gap: var(--space-xs);
    margin-bottom: var(--space-xl);

    h2 {
      font-size: var(--font-size-title-xs);
      line-height: var(--line-height-title);
      font-weight: 900;
    }

    p {
      line-height: var(--line-height-copy);
    }
  }

  &-kicker {
    color: var(--color-cyan-500);
    font-family: "ProFontWindows";
    font-size: var(--font-size-sm);
  }
}

.home {
  &-wrapper {
    transform-origin: center center;

    &-out {
      animation: home-wrapper-out var(--transition-route-duration) var(--transition-route-ease);
    }

    &-in {
      animation: home-wrapper-in var(--transition-route-duration) var(--transition-route-ease);
    }

    @keyframes home-wrapper-out {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.95);
      }
    }

    @keyframes home-wrapper-in {
      0% {
        transform: scale(0.95);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  &-contact {
    position: relative;
    width: 100%;
    min-height: max(calc(var(--lvh) * 100), 720px);
  }
}

.about-spacer {
  max-height: calc(var(--lvh) * 250);
  min-height: calc(var(--lvh) * 250);
}

.intro-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-spacer {
    display: none;

    @include mixins.mq("md") {
      display: block;
      height: 200px;
    }
  }
}

.intro-hero {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: calc(var(--lvh) * 100);
  min-height: calc(var(--lvh) * 100);
  overflow: hidden;
}

.intro-about-hidden {
  visibility: hidden;
}

.intro-sticky {
  top: 0;
  left: 0;
  width: 100%;
  max-height: calc(var(--lvh) * 100);
  min-height: calc(var(--lvh) * 100);
  overflow: hidden;
  z-index: -1;
  display: flex;
  align-items: flex-end;

  &-visible {
    position: sticky;
  }
}

.intro-sticky-content {
  width: calc(var(--svw) * 100);
  height: calc(var(--lvh) * 100);
  max-height: calc(var(--lvh) * 100);
  position: relative;
  overflow: hidden;

  &-contact {
    position: absolute;
    bottom: var(--contact-bottom);
    left: 0;
    width: 100%;
    height: calc(var(--lvh) * 100);
    max-height: calc(var(--lvh) * 100);
  }
}
</style>
