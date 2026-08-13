declare module "vanta/dist/vanta.rings.min" {
  import type * as THREE from "three";

  type VantaEffect = {
    destroy: () => void;
  };

  type VantaRingsOptions = {
    el: HTMLElement;
    THREE: typeof THREE;
    color?: number;
    backgroundColor?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    points?: number;
    maxDistance?: number;
  };

  export default function RINGS(options: VantaRingsOptions): VantaEffect;
}
