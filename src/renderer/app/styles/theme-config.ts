import Color from 'color';

const color = {
  primary: '#1d97c1',
  secondary: '#8C8C8C',
  text: '#343a40',
  text_light: '#838689',
  background: '#fff',
  paper: '#f3f4f7',
  error: '#F24B6A',
  warn: '#F2BC1B',
  success: '#8DA632',
  info: '#3498DB',
  shadows: '#BFBFBF',
};

const space = [
  0,
  '0.25rem',
  '0.5rem',
  '1rem',
  '1.5rem',
  '2rem',
  '3rem',
  '4rem',
  '8rem',
  '16rem',
  '32rem',
  '48rem',
  '64rem',
];

const fontSizes = {
  text: '1rem',
  label: '1rem',
  input_error: '0.8rem',
  heading: [
    '1.1rem',
    '1.3rem',
    '1.5rem',
    '1.8rem',
    '3rem',
    '4.25rem',
  ].reverse(),
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.1em',
};

const lineHeights = [1, 1.125, 1.25, 1.5];

const fontWeight = {
  lighter: 300,
  light: 400,
  normal: 500,
  bold: 600,
  bolder: 700,
};

const shadows = [
  `0px 1px 2px 0 ${color.shadows}`,
  `0 1px 4px 0 ${color.shadows}`,
];

const fontFamily = ["'Poppins', sans-serif, Arial, Helvetica, sans-serif;"];

export const themeLight = {
  space,
  shadows,
  font_family: fontFamily,
  font_sizes: fontSizes,
  font_weight: fontWeight,
  line_heights: lineHeights,
  letter_spacings: letterSpacings,
  transition: [' 0.2s ease-out'],
  border_radius: '3px',
  color: {
    ...color,
    invert: '#fff',
    primary_lighter: Color(color.primary).lighten(0.2).hex(),
    primary_light: Color(color.primary).lighten(0.05).hex(),
    primary_dark: Color(color.primary).darken(0.2).hex(),
    primary_darker: Color(color.primary).darken(0.4).hex(),
    secondary_lighter: Color(color.secondary).lighten(0.5).hex(),
    secondary_light: Color(color.secondary).lighten(0.2).hex(),
    secondary_dark: Color(color.secondary).darken(0.1).hex(),
    secondary_darker: Color(color.secondary).darken(0.2).hex(),
    error_dark: Color(color.error).darken(0.2).hex(),
    error_light: Color(color.error).lighten(0.2).hex(),
    error_lighter: Color(color.error).lighten(0.4).hex(),
    text_lighter: Color(color.text_light).lighten(0.4).hex(),
  },
};

export const themeDark = {
  space,
  shadows,
  font_family: fontFamily,
  font_sizes: fontSizes,
  font_weight: fontWeight,
  line_heights: lineHeights,
  letter_spacings: letterSpacings,
  transition: [' 0.2s ease-out'],
  border_radius: '3px',
  color: {
    ...color,
    invert: '#fff',
    primary_lighter: Color(color.primary).lighten(0.2).hex(),
    primary_light: Color(color.primary).lighten(0.05).hex(),
    primary_dark: Color(color.primary).darken(0.2).hex(),
    primary_darker: Color(color.primary).darken(0.4).hex(),
    secondary_lighter: Color(color.secondary).lighten(0.5).hex(),
    secondary_light: Color(color.secondary).lighten(0.2).hex(),
    secondary_dark: Color(color.secondary).darken(0.1).hex(),
    secondary_darker: Color(color.secondary).darken(0.2).hex(),
    error_dark: Color(color.error).darken(0.2).hex(),
    error_light: Color(color.error).lighten(0.2).hex(),
    error_lighter: Color(color.error).lighten(0.4).hex(),
    text_lighter: Color(color.text_light).lighten(0.4).hex(),
  },
};

export default {
  themeDark,
  themeLight,
};
