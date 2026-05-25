export const supportsWebGL = () => {
  if (typeof window === "undefined") return false;

  const canvas = document.createElement("canvas");

  try {
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};
