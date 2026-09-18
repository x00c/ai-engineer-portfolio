export const trailPassVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const trailPassFragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform sampler2D uPrevTrail;
  uniform vec2 uPointerUv;
  uniform float uBrushRadius;
  uniform float uBrushStrength;
  uniform float uDecay;
  uniform float uActive;
  void main() {
    float previous = texture2D(uPrevTrail, vUv).r * uDecay;
    float brush = 1.0 - smoothstep(0.0, uBrushRadius, distance(vUv, uPointerUv));
    float trail = max(previous, brush * uBrushStrength * uActive);
    gl_FragColor = vec4(vec3(trail), 1.0);
  }
`;
