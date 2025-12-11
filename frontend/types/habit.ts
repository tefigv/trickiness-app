// Habit type definitions matching backend Prisma schema

export enum HabitType {
  STUDY = 'STUDY',
  GYM = 'GYM',
  WATER = 'WATER',
  SLEEP = 'SLEEP',
  OTHER = 'OTHER',
}

export enum FrequencyType {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  CUSTOM = 'CUSTOM',
}

export interface Habit {
  id: string;
  userId: string;
  name: string;
  habitType: HabitType;
  targetGoal: number | null;
  frequencyType: FrequencyType;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HabitLog {
  id: string;
  userId: string;
  habitId: string;
  logDate: string;
  note: string | null;
  createdAt: string;
}

export interface CreateHabitInput {
  name: string;
  habitType: HabitType;
  targetGoal?: number;
  frequencyType: FrequencyType;
}

export interface UpdateHabitInput {
  name?: string;
  habitType?: HabitType;
  targetGoal?: number;
  frequencyType?: FrequencyType;
  isActive?: boolean;
}

