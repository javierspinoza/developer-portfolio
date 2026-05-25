<script setup lang="ts">
import { ref, watchEffect, onBeforeUnmount } from "vue";
import gsap from "gsap";
import AppearingText from "../../../components/AppearingText.vue";
import { BREAKPOINTS } from "../../../utils/sizes";
import ProjectedElement from "../../../components/ProjectedElement.vue";
import { usePortfolioContent } from "../../../content/portfolio";

const point = { x: -0.76, y: 3.6, z: 6.75 };
const content = usePortfolioContent();

const wrapperRef = ref<HTMLDivElement | null>(null);
const timelines = ref<{ timeline: gsap.core.Timeline; delay: number }[]>([]);
let matchMedia: gsap.MatchMedia | null = null;

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;

  // Clean up previous matchMedia
  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

  // Initialize GSAP matchMedia
  matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
      isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,
      isLandscape: `(min-aspect-ratio: 1)`,
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (context) => {
      const { conditions } = context;
      const { isLandscape, reduceMotion } = conditions as {
        isMobile: boolean;
        isDesktop: boolean;
        isLandscape: boolean;
        reduceMotion: boolean;
      };

      const tl = gsap.timeline({
        paused: true,
      });

      // Only animate clipPath on landscape (animations disabled on portrait)
      if (isLandscape && !reduceMotion) {
        tl.fromTo(
          wrapperEl,
          { clipPath: "inset(0% 0% 0% 100%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.3, ease: "none" },
          0,
        );
      } else {
        // On portrait, set clipPath immediately without animation
        gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
      }

      // Only add timeline animations on landscape
      if (isLandscape) {
        for (let i = 0; i < timelines.value.length; i++) {
          const item = timelines.value[i];
          if (!item) continue;
          if (reduceMotion) {
            item.timeline.progress(1);
            continue;
          }
          tl.add(() => {
            item.timeline.restart(true);
          }, item.delay + 0.25);
        }
      }

      emit("timeline:created", tl);

      // Return cleanup function
      return () => {
        tl.kill();
      };
    },
  );

  onInvalidate(() => {
    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }
  });
});

onBeforeUnmount(() => {
  if (matchMedia) {
    matchMedia.revert();
  }
});

const handleTimelineCreated = (timeline: gsap.core.Timeline, delay: number) => {
  const updatedTimelines = [...timelines.value, { timeline, delay }];
  timelines.value = updatedTimelines;
};
</script>

<template>
  <ProjectedElement :point="point">
    <article ref="wrapperRef" class="box-details" :aria-label="content.about.terminal.title">
      <div class="box-details-content">
        <h3 class="box-details-title">
          <AppearingText
            :text="content.about.terminal.title"
            :steps="1"
            :duration="0.35"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </h3>
        <dl class="box-details-items">
          <div class="box-details-item">
            <dt class="box-details-key">"{{ content.about.terminal.roleLabel }}"</dt>
            <dd class="box-details-value">
              <AppearingText
                :text="content.profile.role"
                :steps="2"
                :duration="0.35"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.1)"
              />
            </dd>
          </div>
          <div class="box-details-item">
            <dt class="box-details-key">"{{ content.about.terminal.focusLabel }}"</dt>
            <dd class="box-details-value">
              <AppearingText
                :text="content.profile.specialty"
                :steps="3"
                :duration="0.35"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.2)"
              />
            </dd>
          </div>
          <div class="box-details-item">
            <dt class="box-details-key">"{{ content.about.terminal.locationLabel }}"</dt>
            <dd class="box-details-value">
              <AppearingText
                :text="content.profile.location"
                :steps="3"
                :duration="0.35"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.3)"
              />
            </dd>
          </div>
        </dl>
      </div>
    </article>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-details {
  --line-length: min(48px, calc(var(--svw) * 5));

  display: none;

  @include mixins.landscape {
    display: block;
    position: absolute;
    padding-bottom: 3px;
    padding-right: var(--line-length);
    width: 320px;
    max-width: calc(var(--svw) * 30);
    transform: translate(-100%, -50%);
  }

  @include mixins.landscape-large {
    width: 340px;
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-cyan-400);
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: var(--line-length);
    height: 0;
    border-bottom: var(--stroke-sm) solid var(--color-cyan-400);
  }

  &-content {
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    gap: var(--space-xxs);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: var(--space-sm) var(--space-md);

    @include mixins.landscape {
      flex-direction: column;
      justify-content: flex-start;
      padding: var(--space-xs) var(--space-sm);
    }

    @include mixins.mq("md") {
      padding: var(--space-sm) var(--space-md);
    }
  }

  &-item {
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: var(--space-xs);
    align-items: start;
  }

  &-title {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-white-400);
    margin-bottom: var(--space-xxs);

    @include mixins.mq("md") {
      font-size: var(--font-size-title-xxs);
    }
  }

  &-items {
    display: grid;
    gap: var(--space-xs);
    font-size: var(--font-size-sm);

    @include mixins.mq("md") {
      font-size: var(--font-size-sm);
    }
  }

  &-key {
    color: var(--color-cyan-400);
    white-space: nowrap;
  }

  &-value {
    color: var(--color-white-400);
    line-height: 1.25;
  }
}
</style>
