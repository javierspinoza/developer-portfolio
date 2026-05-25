<script setup lang="ts">
import Button from "./Button.vue";
import Logo from "./Logo.vue";
import { computed, ref } from "vue";
import { t } from "../i18n/utils/translate";
import { useHeaderTheme } from "../composables/useHeaderTheme";
import { lenis } from "../composables/useScroll";
import { projectId } from "../composables/useRouteObserver";
import { social } from "../content/social";
import ButtonRound from "./ButtonRound.vue";
import ArrowRight from "./icons/ArrowRight.vue";
import SoundsToggle from "./SoundsToggle.vue";
import LangSwitch from "./LangSwitch.vue";
import { isFeatureEnabled } from "../utils/features";
import { useRouter } from "../composables/useRouter";
import { useFirstRoute } from "../composables/useFirstRoute";
import { usePortfolioContent } from "../content/portfolio";

const router = useRouter();
const { isFirstRoute } = useFirstRoute();
const content = usePortfolioContent();
type AnchorLink = "about" | "projects" | "experience" | "skills" | "education" | "contact";
const mobileSections: AnchorLink[] = ["about", "projects", "experience", "skills", "education", "contact"];

const scrolledPastHeroVisible = ref(false);
const { isDarkTheme } = useHeaderTheme({
  onUpdate: (element, boundingClientRect, hasScrolledIntoView) => {
    if (!element || !boundingClientRect) {
      scrolledPastHeroVisible.value = false;
      return;
    }

    if (hasScrolledIntoView) {
      scrolledPastHeroVisible.value = true;
    } else {
      scrolledPastHeroVisible.value = false;
    }
  },
});

const handleBackClick = () => {
  // If it's the first route the user visited, navigate to home
  // Otherwise, go back in browser history
  if (isFirstRoute.value) {
    router.push("/");
  } else {
    router.back();
  }
};

const handleLogoClick = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const handleLogoKeydown = (event: KeyboardEvent) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  handleLogoClick();
};

const handleAnchorClick = (section: AnchorLink) => {
  const target = `#${section}`;

  if (lenis.value) {
    lenis.value.scrollTo(target);
    return;
  }

  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
};

const classNames = computed(() => {
  return {
    header: true,
    "header-dark": isDarkTheme.value,
    "header-scrolled": scrolledPastHeroVisible.value,
    [`project-${projectId.value}`]: projectId.value !== null,
  };
});

const getInTouchClassNames = computed(() => {
  return {
    "header-get-in-touch": true,
    "header-get-in-touch-isProjectPage": projectId.value !== null,
  };
});
</script>

<template>
  <header :class="classNames">
    <div class="header-left">
      <ButtonRound
        v-if="projectId !== null"
        variant="accent"
        @click="handleBackClick"
        :aria-label="t('back-to-home')"
        :class="{ 'header-back': true, 'header-back-isProjectPage': projectId !== null }"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
      >
        <ArrowRight class="header-back-icon" />
      </ButtonRound>
    </div>
    <div
      :class="{
        'header-logo': true,
        'header-logo-isProjectPage': projectId !== null,
        'header-logo-clickable': scrolledPastHeroVisible,
        'children-unclickable': true,
      }"
      @click="handleLogoClick"
      @keydown="handleLogoKeydown"
      role="button"
      :tabindex="scrolledPastHeroVisible && projectId === null ? 0 : -1"
      :aria-label="t('back-to-home')"
      data-sound="click"
      data-hoversound="hover"
      data-cursor="circle-white"
    >
      <Logo class="header-logo-image" />
    </div>
    <div class="header-right">
      <Button
        renderAs="a"
        variant="accent"
        :aria-label="t('get-in-touch')"
        :href="social.find((item) => item.name === 'mail')?.url ?? ''"
        external
        :class="getInTouchClassNames"
        data-cursor="circle-white"
        data-hoversound="hover"
        >{{ t("get-in-touch") }}</Button
      >
      <LangSwitch />
      <SoundsToggle class="header-sounds-toggle" :isDarkTheme="isDarkTheme" v-if="isFeatureEnabled('sounds')" />
    </div>
    <nav
      v-if="projectId === null"
      class="header-mobile-nav"
      :class="{ 'header-mobile-nav-dark': isDarkTheme }"
      :aria-label="t('primary-navigation-label')"
    >
      <button
        v-for="section in mobileSections"
        :key="section"
        type="button"
        class="header-mobile-nav-link"
        @click="handleAnchorClick(section)"
      >
        {{ content.nav[section] }}
      </button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  width: var(--breakpoint-xxxl);
  padding: 0 var(--space-outer);
  max-width: 100%;
  z-index: var(--z-index-header);
  height: var(--height-header);
  pointer-events: none;

  --scrolled: 0;

  &-scrolled {
    --scrolled: 1;
  }

  &-back {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    transition-delay: 0.1s;
    pointer-events: auto;

    &-icon {
      width: 100%;
      transform: rotate(180deg);
    }

    &-isProjectPage {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &-left {
    position: absolute;
    left: var(--space-outer);
    top: 50%;
    transform: translateY(-50%);
  }

  &-get-in-touch {
    width: fit-content;

    &-isProjectPage {
      opacity: 1 !important;
    }

    @media (max-width: 479px) {
      display: none;
    }
  }

  &-right {
    position: absolute;
    right: var(--space-outer);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    @include mixins.mq("sm") {
      gap: var(--space-sm);
    }
  }

  &-mobile-nav {
    position: absolute;
    top: calc(100% - 2px);
    left: var(--space-outer);
    right: var(--space-outer);
    pointer-events: auto;
    display: flex;
    gap: var(--space-xs);
    overflow-x: auto;
    padding: 4px;
    background: rgba(245, 239, 230, 0.86);
    border: 1px solid var(--color-grayscale-500);
    border-radius: 100px;
    scrollbar-width: none;
    scroll-padding-inline: 4px;

    &::-webkit-scrollbar {
      display: none;
    }

    @include mixins.mq("lg") {
      display: none;
    }

    &-dark {
      background: rgba(15, 31, 43, 0.88);
      border-color: rgba(105, 245, 239, 0.28);
      color: var(--color-white-400);
    }
  }

  &-mobile-nav-link {
    flex: 0 0 auto;
    min-height: 34px;
    border: 0;
    border-radius: 100px;
    background: transparent;
    padding: 0 10px;
    color: inherit;
    font-size: var(--font-size-xs);
    font-weight: 800;
    text-transform: uppercase;

    @include mixins.mq("sm") {
      padding: 0 12px;
      font-size: var(--font-size-sm);
    }

    &:focus-visible {
      outline: 3px solid var(--color-cyan-500);
      outline-offset: 2px;
    }
  }

  &-music-toggle {
    display: flex;
  }

  &-dark {
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }

  &-get-in-touch {
    display: none;

    @include mixins.mq("md") {
      display: flex;
    }
  }

  &-logo {
    cursor: pointer;
    display: flex;
    gap: var(--space-xs);
    transition: color 0.2s ease-in-out;
    opacity: var(--scrolled);
    pointer-events: none;

    &-clickable {
      pointer-events: all;
    }

    @include mixins.mq("md") {
      gap: var(--space-sm);
    }

    &-isProjectPage {
      transition: opacity 0.2s ease-in-out;
      pointer-events: none;
      opacity: 0;
    }

    &-image {
      width: 36px;

      @include mixins.mq("md") {
        width: 40px;
      }
    }

    &-text {
      font-weight: 900;
      font-size: 18px;

      @include mixins.mq("md") {
        font-size: 20px;
      }
    }
  }
}
</style>
