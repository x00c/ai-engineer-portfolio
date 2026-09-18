export const heroVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const heroFragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform sampler2D uBaseTex;
  uniform sampler2D uHelmetTex;
  uniform sampler2D uTrailTex;
  uniform float uReveal;
  void main() {
    vec4 base = texture2D(uBaseTex, vUv);
    vec4 helmet = texture2D(uHelmetTex, vUv);
    float trail = texture2D(uTrailTex, vUv).r;
    float mask = smoothstep(0.05, 0.8, trail) * clamp(uReveal, 0.0, 1.0);
    gl_FragColor = mix(base, helmet, mask);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
