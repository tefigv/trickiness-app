import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { colors } from './colors';

// Custom theme for React Native Paper
export const appTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    primaryContainer: colors.primarySoft,
    secondary: colors.accent1,
    secondaryContainer: colors.primarySoft,
    tertiary: colors.accent2,
    surface: colors.surface,
    surfaceVariant: colors.surfaceAlt,
    background: colors.background,
    error: colors.error,
    errorContainer: '#FFEBEE',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: colors.textMain,
    onSecondary: '#FFFFFF',
    onSecondaryContainer: colors.textMain,
    onTertiary: '#FFFFFF',
    onSurface: colors.textMain,
    onSurfaceVariant: colors.textMuted,
    onBackground: colors.textMain,
    outline: colors.border,
    outlineVariant: colors.border,
    shadow: colors.textMain,
  },
};

export { colors };

