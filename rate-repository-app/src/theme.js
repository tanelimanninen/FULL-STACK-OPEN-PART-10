import { Platform } from 'react-native';

const getPlatformFont = () => {
  if (Platform.OS === 'android') {
    console.log(Platform.OS)
    return 'Roboto';
  } else if (Platform.OS === 'ios') {
    console.log(Platform.OS)
    return 'Arial';
  } else {
    // Default to System for other platforms
    return 'System';
  }
};

const theme = {
    colors: {
      textPrimary: '#131111',
      textSecondary: '#586069',
      textThird: '#f3f6f4',
      textError: '#d21e1e',
      primary: '#fdc22c',
      cardBG: '#f2f2f2',
      languageBG: '#297dca',
      borderButton: '#444444',
      borderInput: '#666666',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      heading: 18
    },
    fonts: {
      main: getPlatformFont(),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
};
  
export default theme;