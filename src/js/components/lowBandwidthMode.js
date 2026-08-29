// EntreSkill Hub - Low Bandwidth & Data Saver Mode Controller

export function initLowBandwidthMode(state) {
  const isEnabled = state.isLowBandwidth || false;
  applyLowBandwidthState(isEnabled);
}

export function toggleLowBandwidthState(state) {
  state.isLowBandwidth = !state.isLowBandwidth;
  applyLowBandwidthState(state.isLowBandwidth);
  return state.isLowBandwidth;
}

function applyLowBandwidthState(isEnabled) {
  if (isEnabled) {
    document.body.classList.add('low-bandwidth-mode');
  } else {
    document.body.classList.remove('low-bandwidth-mode');
  }
}
