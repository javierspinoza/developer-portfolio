<script setup lang="ts">
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { lenis } from "../../../composables/useScroll";
import { usePortfolioContent } from "../../../content/portfolio";
import { t } from "../../../i18n/utils/translate";

const content = usePortfolioContent();

const scrollTo = (target: string) => {
  if (lenis.value) {
    lenis.value.scrollTo(target);
    return;
  }

  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <p class="hero-eyebrow">{{ content.hero.eyebrow }}</p>
          <h1 class="hero-title">
            <span>{{ content.profile.name }}</span>
            <small>{{ content.hero.title }}</small>
          </h1>
          <Banner class="hero-banner" :copy="content.profile.role" v-if="!preloaderVisible" animated />
          <p class="hero-subtitle">{{ content.hero.subtitle }}</p>
          <p class="hero-stack">{{ content.hero.stack }}</p>
          <div class="hero-actions">
            <button type="button" class="hero-action hero-action-primary" @click="scrollTo('#projects')">
              {{ content.hero.primaryCta }}
            </button>
            <button type="button" class="hero-action" @click="scrollTo('#contact')">
              {{ content.hero.secondaryCta }}
            </button>
          </div>
          <div class="hero-metrics" :aria-label="t('hero-metrics-label')">
            <div v-for="metric in content.hero.metrics" :key="`${metric.value}-${metric.label}`" class="hero-metric">
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
              <small v-if="metric.detail">{{ metric.detail }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: none;
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    z-index: 0;
    height: 72%;
    pointer-events: none;
    background:
      linear-gradient(180deg, rgba(245, 239, 230, 0.98) 0%, rgba(245, 239, 230, 0.94) 58%, rgba(245, 239, 230, 0) 100%),
      radial-gradient(circle at 50% 28%, rgba(255, 255, 255, 0.64), transparent 52%);

    @include mixins.mq("md") {
      content: none;
    }
  }

  &-content {
    position: relative;
    z-index: 1;
    align-items: center;
    justify-content: center;
    height: 60%;
    padding: calc(var(--height-header) + 44px) var(--space-outer) 0;

    @include mixins.mq("sm") {
      height: 52%;
      padding-top: calc(var(--height-header) + 36px);
    }

    @include mixins.mq("md") {
      height: 46%;
      padding: 0;
    }

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 30%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      gap: var(--space-xxl);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      max-width: 100%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      @include mixins.landscape {
        left: 0;
        transform: translateX(0);
        grid-column: 2 / 13;
        width: fit-content;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      max-width: 780px;
      width: 100%;
      align-items: center;
      text-align: center;

      @include mixins.mq("md") {
        gap: var(--space-md);
      }
    }

    &-button {
      width: fit-content;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: clamp(34px, 11vw, var(--font-size-title-lg));
    line-height: 0.92;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    text-shadow: 0 1px 0 rgba(245, 239, 230, 0.7);

    small {
      display: block;
      font-size: clamp(16px, 5vw, var(--font-size-title-xs));
      line-height: var(--line-height-title);
      color: var(--color-text-300);
      max-width: 660px;
      align-self: center;
    }

    @include mixins.landscape {
      font-size: clamp(46px, 7vw, var(--font-size-title-xxl));
    }

    @include mixins.mq("md") {
      font-size: clamp(42px, 8vw, var(--font-size-title-xxl));

      small {
        font-size: clamp(18px, 3vw, var(--font-size-title-sm));
      }
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: var(--font-size-title-xl);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xxl);
      }
    }
  }

  &-eyebrow,
  &-stack,
  &-subtitle {
    line-height: var(--line-height-copy);
  }

  &-eyebrow,
  &-stack {
    font-family: "ProFontWindows";
    color: var(--color-cyan-500);
  }

  &-subtitle {
    max-width: 680px;
    font-size: var(--font-size-md);
    color: color-mix(in srgb, var(--color-text-400) 78%, var(--color-text-300));
    text-shadow: 0 1px 0 rgba(245, 239, 230, 0.72);

    @include mixins.mq("md") {
      font-size: var(--font-size-lg);
    }
  }

  &-stack {
    max-width: 720px;
    color: var(--color-text-400);
    font-size: var(--font-size-sm);
    text-shadow: 0 1px 0 rgba(245, 239, 230, 0.72);
  }

  &-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-sm);
    width: 100%;
  }

  &-action {
    border: 2px solid var(--color-grayscale-500);
    border-radius: 100px;
    background: rgba(245, 239, 230, 0.9);
    color: var(--color-text-400);
    min-height: 46px;
    padding: 0 16px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    cursor: pointer;
    flex: 1 1 150px;
    max-width: 260px;
    min-width: 0;
    font-size: var(--font-size-sm);

    &:focus-visible {
      outline: 3px solid var(--color-cyan-500);
      outline-offset: 4px;
    }

    &-primary {
      border-color: var(--color-orange-400);
      background: var(--color-orange-400);
      color: var(--color-white-400);
    }
  }

  &-metrics {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: min(100%, 560px);
    gap: var(--space-xs);

    @include mixins.mq("sm") {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &-metric {
    border: 1px solid var(--color-grayscale-500);
    border-radius: var(--radius-md);
    background: rgba(245, 239, 230, 0.86);
    backdrop-filter: blur(4px);
    padding: var(--space-xs);
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);

    strong {
      font-size: var(--font-size-title-xs);
      line-height: 1;
    }

    span {
      font-family: "ProFontWindows";
      color: var(--color-text-300);
      font-size: var(--font-size-xs);
      text-transform: uppercase;
    }

    small {
      color: var(--color-text-300);
      font-size: var(--font-size-xs);
      line-height: 1.2;

      @media (max-width: 479px) {
        display: none;
      }
    }
  }

  &-banner {
    position: absolute;
    bottom: 0;
    right: -16px;
    z-index: 10;
    transform: rotate(-5deg) translate(0, 65%);

    @include mixins.mq("sm") {
      right: -24px;
      transform: rotate(-5deg) translate(0, 70%);
    }

    @include mixins.mq("lg") {
      right: -32px;
      transform: rotate(-5deg) translate(0, 80%);
    }
  }
}
</style>
