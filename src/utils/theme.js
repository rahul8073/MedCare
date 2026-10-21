// MediCare App Theme

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
export const colors = {
  // Brand / primary green
  primary: '#059669',        // buttons: Next, Continue, Verify, Add
  primaryDark: '#00806A',    // splash gradient bottom
  primaryLight: '#00A078',   // splash gradient top
  primaryTint: '#DCF5EB',    // banners, illustration bg, category icon bg
  primaryLink: '#0F9070',    // links, "Skip", active nav icon
  primaryBar: '#4CB89B',     // rating progress bars

  // Text
  textPrimary: '#0F1B33',    // headings, titles
  textSecondary: '#64748B',  // body text (suggested, slightly darker than measured)
  textMuted: '#94A3B8',      // subtitles, hints, placeholders
  textOnPrimary: '#FFFFFF',

  // Surfaces
  background: '#FAFDFE',     // screen background
  surface: '#FFFFFF',        // cards, inputs
  border: '#E5EDED',         // input borders, dividers

  // Status
  star: '#FBAD38',           // ratings
  accent: '#F1B92B',         // yellow accents / emoji
  error: '#F04438',          // wishlist heart, errors, remove
  success: '#059669',
  warning: '#FBAD38',

  overlay: 'rgba(15, 27, 51, 0.5)',
  white: '#FFFFFF',
  black: '#000000',
};

// Splash screen gradient (top -> bottom)
export const gradients = {
  splash: [colors.primaryLight, colors.primaryDark],
  primary: [colors.primary, colors.primaryDark],
};

export const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
};

export const fontSizes = {
  xs: responsiveFontSize(1.4),
  sm: responsiveFontSize(1.7),
  md: responsiveFontSize(2),
  lg: responsiveFontSize(2.4),
  xl: responsiveFontSize(3),
  xxl: responsiveFontSize(3.8),
};

export const typography = {
  h1: { fontFamily: fonts.bold, fontSize: fontSizes.xxl, color: colors.textPrimary },
  h2: { fontFamily: fonts.semiBold, fontSize: fontSizes.xl, color: colors.textPrimary },
  h3: { fontFamily: fonts.semiBold, fontSize: fontSizes.lg, color: colors.textPrimary },
  body: { fontFamily: fonts.regular, fontSize: fontSizes.md, color: colors.textSecondary },
  caption: { fontFamily: fonts.regular, fontSize: fontSizes.sm, color: colors.textMuted },
  button: { fontFamily: fonts.semiBold, fontSize: fontSizes.md, color: colors.textOnPrimary },
  link: { fontFamily: fonts.medium, fontSize: fontSizes.sm, color: colors.primaryLink },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radius = {
  sm: 8,
  md: 12,   // inputs, buttons
  lg: 16,   // cards
  xl: 24,   // phone-style containers, sheets
  pill: 999,
};

export const shadows = {
  card: {
    shadowColor: '#0F1B33',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2, // Android
  },
  button: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
};

// Ready-made component styles (React Native style objects)
export const components = {
  primaryButton: {
    backgroundColor: colors.primary,
    height: 48,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.button,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    height: 48,
    paddingHorizontal: spacing.lg,
    fontFamily: fonts.regular,
    fontSize: fontSizes.md,
    color: colors.textPrimary,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadows.card,
  },
};

const theme = {
  colors,
  gradients,
  fonts,
  fontSizes,
  typography,
  spacing,
  radius,
  shadows,
  components,
};

export default theme;
