<script setup lang="ts">
import { computed } from "vue";
import { soundsEnabled, howlerUnlocked } from "../features/sounds/composables/useHowler";
import ButtonRound from "./ButtonRound.vue";
import Volume from "./icons/Volume.vue";
import { t } from "../i18n/utils/translate";

const props = defineProps<{
  isDarkTheme: boolean;
}>();

const toggleSounds = () => {
  soundsEnabled.value = !soundsEnabled.value;
};

const soundsAreActive = computed(() => soundsEnabled.value && howlerUnlocked.value);
</script>

<template>
  <ButtonRound
    variant="theme"
    :class="{ 'music-toggle': true, 'music-toggle-dark': props.isDarkTheme, 'children-unclickable': true }"
    @click="toggleSounds"
    :aria-label="soundsAreActive ? t('disable-sounds') : t('enable-sounds')"
    :aria-pressed="soundsAreActive"
    :title="soundsAreActive ? t('disable-sounds') : t('enable-sounds')"
    aria-keyshortcuts="M"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <Volume :active="soundsAreActive" />
    <span class="visually-hidden">{{ soundsAreActive ? t("sounds-on") : t("sounds-off") }}</span>
  </ButtonRound>
</template>

<style scoped lang="scss">
.music-toggle {
  &-dark {
    background-color: var(--color-dark-blue-500);
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }
}
</style>
