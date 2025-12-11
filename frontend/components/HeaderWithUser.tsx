import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../theme/colors';

export const UserIcon = ({ size = 28 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 28 32" fill="none">
    <Path
      d="M13.9996 17.4222C17.773 17.4222 21.3911 18.9583 24.0602 21.6917C26.0678 23.7501 27.4142 26.3598 27.9574 29.1722C28.2547 30.7153 26.9529 32 25.3815 32H2.61752C1.0461 32 -0.255746 30.7153 0.0429595 29.1722C0.584812 26.3597 1.93116 23.75 3.93879 21.6917C6.60783 18.9584 10.2261 17.4222 13.9996 17.4222Z"
      fill={colors.primary}
    />
    <Path
      d="M13.9996 0C18.1248 0 21.469 3.34304 21.469 7.46666C21.469 11.5903 18.1247 14.9333 13.9996 14.9333C9.87442 14.9333 6.53015 11.5903 6.53015 7.46666C6.53015 3.34304 9.87442 0 13.9996 0Z"
      fill={colors.primary}
    />
  </Svg>
);

export default function HeaderWithUser() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push('/profile')}
      activeOpacity={0.7}
    >
      <UserIcon size={28} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginRight: 8,
  },
});
