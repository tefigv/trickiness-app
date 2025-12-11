import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { colors } from '../../theme/colors';

export default function NewJournalScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">New Journal Entry</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Journal entry form coming soon...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  subtitle: {
    marginTop: 8,
    color: colors.textMuted,
  },
});
