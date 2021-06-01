import { extendTheme } from '@chakra-ui/react';

const TextComponent = {
    sizes: {
      sm: {
        fontSize: '14px'
      }
    }
};

const theme = extendTheme({
  colors: {
    primary: '#0015F7',
    secondary: '#FF3D57',
    red: '#FF4100',
    yellow: '#FFAB00',
    // blue: '#536DFF',
    // green: '#00D067',
    black: '#444444',
    white: '#ffffff',
    purple: '#3a0ca3',
    'grey-1': '#FCFCFC',
    'grey-2': '#EDEDED',
    'grey-3': '#C4C4C4',
    'disabled-grey': '#C0C0C0',	
    'grey-4': '#8296A9',
    'custom-light-blue': '#40a9ff',
    'custom-blue': '#F5F9FA',
    'custom-light-green': '#E4F9EA',
    'light-blue': 'rgba(0, 99, 237, 0.04)',
  },
  components: {
    Text: TextComponent
  }
});

export default theme;
