<script setup lang="ts">
import { computed, ref, watch, onMounted } from "vue";
import { previews } from "../../../content/projects/previews";
import { locale } from "../../../i18n/store";
import PreviewCard from "../../projects/components/PreviewCard.vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { isFeatureEnabled } from "../../../utils/features";
import { filterProjectPreviews, projectFilterIds } from "../../projects/utils/projectFilters";

import type { ProjectPreview } from "../../../content/types";
import type { ProjectFilterId } from "../../projects/utils/projectFilters";

const loadedPreviews = ref<ProjectPreview[] | null>(null);
const selectedFilter = ref<ProjectFilterId>("all");

const filteredPreviews = computed(() => {
  if (!loadedPreviews.value) return [];

  return filterProjectPreviews(loadedPreviews.value, selectedFilter.value);
});

const filterOptions = computed(() => {
  const source = loadedPreviews.value ?? [];

  return projectFilterIds.map((filterId) => ({
    id: filterId,
    count: filterProjectPreviews(source, filterId).length,
  }));
});

const emit = defineEmits<{
  (e: "loaded", previews: ProjectPreview[]): void;
}>();

const loadPreviews = async () => {
  if (!locale.value) return;
  const func = previews[locale.value as keyof typeof previews];
  if (!func) return;
  const module = await func();
  loadedPreviews.value = module.default;
  if (filteredPreviews.value.length === 0) selectedFilter.value = "all";
  emit("loaded", module.default);
};

watch(locale, loadPreviews);

onMounted(loadPreviews);
</script>

<template>
  <div class="projects">
    <NotchSection class="projects-notch-start" />
    <NotchSection class="projects-notch-end" />
    <div class="grid">
      <div class="projects-title">
        <Banner class="projects-title-banner" :copy="t('selected')" size="sm" animated />
        <h2 class="projects-title-copy">{{ t("projects") }}</h2>
      </div>
    </div>
    <div class="grid">
      <div class="projects-filters" role="group" :aria-label="t('project-filters-label')">
        <button
          v-for="filter in filterOptions"
          :key="filter.id"
          class="projects-filter"
          :class="{ 'projects-filter-active': selectedFilter === filter.id }"
          type="button"
          :aria-pressed="selectedFilter === filter.id"
          :aria-label="t('project-filter-option-label', { filter: t(`project-filter-${filter.id}`), count: filter.count })"
          data-sound="click"
          data-hoversound="hover"
          @click="selectedFilter = filter.id"
        >
          <span>{{ t(`project-filter-${filter.id}`) }}</span>
          <span class="projects-filter-count">{{ filter.count }}</span>
        </button>
      </div>
      <p class="projects-count" aria-live="polite">
        {{ t("project-filter-count", { count: filteredPreviews.length, total: loadedPreviews?.length ?? 0 }) }}
      </p>
    </div>
    <div class="grid">
      <div class="projects-cards">
        <PreviewCard v-for="preview in filteredPreviews" :key="preview.slug" :preview="preview" />
        <p v-if="loadedPreviews && filteredPreviews.length === 0" class="projects-empty">
          {{ t("project-filter-empty") }}
        </p>
        <PreviewCard v-if="isFeatureEnabled('startProject')" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-400);
  min-height: auto;
  padding-top: 80px;
  padding-bottom: 88px;

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  @include mixins.mq("lg") {
    gap: var(--space-xxxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xl);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-400);
      --icon-color: var(--color-beige-400);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-cards {
    max-width: 100%;
    flex: 1;
    grid-column: 1 / span 12;
    display: grid;
    gap: var(--space-lg);
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));

    @include mixins.mq("md") {
      grid-column: 1 / span 12;
    }

    @include mixins.mq("lg") {
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
      grid-column: 3 / span 8;
    }

    @include mixins.mq("xl") {
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
    }
  }

  &-filters {
    grid-column: 1 / span 12;
    display: flex;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    align-items: center;
    gap: var(--space-xs);
    max-width: 100%;
    padding-bottom: 2px;

    &::-webkit-scrollbar {
      display: none;
    }

    @include mixins.mq("lg") {
      flex-wrap: wrap;
      overflow-x: visible;
      grid-column: 3 / span 8;
    }
  }

  &-filter {
    border: var(--stroke-md) solid var(--color-grayscale-400);
    border-radius: var(--radius-md);
    background-color: transparent;
    color: var(--color-text-400);
    cursor: pointer;
    font-family: inherit;
    font-size: var(--font-size-sm);
    font-weight: 800;
    line-height: 1;
    min-height: 44px;
    white-space: nowrap;
    padding: calc(var(--space-xs) - var(--stroke-md)) calc(var(--space-sm) - var(--stroke-md));
    transition:
      background-color 0.1s ease-in-out,
      border-color 0.1s ease-in-out,
      color 0.1s ease-in-out;
    display: inline-flex;
    align-items: center;
    gap: var(--space-xxs);
    flex: 0 0 auto;

    &:focus-visible {
      outline: var(--stroke-lg) solid var(--color-accent-400);
      outline-offset: 3px;
    }

    @include mixins.hover {
      &:hover {
        border-color: var(--color-text-400);
      }
    }

    &-active {
      background-color: var(--color-text-400);
      border-color: var(--color-text-400);
      color: var(--color-beige-400);
    }

    &-count {
      border-radius: var(--radius-sm);
      background-color: var(--color-grayscale-400);
      color: var(--color-text-300);
      min-width: 20px;
      padding: 3px 6px;
      text-align: center;
      font-family: "ProFontWindows";
      font-size: var(--font-size-xs);
    }

    &-active &-count {
      background-color: var(--color-beige-400);
      color: var(--color-text-400);
    }
  }

  &-empty {
    grid-column: 1 / -1;
    border: var(--stroke-md) solid var(--color-grayscale-400);
    border-radius: var(--radius-lg);
    color: var(--color-text-300);
    font-size: var(--font-size-md);
    font-weight: 700;
    padding: var(--space-md);
  }

  &-count {
    grid-column: 1 / span 12;
    color: var(--color-text-300);
    font-family: "ProFontWindows";
    font-size: var(--font-size-sm);
    margin-top: var(--space-xs);

    @include mixins.mq("lg") {
      grid-column: 3 / span 8;
    }
  }
}
</style>
