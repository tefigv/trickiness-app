// Color palette for Trickiness App
export const colors = {
  // Primary colors
  primary: '#4F7CAC', // muted blue - buttons, main highlights
  primarySoft: '#E2EDF5', // hover/subtle chips
  
  // Accent colors
  accent1: '#6EBFA3', // soft sage green - success, GYM habits
  accent2: '#F5B971', // warm muted amber - highlights, SLEEP habits
  
  // Background & Surface
  background: '#F5F5F7', // very light gray
  surface: '#FFFFFF', // cards
  surfaceAlt: '#F9F9F9', // alternate surface
  
  // Borders
  border: '#E0E2E8', // borders/lines
  
  // Text colors
  textMain: '#253040', // dark blue-gray
  textMuted: '#6B7280', // gray for labels/hints
  
  // Status colors
  error: '#EF4444', // red for errors
  success: '#6EBFA3', // green for success (same as accent1)
  warning: '#F5B971', // amber for warnings (same as accent2)
};

// Color mapping for habit types
export const habitTypeColors: Record<string, string> = {
  STUDY: '#4F7CAC', // primary blue
  GYM: '#6EBFA3', // accent1 - soft sage green
  WATER: '#3B82F6', // blue for water
  SLEEP: '#F5B971', // accent2 - warm muted amber
  OTHER: '#8B5CF6', // purple for other
};
