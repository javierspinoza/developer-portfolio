<script setup lang="ts">
import { usePortfolioContent } from "../../../content/portfolio";
import Link from "../../../components/Link.vue";
import { t } from "../../../i18n/utils/translate";

const content = usePortfolioContent();
</script>

<template>
  <section class="professional professional-experience" id="experience">
    <div class="professional-inner grid">
      <div class="professional-heading">
        <p class="professional-label">{{ content.experience.label }}</p>
        <h2 class="professional-title">{{ content.experience.title }}</h2>
        <p class="professional-summary">{{ content.experience.summary }}</p>
      </div>
      <ol class="professional-timeline" :aria-label="content.experience.title">
        <li v-for="item in content.experience.items" :key="`${item.company}-${item.period}`" class="professional-timeline-item">
          <div class="professional-timeline-marker" aria-hidden="true"></div>
          <div class="professional-card professional-experience-card">
            <div class="professional-card-top">
              <p class="professional-card-period">{{ item.period }}</p>
              <h3 class="professional-card-title">{{ item.role }}</h3>
              <p class="professional-card-company">{{ item.company }}</p>
              <p class="professional-card-location">{{ item.location }}</p>
            </div>
            <ul class="professional-card-list">
              <li v-for="responsibility in item.responsibilities" :key="responsibility">
                {{ responsibility }}
              </li>
            </ul>
            <div class="professional-results">
              <p v-for="result in item.results" :key="result" class="professional-result">
                {{ result }}
              </p>
            </div>
            <div class="professional-tags" :aria-label="t('technologies-label')">
              <span v-for="technology in item.technologies" :key="technology" class="professional-tag">
                {{ technology }}
              </span>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <section class="professional professional-skills" id="skills">
    <div class="professional-inner grid">
      <div class="professional-heading">
        <p class="professional-label">{{ content.skills.label }}</p>
        <h2 class="professional-title">{{ content.skills.title }}</h2>
        <p class="professional-summary">{{ content.skills.summary }}</p>
      </div>
      <div class="professional-skills-grid">
        <article v-for="group in content.skills.groups" :key="group.id" class="professional-card professional-skill">
          <div class="professional-card-top">
            <p class="professional-card-kicker">{{ group.id }}</p>
            <h3 class="professional-card-title">{{ group.title }}</h3>
            <p class="professional-card-copy">{{ group.summary }}</p>
          </div>
          <div class="professional-tags">
            <span v-for="item in group.items" :key="item" class="professional-tag">
              {{ item }}
            </span>
          </div>
          <div class="professional-evidence">
            <p class="professional-evidence-label">{{ content.skills.evidenceLabel }}</p>
            <div class="professional-evidence-links">
              <Link
                v-for="evidence in group.evidence"
                :key="`${group.id}-${evidence.slug}`"
                :to="`/project/${evidence.slug}`"
                class="professional-evidence-link"
                data-cursor="arrow"
                data-sound="click"
                data-hoversound="hover"
              >
                {{ evidence.label }}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="professional professional-education" id="education">
    <div class="professional-inner grid">
      <div class="professional-heading">
        <p class="professional-label">{{ content.education.label }}</p>
        <h2 class="professional-title">{{ content.education.title }}</h2>
        <p class="professional-summary">{{ content.education.summary }}</p>
      </div>
      <h3 class="professional-subtitle">{{ content.education.educationLabel }}</h3>
      <div class="professional-education-grid">
        <article v-for="item in content.education.items" :key="item.program" class="professional-card">
          <p class="professional-card-period">{{ item.status }}</p>
          <h3 class="professional-card-title">{{ item.program }}</h3>
          <p class="professional-card-company">{{ item.institution }}</p>
          <p class="professional-card-copy">{{ item.location }}</p>
          <p class="professional-card-copy">{{ item.summary }}</p>
          <div class="professional-tags">
            <span v-for="tag in item.tags" :key="tag" class="professional-tag">
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
      <h3 class="professional-subtitle professional-subtitle-certifications">
        {{ content.education.certificationsLabel }}
      </h3>
      <div class="professional-certifications">
        <article v-for="item in content.education.certifications" :key="`${item.title}-${item.year}`" class="professional-cert">
          <p class="professional-cert-area">{{ item.area }}</p>
          <h3>{{ item.title }}</h3>
          <p>{{ item.issuer }} · {{ item.year }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.professional {
  --section-surface: rgba(245, 239, 230, 0.58);
  position: relative;
  isolation: isolate;
  background:
    linear-gradient(90deg, rgba(15, 31, 43, 0.045) 1px, transparent 1px),
    linear-gradient(0deg, rgba(15, 31, 43, 0.035) 1px, transparent 1px),
    linear-gradient(180deg, var(--color-beige-400), var(--color-beige-500));
  background-size:
    56px 56px,
    56px 56px,
    auto;
  color: var(--color-text-400);
  padding: 72px var(--space-outer);

  @include mixins.mq("md") {
    padding: 104px var(--space-outer);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    z-index: 0;
    height: 96px;
    pointer-events: none;
  }

  &-experience,
  &-education {
    --section-surface: rgba(233, 222, 208, 0.82);
    background:
      linear-gradient(90deg, rgba(15, 31, 43, 0.04) 1px, transparent 1px),
      linear-gradient(0deg, rgba(15, 31, 43, 0.035) 1px, transparent 1px),
      linear-gradient(180deg, var(--color-beige-600), var(--color-beige-500));
    background-size:
      56px 56px,
      56px 56px,
      auto;
  }

  &-experience {
    padding-top: 80px;

    @include mixins.mq("md") {
      padding-top: 96px;
    }

    &::before {
      background: linear-gradient(180deg, var(--color-beige-400), rgba(233, 222, 208, 0));
    }
  }

  &-skills {
    &::before {
      background: linear-gradient(180deg, var(--color-beige-600), rgba(245, 239, 230, 0));
    }
  }

  &-education {
    padding-bottom: 96px;

    @include mixins.mq("md") {
      padding-bottom: 128px;
    }

    &::before {
      background: linear-gradient(180deg, var(--color-beige-400), rgba(233, 222, 208, 0));
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -72px;
      left: 0;
      z-index: 2;
      height: 72px;
      pointer-events: none;
      background: linear-gradient(180deg, rgba(233, 222, 208, 0.96), rgba(245, 239, 230, 0));
    }
  }

  & + & {
    margin-top: -1px;
  }

  &-inner {
    max-width: var(--breakpoint-xxl);
    margin: 0 auto;
    row-gap: var(--space-xl);
    position: relative;
    z-index: 1;
  }

  &-heading,
  &-timeline,
  &-skills-grid,
  &-education-grid,
  &-certifications,
  &-subtitle {
    grid-column: 1 / 13;
  }

  &-heading {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-label {
    color: var(--color-cyan-500);
    font-family: "ProFontWindows";
    font-size: var(--font-size-md);
  }

  &-title {
    font-size: var(--font-size-title-md);
    line-height: var(--line-height-title);
    font-weight: 900;
    letter-spacing: 0.02em;
  }

  &-summary,
  &-card-copy {
    color: var(--color-text-300);
    line-height: var(--line-height-copy);
  }

  &-subtitle {
    font-size: var(--font-size-title-xs);
    line-height: var(--line-height-title);
    font-weight: 900;
    margin-bottom: calc(var(--space-md) * -1);

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }

    &-certifications {
      margin-top: var(--space-lg);
    }
  }

  &-timeline,
  &-skills-grid,
  &-education-grid,
  &-certifications {
    display: grid;
    gap: var(--space-md);

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-skills-grid {
    align-items: stretch;

    @include mixins.mq("lg") {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &-timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    list-style: none;

    &::before {
      content: "";
      position: absolute;
      top: 14px;
      bottom: 14px;
      left: 9px;
      width: 2px;
      background: linear-gradient(180deg, var(--color-cyan-500), var(--color-grayscale-500), transparent);
    }

    &-item {
      position: relative;
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr);
      gap: var(--space-sm);
    }

    &-marker {
      position: relative;
      z-index: 1;
      width: 20px;
      height: 20px;
      margin-top: 8px;
      border: 4px solid var(--section-surface);
      border-radius: 50%;
      background: var(--color-cyan-500);
      box-shadow: 0 0 0 1px var(--color-grayscale-500);
    }
  }

  &-card,
  &-cert {
    background: rgba(255, 255, 255, 0.48);
    border: 1px solid var(--color-grayscale-500);
    border-radius: var(--radius-md);
    padding: var(--space-sm);
    min-width: 0;

    @include mixins.mq("sm") {
      padding: var(--space-md);
    }
  }

  &-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-period {
      color: var(--color-cyan-500);
      font-family: "ProFontWindows";
      font-size: var(--font-size-sm);
    }

    &-kicker {
      color: var(--color-cyan-500);
      font-family: "ProFontWindows";
      font-size: var(--font-size-xs);
      text-transform: uppercase;
    }

    &-title {
      font-size: var(--font-size-title-xs);
      line-height: var(--line-height-title);
      font-weight: 900;
      overflow-wrap: anywhere;
    }

    &-company {
      font-weight: 800;
    }

    &-location {
      color: var(--color-text-300);
      font-family: "ProFontWindows";
      font-size: var(--font-size-sm);
    }

    &-list {
      display: grid;
      gap: var(--space-xs);
      padding-left: 1.15em;
      color: var(--color-text-300);
      line-height: var(--line-height-copy);
    }
  }

  &-experience-card {
    gap: var(--space-md);
  }

  &-skill {
    min-height: 220px;
    justify-content: space-between;
  }

  &-evidence {
    display: grid;
    gap: var(--space-xxs);
    padding-top: var(--space-xs);
    border-top: 1px solid var(--color-grayscale-500);

    &-label {
      color: var(--color-text-300);
      font-family: "ProFontWindows";
      font-size: var(--font-size-xs);
      text-transform: uppercase;
    }

    &-links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xxs);
    }

    &-link {
      border: 1px solid var(--color-grayscale-500);
      border-radius: var(--radius-sm);
      color: var(--color-text-400);
      font-size: var(--font-size-sm);
      font-weight: 800;
      line-height: 1.2;
      max-width: 100%;
      overflow-wrap: anywhere;
      padding: 6px 9px;
      transition:
        border-color 0.15s ease-in-out,
        background-color 0.15s ease-in-out;

      &:focus-visible {
        outline: 3px solid var(--color-cyan-500);
        outline-offset: 3px;
      }

      @include mixins.hover {
        &:hover {
          border-color: var(--color-orange-400);
          background: rgba(255, 255, 255, 0.52);
        }
      }
    }
  }

  &-results {
    display: grid;
    gap: var(--space-xs);
  }

  &-result {
    border-left: 3px solid var(--color-cyan-500);
    background: rgba(255, 255, 255, 0.32);
    padding: 8px 10px;
    color: var(--color-text-400);
    font-weight: 800;
    line-height: var(--line-height-copy);
    overflow-wrap: anywhere;
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
  }

  &-tag {
    border: 1px solid var(--color-grayscale-500);
    border-radius: var(--radius-sm);
    background: var(--color-beige-400);
    padding: 6px 9px;
    font-family: "ProFontWindows";
    font-size: var(--font-size-sm);
    line-height: 1.2;
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  &-cert {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);

    &-area.professional-cert-area {
      color: var(--color-cyan-500);
      font-family: "ProFontWindows";
      font-size: var(--font-size-sm);
    }

    h3 {
      font-size: var(--font-size-lg);
      font-weight: 900;
    }

    p {
      color: var(--color-text-300);
      margin-top: var(--space-xxs);
    }
  }
}
</style>
