struct Params {
  time: f32,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn sdSegment(p: vec2f, a: vec2f, b: vec2f) -> f32 {
  let pa = p - a;
  let ba = b - a;
  let h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

fn edgeSignal(p: vec2f, a: vec2f, b: vec2f) -> f32 {
  return 1.0 - smoothstep(0.002, 0.008, sdSegment(p, a, b));
}

fn movingSignal(p: vec2f, a: vec2f, b: vec2f, phase: f32, t: f32) -> f32 {
  let travel = 0.5 + 0.5 * sin(t * 0.46 + phase);
  let point = mix(a, b, travel);
  return exp(-length(p - point) * 74.0);
}

fn cloudNetwork(p: vec2f, t: f32) -> vec2f {
  let q = p - vec2f(0.29, -0.02);
  let n0 = vec2f(-0.22, 0.04);
  let n1 = vec2f(-0.08, -0.13);
  let n2 = vec2f(0.09, -0.04);
  let n3 = vec2f(0.22, 0.13);
  let n4 = vec2f(0.02, 0.19);

  var edges = edgeSignal(q, n0, n1);
  edges += edgeSignal(q, n0, n4);
  edges += edgeSignal(q, n1, n2);
  edges += edgeSignal(q, n2, n3);
  edges += edgeSignal(q, n2, n4);
  edges += edgeSignal(q, n3, n4);

  var pulses = movingSignal(q, n0, n1, 0.0, t);
  pulses += movingSignal(q, n1, n2, 1.8, t);
  pulses += movingSignal(q, n2, n3, 3.4, t);
  pulses += movingSignal(q, n4, n2, 5.1, t);

  var nodes = exp(-length(q - n0) * 76.0);
  nodes += exp(-length(q - n1) * 76.0);
  nodes += exp(-length(q - n2) * 76.0);
  nodes += exp(-length(q - n3) * 76.0);
  nodes += exp(-length(q - n4) * 76.0);

  let cloudLeft =
    1.0 - smoothstep(0.003, 0.01, abs(length(q - vec2f(-0.10, 0.02)) - 0.13));
  let cloudTop =
    1.0 - smoothstep(0.003, 0.01, abs(length(q - vec2f(0.02, -0.03)) - 0.18));
  let cloudRight =
    1.0 - smoothstep(0.003, 0.01, abs(length(q - vec2f(0.15, 0.03)) - 0.12));
  let cloudBase = edgeSignal(q, vec2f(-0.20, 0.14), vec2f(0.24, 0.14));
  let cloud = (cloudLeft + cloudTop + cloudRight + cloudBase) * 0.22;

  return vec2f(edges * 0.34 + nodes * 0.58 + cloud, pulses);
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = params.texel.y / max(params.texel.x, 1.0e-6);
  let p = (uv - vec2f(0.5)) * vec2f(aspect, 1.0);
  let signal = cloudNetwork(p, params.time);

  let cell = floor(uv * vec2f(36.0, 20.0));
  let seed = hash21(cell);
  let spark =
    step(0.982, seed) *
    (0.45 + 0.55 * sin(params.time * 1.5 + seed * 36.0));

  let blue = vec3f(0.0, 0.396078, 0.658824);
  let navy = vec3f(0.035294, 0.141176, 0.231373);
  let orange = vec3f(0.956863, 0.482353, 0.125490);
  let cream = vec3f(0.964706, 0.941176, 0.894118);

  let edgeColor = mix(navy, blue, clamp(signal.x * 1.7, 0.0, 1.0));
  let pulseColor = mix(edgeColor, orange, clamp(signal.y, 0.0, 1.0));
  let color = mix(pulseColor, cream, spark * 0.42);
  let rightSide = smoothstep(0.38, 0.67, uv.x);
  var alpha = signal.x * 0.22 + signal.y * 0.15 + spark * 0.025;
  alpha = clamp(alpha * rightSide, 0.0, 0.26);

  return vec4f(color * alpha, alpha);
}
