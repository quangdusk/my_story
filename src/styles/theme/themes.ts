const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: '#256d79',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: '#FCF8E8',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: '#313990',
  borderLight: 'rgba(58,52,51,0.05)',
  yellow: '#d89a45',
  blue: '#03355C',
  pink: '#f8576f'
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: '#FFB6C1',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  yellow: '#d89a45',
  blue: '#03355C',
  pink: '#f8576f'
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
