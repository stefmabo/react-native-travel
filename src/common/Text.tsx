import React from 'react';
import { Text as RNText, TextProps as TextRNProps } from 'react-native';

const Text = (props: TextRNProps): JSX.Element => (
  <RNText {...props} style={[props.style, styles.text]} />
);

const styles = {
  text: {
    fontFamily: 'Avenir LT Pro',
  },
};

export default Text;
