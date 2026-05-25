<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;
  max-width: 100%;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }

  &-variant {
    &-sap {
      background-color: #0f4c81;
      color: white;
    }

    &-odoo {
      background-color: #714b67;
      color: white;
    }

    &-magento {
      background-color: #f26322;
      color: #2d1205;
    }

    &-python {
      background-color: #ffd343;
      color: #1f365d;
    }

    &-django {
      background-color: #0c4b33;
      color: white;
    }

    &-fastapi {
      background-color: #009688;
      color: #062b27;
    }

    &-sqlserver {
      background-color: #a91d22;
      color: white;
    }

    &-mysql {
      background-color: #00758f;
      color: white;
    }

    &-laravel {
      background-color: #ff2d20;
      color: white;
    }

    &-livewire {
      background-color: #fb70a9;
      color: #341222;
    }

    &-llm {
      background-color: #151515;
      color: white;
    }

    &-rag {
      background-color: #8b5cf6;
      color: white;
    }

    &-langgraph {
      background-color: #18a957;
      color: #062713;
    }

    &-crewai {
      background-color: #d946ef;
      color: #2d0635;
    }

    &-aws {
      background-color: #ff9900;
      color: #231300;
    }

    &-linux {
      background-color: #111827;
      color: white;
    }

    &-powerbi {
      background-color: #f2c811;
      color: #241d00;
    }

    &-gray {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-500);
      background-color: var(--color-grayscale-400);
    }

    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-typescript {
      background-color: #3178c6;
      color: white;
    }

    &-tailwind {
      background-color: #38bdf8;
      color: #082f49;
    }

    &-java {
      background-color: #e76f00;
      color: #2b1200;
    }

    &-spring {
      background-color: #6db33f;
      color: #102909;
    }

    &-jwt {
      background-color: #111827;
      color: white;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-docker {
      background-color: #2496ed;
      color: #041b2b;
    }

    &-github {
      background-color: #24292f;
      color: white;
    }

    &-playwright {
      background-color: #45ba4b;
      color: #062407;
    }

    &-k6 {
      background-color: #7d64ff;
      color: white;
    }

    &-analytics {
      background-color: #f9ab00;
      color: #2a1b00;
    }

    &-vercelai {
      background-color: #f5f5f5;
      color: #111;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-pydanticai {
      background-color: #e92063;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }
  }
}
</style>
