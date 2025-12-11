import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../theme/colors';

export default function NewGoalScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">New Goal</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Goal creation form coming soon...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  subtitle: {
    marginTop: 8,
    color: '#666',
  },
});
