<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, shallowRef } from "vue";
import { sizes } from "../utils/sizes";
import gsap from "gsap";
import { sceneWeightsInOut } from "../animations/scenes";

type CameraApi = (typeof import("../three/core/camera"))["camera"];
type ProjectionPoint = {
  x: number;
  y: number;
  z: number;
};

const props = defineProps<{
  point: ProjectionPoint;
}>();

const wrapperRef = ref<HTMLDivElement | null>(null);
const cameraApi = shallowRef<CameraApi | null>(null);

let lastTransform = "";

const updatePosition = () => {
  if (!wrapperRef.value) return;
  if (sceneWeightsInOut.about.in === 0) return;
  if (sceneWeightsInOut.about.out === 1) return;

  const isLandscape = sizes.isLandscape;
  const { point } = props;

  const screenPos = isLandscape && cameraApi.value ? cameraApi.value.project(point) : { x: 0, y: 0 };

  const transform = isLandscape ? `translate(${screenPos.x}px, ${screenPos.y}px)` : `translate(0px, 0px)`;

  if (transform !== lastTransform) {
    wrapperRef.value.style.transform = transform;
    lastTransform = transform;
  }
};

onMounted(() => {
  void import("../three/core/camera").then((module) => {
    cameraApi.value = module.camera;
    updatePosition();
  });

  gsap.ticker.add(updatePosition);
});

onBeforeUnmount(() => {
  gsap.ticker.remove(updatePosition);
  cameraApi.value = null;
});
</script>

<template>
  <div ref="wrapperRef" class="projected-element">
    <slot> </slot>
  </div>
</template>

<style scoped lang="scss">
.projected-element {
  width: 100%;
  height: 100%;

  @include mixins.landscape {
    width: 0;
    height: 0;
    position: relative;
  }
}
</style>
