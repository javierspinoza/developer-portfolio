<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import Social from "../../../components/Social.vue";
import { usePortfolioContent } from "../../../content/portfolio";
import ArrowRightLong from "../../../components/icons/ArrowRightLong.vue";
import Linkedin from "../../../components/icons/Linkedin.vue";
import Mail from "../../../components/icons/Mail.vue";
import Whatsapp from "../../../components/icons/Whatsapp.vue";

type ContactTransition = (typeof import("../../../animations/transitions/contact"))["contact"];

const contactElement = ref<HTMLElement | null>(null);
const content = usePortfolioContent();
let contactTransition: ContactTransition | null = null;
let isUnmounted = false;

const contactLinks = computed(() => [
  {
    key: "email",
    label: content.value.contact.emailLabel,
    value: content.value.profile.email,
    cta: content.value.contact.emailCta,
    href: `mailto:${content.value.profile.email}`,
    icon: Mail,
    external: false,
    ariaLabel: `${content.value.contact.emailCta}: ${content.value.profile.email}`,
  },
  {
    key: "linkedin",
    label: content.value.contact.linkedinLabel,
    value: "javier-espinosa-pico",
    cta: content.value.contact.linkedinCta,
    href: content.value.profile.linkedin,
    icon: Linkedin,
    external: true,
    ariaLabel: `${content.value.contact.linkedinCta}: ${content.value.profile.name}`,
  },
  {
    key: "whatsapp",
    label: content.value.contact.whatsappLabel,
    value: content.value.profile.whatsapp.label,
    cta: content.value.contact.whatsappCta,
    href: content.value.profile.whatsapp.url,
    icon: Whatsapp,
    external: true,
    ariaLabel: `${content.value.contact.whatsappCta}: ${content.value.profile.whatsapp.label}`,
  },
]);

onMounted(async () => {
  isUnmounted = false;
  if (!contactElement.value) return;

  const element = contactElement.value;
  const module = await import("../../../animations/transitions/contact");

  if (isUnmounted) return;

  contactTransition = module.contact;
  contactTransition.setup(element);
});

onUnmounted(() => {
  isUnmounted = true;
  contactTransition?.destroy();
  contactTransition = null;
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title">{{ content.contact.title }}</h2>
      <p class="contact-copy">{{ content.contact.summary }}</p>
      <p class="contact-response">{{ content.contact.responseTime }}</p>
      <div class="contact-links" :aria-label="content.contact.channelsLabel">
        <a
          v-for="link in contactLinks"
          :key="link.key"
          class="contact-link"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          :aria-label="link.ariaLabel"
          data-cursor="circle-white"
          data-sound="click"
          data-hoversound="hover"
        >
          <span class="contact-link-icon" aria-hidden="true">
            <component :is="link.icon" />
          </span>
          <span class="contact-link-copy">
            <strong>{{ link.label }}</strong>
            <span>{{ link.value }}</span>
            <small>{{ link.cta }}</small>
          </span>
          <ArrowRightLong class="contact-link-arrow" aria-hidden="true" />
        </a>
      </div>
      <Social variant="background" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: visible;
  min-height: max(calc(var(--lvh) * 100), 720px);
  padding: var(--space-outer);
  padding-top: calc(var(--height-header) + var(--space-xl));
  padding-bottom: var(--space-xxl);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    max-width: 100%;

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 6;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: clamp(42px, 14vw, var(--font-size-title-lg));
    line-height: 0.95;

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-copy {
    color: var(--color-text-300);
    line-height: var(--line-height-copy);
    max-width: 520px;
  }

  &-response {
    font-family: "ProFontWindows";
    color: var(--color-cyan-500);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-copy);
  }

  &-links {
    display: grid;
    gap: var(--space-sm);
    max-width: 620px;
  }

  &-link {
    border: 1px solid var(--color-grayscale-500);
    border-radius: var(--radius-md);
    background: rgba(245, 239, 230, 0.72);
    color: var(--color-text-400);
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    align-items: center;
    gap: var(--space-sm);
    min-height: 82px;
    padding: var(--space-sm);
    transition:
      border-color 0.15s ease-in-out,
      background-color 0.15s ease-in-out,
      transform 0.15s ease-in-out;

    @include mixins.hover {
      &:hover {
        border-color: var(--color-orange-400);
        background: rgba(245, 239, 230, 0.9);
        transform: translateY(-2px);
      }
    }

    &:focus-visible {
      outline: 3px solid var(--color-cyan-500);
      outline-offset: 4px;
    }

    &-icon {
      --icon-color: var(--color-orange-400);
      width: 46px;
      height: 46px;
      border-radius: 999px;
      border: 1px solid var(--color-grayscale-500);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
    }

    &-copy {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;

      strong {
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.02em;
      }

      span,
      small {
        overflow-wrap: anywhere;
      }

      span {
        color: var(--color-text-300);
        font-family: "ProFontWindows";
        font-size: var(--font-size-sm);
      }

      small {
        color: var(--color-text-400);
        font-size: var(--font-size-sm);
      }
    }

    &-arrow {
      display: none;
      width: 28px;
      transform: rotate(-45deg);

      @include mixins.mq("sm") {
        display: block;
      }
    }
  }
}
</style>
@include mixins.mq("sm") { grid-template-columns: 46px minmax(0, 1fr) 28px; }
