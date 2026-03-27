import { buildLegacyTheme } from 'sanity';

const blue = '#193F75';
const white = '#ffffff';
const dark = '#0f1f38';

export const fowconTheme = buildLegacyTheme({
  '--white': white,
  '--black': dark,

  '--component-bg': white,
  '--component-text-color': dark,

  '--brand-primary': blue,
  '--default-button-color': blue,
  '--focus-color': blue,

  '--state-info-color': blue,
  '--state-success-color': '#22c55e',
  '--state-warning-color': '#f59e0b',
  '--state-danger-color': '#ef4444',

  '--main-navigation-color': blue,
  '--main-navigation-color--inverted': white,
});
