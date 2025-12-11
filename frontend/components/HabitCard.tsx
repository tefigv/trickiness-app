import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';
import { Habit } from '../types/habit';
import { colors, habitTypeColors } from '../theme/colors';

interface HabitCardProps {
  habit: Habit;
  onPress: () => void;
  onLogPress: () => void;
  streakCount?: number;
  loggedToday?: boolean;
}

export default function HabitCard({
  habit,
  onPress,
  onLogPress,
  streakCount = 0,
  loggedToday = false,
}: HabitCardProps) {
  const getHabitTypeColor = (type: string) => {
    return habitTypeColors[type] || colors.textMuted;
  };

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content>
        <View style={styles.header}>
          <Text variant="titleMedium" style={styles.name}>
            {habit.name}
          </Text>
          <Chip
            style={[styles.chip, { backgroundColor: getHabitTypeColor(habit.habitType) }]}
            textStyle={styles.chipText}
          >
            {habit.habitType}
          </Chip>
        </View>

        <View style={styles.info}>
          {habit.targetGoal && (
            <Text variant="bodyMedium" style={styles.target}>
              Target: {habit.targetGoal} {habit.frequencyType === 'DAILY' ? 'per day' : 'per week'}
            </Text>
          )}
          {streakCount > 0 && (
            <Text variant="bodySmall" style={styles.streak}>
              🔥 {streakCount} day streak
            </Text>
          )}
        </View>
      </Card.Content>

      <Card.Actions>
        <Button
          mode={loggedToday ? 'outlined' : 'contained'}
          onPress={onLogPress}
          disabled={loggedToday}
        >
          {loggedToday ? 'Logged Today ✓' : 'Log Now'}
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    color: colors.textMain,
  },
  chip: {
    marginLeft: 8,
  },
  chipText: {
    color: '#fff',
    fontSize: 10,
  },
  info: {
    marginTop: 4,
  },
  target: {
    color: colors.textMuted,
    marginBottom: 4,
  },
  streak: {
    color: colors.accent2,
    fontWeight: '600',
  },
});

