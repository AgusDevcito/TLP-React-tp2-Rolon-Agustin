/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#2D2D2D',
    background: '#FFFDF7',
    backgroundElement: '#FFF9C4', // Light Yellow
    backgroundSelected: '#FFE082', // Medium Yellow
    textSecondary: '#5D4037',
    primary: '#FFC107', // Yellow
    primaryDark: '#FF9800', // Orange
    accent: '#4CAF50', // Green
    accentLight: '#81C784', // Light Green
    buttonText: '#FFFFFF',
  },
  dark: {
    text: '#FAFAFA',
    background: '#1A1A1A',
    backgroundElement: '#2E2E2E',
    backgroundSelected: '#3E3E3E',
    textSecondary: '#BCAAA4',
    primary: '#FFD54F', // Yellow
    primaryDark: '#FFB74D', // Orange
    accent: '#81C784', // Green
    accentLight: '#A5D6A7', // Light Green
    buttonText: '#1A1A1A',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
