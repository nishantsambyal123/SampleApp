import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {rgbaColors, colors} from '../../constants/colors';

const text = props => {
  const {placeholder, onChangeText, style} = props;

  const makeInputStyles = () => ({
    ...styles.borderColor,
    ...style,
  });

  return (
    <TextInput
      style={{...makeInputStyles()}}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={rgbaColors.textInputBorder}
    />
  );
};
const styles = StyleSheet.create({
  borderColor: {
    borderColor: rgbaColors.textInputBorder,
    color: colors.black,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
});

export default text;
