import { resources } from "../../../utils/resources";
import {
  BoxGeometry,
  CanvasTexture,
  Color,
  DoubleSide,
  LinearFilter,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Vector3,
  Euler,
  Group,
  ShaderMaterial,
  LinearSRGBColorSpace,
  TorusGeometry,
} from "three";
import { scene } from "../../core/scene";
import { animations } from "./animations";
import { sceneWeights, sceneWeightsInOut } from "../../../animations/scenes";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { face } from "./face";
import { leftDesktop as avatarLeftDesktop } from "./left-desktop";
import matcapVertexShader from "../../shaders/avatar-matcap/vertex.glsl";
import matcapFragmentShader from "../../shaders/avatar-matcap/fragment.glsl";
import headVertexShader from "../../shaders/avatar-head/vertex.glsl";
import headFragmentShader from "../../shaders/avatar-head/fragment.glsl";
import gsap from "gsap";
import { aboutProgress } from "../../../animations/transitions/about";
//import { avatarHologram } from "./hologram";

import type { Material, Bone, Texture } from "three";

let mesh: Mesh | null = null;
let rightHandBone: Bone | null = null;
let glasses: Group | null = null;
let shirtBadges: Group | null = null;

const tIdleIntensity = { value: 0 };

const waypointsPosition = new Vector3();
const waypointsRotation = new Euler();
const transform = new Group();
const uniforms = { uProgress: { value: 0 }, uAmbientStrength: { value: 0 } };
const contactPosition = new Vector3(0, -13, 0);
const contactRotation = new Euler(0, -Math.PI, 0);

const avatarStyle = {
  black: { tint: new Color("#0b1220"), strength: 0.92 },
  gray: { tint: new Color("#20242c"), strength: 0.72 },
  white: { tint: new Color("#eef2f7"), strength: 0.34 },
  skin: { tint: new Color("#f4c5a4"), strength: 0.12 },
} as const;

const init = () => {
  setupMesh();
  animations.init();
  face.init();
  avatarLeftDesktop.init();
  gsap.ticker.add(tick);
};

const getMaterial = (name: string): Material | null => {
  if (name === "face") return face.getMaterial();
  if (name === "head") {
    const texture = resources.items["head-texture"];
    texture.flipY = false;
    texture.colorSpace = LinearSRGBColorSpace;
    texture.generateMipmaps = false;
    return new ShaderMaterial({
      vertexShader: headVertexShader,
      fragmentShader: headFragmentShader,
      transparent: true,
      uniforms: {
        uHeadTexture: { value: texture },
        ...uniforms,
      },
    });
  }

  const tex = resources.items["matcap-black"];
  tex.colorSpace = LinearSRGBColorSpace;
  tex.generateMipmaps = false;

  const style = avatarStyle[name as keyof typeof avatarStyle];

  return new ShaderMaterial({
    vertexShader: matcapVertexShader,
    fragmentShader: matcapFragmentShader,
    transparent: true,
    uniforms: {
      uMatcap: { value: tex },
      uTint: { value: style?.tint ?? new Color("#ffffff") },
      uTintStrength: { value: style?.strength ?? 0 },
      ...uniforms,
    },
  });
};

const assignMatcap = (child: Mesh): boolean => {
  let tex: Texture | null = null;

  if (child.name === "black") {
    tex = resources.items["matcap-black"];
  } else if (child.name === "gray") {
    tex = resources.items["matcap-gray"];
  } else if (child.name === "skin") {
    tex = resources.items["matcap-skin"];
  } else if (child.name === "white") {
    tex = resources.items["matcap-white"];
  }

  if (tex) {
    tex.colorSpace = LinearSRGBColorSpace;
    child.userData.matcap = tex;
    return true;
  }

  return false;
};

const setupMesh = () => {
  if (mesh) return;
  const resource = resources.items["avatar-model"];
  mesh = cloneSkeleton(resource.scene.children[0]) as Mesh;

  mesh.frustumCulled = false;

  mesh.traverse((child) => {
    if (child instanceof Mesh) {
      const mat = getMaterial(child.name);
      if (!mat) return;
      child.material = mat;
      child.frustumCulled = false;
      child.renderOrder = child.name === "face" ? 25 : 24;

      const hasMatcap = assignMatcap(child);
      if (hasMatcap) {
        child.onBeforeRender = () => {
          child.material.uniforms.uMatcap.value = child.userData.matcap;
        };
      }
    }
  });

  const brain = mesh.getObjectByName("brain") as Mesh;
  if (brain) {
    mesh.remove(brain);
  }

  mesh.rotation.z = 0;

  transform.add(mesh);

  rightHandBone = mesh.getObjectByName("bone-right-hand") as Bone;
  setupGlasses();
  setupShirtBadges();

  scene.instance.add(transform);
};

const setupGlasses = () => {
  if (!mesh || glasses) return;

  const headBone = mesh.getObjectByName("headBone") as Bone | null;
  if (!headBone) return;

  const material = new MeshBasicMaterial({
    color: "#15171d",
    transparent: true,
    opacity: 0.92,
  });

  const lensGeometry = new TorusGeometry(0.16, 0.017, 8, 28);
  const bridgeGeometry = new BoxGeometry(0.16, 0.025, 0.026);
  const templeGeometry = new BoxGeometry(0.19, 0.022, 0.026);

  glasses = new Group();
  glasses.name = "modern-glasses";
  glasses.position.set(0, 0.28, -0.31);
  glasses.rotation.x = 0.08;

  const leftLens = new Mesh(lensGeometry, material);
  leftLens.position.x = -0.2;

  const rightLens = new Mesh(lensGeometry, material);
  rightLens.position.x = 0.2;

  const bridge = new Mesh(bridgeGeometry, material);
  bridge.position.z = 0.004;

  const leftTemple = new Mesh(templeGeometry, material);
  leftTemple.position.set(-0.36, 0.01, 0.12);
  leftTemple.rotation.y = -0.72;

  const rightTemple = new Mesh(templeGeometry, material);
  rightTemple.position.set(0.36, 0.01, 0.12);
  rightTemple.rotation.y = 0.72;

  glasses.add(leftLens, rightLens, bridge, leftTemple, rightTemple);
  glasses.traverse((child) => {
    if (child instanceof Mesh) {
      child.renderOrder = 26;
      child.frustumCulled = false;
    }
  });

  headBone.add(glasses);
};

const createBadgeTexture = (label: string, accent: string): CanvasTexture => {
  const canvas = document.createElement("canvas");
  const width = 512;
  const height = 256;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d")!;
  const radius = 42;
  const x = 14;
  const y = 18;
  const w = width - x * 2;
  const h = height - y * 2;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, radius);
  ctx.fillStyle = "rgba(8, 13, 25, 0.92)";
  ctx.fill();
  ctx.lineWidth = 12;
  ctx.strokeStyle = accent;
  ctx.stroke();

  ctx.fillStyle = "#f8fbff";
  ctx.font = label.length > 4 ? "800 82px Urbanist, Arial, sans-serif" : "900 112px Urbanist, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, width / 2, height / 2 + 6);

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = LinearSRGBColorSpace;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;

  return texture;
};

const createBadge = (label: string, accent: string, width: number, height: number): Mesh => {
  const texture = createBadgeTexture(label, accent);
  const material = new MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
  });

  const badge = new Mesh(new PlaneGeometry(width, height), material);
  badge.renderOrder = 27;
  badge.frustumCulled = false;

  return badge;
};

const setupShirtBadges = () => {
  if (!mesh || shirtBadges) return;

  const chestBone = mesh.getObjectByName("spine2Bone") as Bone | null;
  if (!chestBone) return;

  shirtBadges = new Group();
  shirtBadges.name = "full-stack-shirt-badges";
  shirtBadges.position.set(0, -0.32, 0.38);
  shirtBadges.rotation.x = -0.1;

  const mainBadge = createBadge("FULL STACK", "#38bdf8", 0.64, 0.2);
  mainBadge.position.set(0, 0.05, 0);

  const codeBadge = createBadge("</>", "#ff8a00", 0.2, 0.14);
  codeBadge.position.set(-0.23, -0.13, 0.012);

  const apiBadge = createBadge("API", "#22c55e", 0.2, 0.14);
  apiBadge.position.set(0, -0.13, 0.012);

  const dbBadge = createBadge("DB", "#a78bfa", 0.2, 0.14);
  dbBadge.position.set(0.23, -0.13, 0.012);

  shirtBadges.add(mainBadge, codeBadge, apiBadge, dbBadge);
  chestBone.add(shirtBadges);
};

const tick = () => {
  animations.update();

  const isContact = sceneWeights.contact > 0.001;

  if (isContact) {
    transform.position.copy(contactPosition);
    transform.rotation.copy(contactRotation);
    uniforms.uProgress.value = 0;
    uniforms.uAmbientStrength.value = 0;
    transform.visible = true;
    return;
  }

  transform.position.copy(waypointsPosition);
  transform.rotation.copy(waypointsRotation);

  //uniforms.uProgress.value = sceneWeightsInOut.about.in * 1.1 - 0.1;
  uniforms.uProgress.value = aboutProgress.value * 1.1 - 0.1;
  uniforms.uAmbientStrength.value = sceneWeightsInOut.about.in;

  if (!mesh) return;
  if (uniforms.uProgress.value > 0.999 && sceneWeights.contact > 0.99) {
    mesh.visible = false;
  } else {
    mesh.visible = true;
  }
};

const destroy = () => {
  //mesh = null;
  //transform.clear();
  face.destroy();
  gsap.ticker.remove(tick);
};

export const avatar = {
  init,
  destroy,
  getMesh: () => mesh,
  getRightHandBone: () => rightHandBone,
  tIdleIntensity,
  waypointsPosition,
  waypointsRotation,
  uniforms,
  transform,
};
