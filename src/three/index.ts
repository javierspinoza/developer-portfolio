import { camera } from "./core/camera";
import { renderer } from "./core/renderer";
import { objects } from "./objects";
import { renderTarget } from "./core/renderTarget";
import { threeSizes } from "./utils/sizes";
import { resources } from "../utils/resources";
import { raycast } from "./utils/raycast";

let canvas: HTMLCanvasElement | null = null;
let isInitialized = false;
let setupId = 0;

const init = (_canvas: HTMLCanvasElement, onReady?: () => void) => {
  canvas = _canvas;
  const currentSetupId = ++setupId;

  const setup = () => {
    if (currentSetupId !== setupId || !canvas || isInitialized) return;

    threeSizes.init(_canvas);
    camera.init();
    renderTarget.init();
    renderer.init(canvas);

    objects.init();
    raycast.init();
    isInitialized = true;
    onReady?.();
  };

  if (resources.isReady) {
    setup();
    return;
  }

  resources.once("ready", setup);
};

const destroy = () => {
  setupId++;

  if (isInitialized) {
    threeSizes.destroy();
    renderTarget.destroy();
    renderer.destroy();
    objects.destroy();
    camera.destroy();
  }

  canvas = null;
  isInitialized = false;
};

export const three = { init, destroy };
