// Design tokens and theme specification for South Point School Admin Dashboard
export const theme = {
  colors: {
    // Core brand colours
    primary: '#72102a',
    primaryMid: '#8B1F3A',
    accent: '#c9a84c',
    accentDark: '#A68A3D',
    maroon: '#72102a',
    gold: '#c9a84c',
    cream: '#faf8f5',
    darkMaroon: '#5C0C21',
    lightMaroon: '#F5E6EA',
    softGoldLight: '#FDF8E8',
    darkGold: '#A68A3D',

    // Supporting neutral shades
    inkBlack: '#1A1A1A',
    inkMedium: '#4A4A4A',
    inkLight: '#6B6B6B',
    inkFaint: '#9A9A9A',
    white: '#FFFFFF',
    border: '#E8E2D9',
    borderMid: '#D4CCC0',

    // Semantic accents
    green: '#059669',
    greenLight: '#ECFDF5',
    red: '#DC2626',
    redLight: '#FEF2F2',
    teal: '#008B8B',
    tealLight: '#E0F5F5',
    skyBlue: '#0369A1',
    skyBlueLight: '#E0F2FE',
    violet: '#6B21A8',
    violetLight: '#F3E8FF',
  },
  shadows: {
    soft: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
    medium: '0 4px 12px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.03)',
    strong: '0 8px 24px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)',
    brandGlow: '0 8px 24px rgba(114, 16, 42, 0.15), 0 4px 8px rgba(114, 16, 42, 0.08)',
  },
  typography: {
    fontBody: "'Inter', system-ui, -apple-system, sans-serif",
    fontHeading: "'Outfit', sans-serif",
    fontMono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
    sizes: {
      xs: '10px',
      sm: '11px',
      base: '13px',
      md: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '22px',
      '3xl': '28px',
      '4xl': '34px',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
};

export default theme;
