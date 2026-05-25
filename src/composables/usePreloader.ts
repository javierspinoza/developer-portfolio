import { nextTick, onMounted, ref, watch } from "vue";
import gsap from "gsap";

export const preloaderVisible = ref(true);

const MIN_VISIBLE_MS = 350;
const FONT_WAIT_LIMIT_MS = 700;

const wait = (duration: number) => new Promise<void>((resolve) => window.setTimeout(resolve, duration));

const nextPaint = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

export const usePreloader = () => {
  const progress = ref(0.2);

  onMounted(() => {
    const startedAt = performance.now();

    progress.value = 0.55;

    const fontsReady =
      "fonts" in document
        ? Promise.race([document.fonts.ready.then(() => undefined), wait(FONT_WAIT_LIMIT_MS)])
        : wait(0);

    Promise.all([nextTick(), fontsReady, nextPaint()]).then(() => {
      progress.value = 1;

      const remainingVisibleTime = Math.max(0, MIN_VISIBLE_MS - (performance.now() - startedAt));

      gsap.delayedCall(remainingVisibleTime / 1000, () => {
        const preloader = document.querySelector(".preloader") as HTMLElement | null;

        document.body.classList.remove("is-loading");
        preloader?.classList.add("preloader-hidden");
        preloaderVisible.value = false;
      });
    });
  });

  watch(
    progress,
    (newProgress) => {
      const rect = document.querySelector(".preloader-rect") as HTMLElement | null;

      if (rect) rect.style.transform = `scaleY(${newProgress})`;
    },
    { immediate: true },
  );
};
