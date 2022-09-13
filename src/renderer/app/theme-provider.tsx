import { useContext, createContext, cloneElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight } from './styles/theme-config';
import { GlobalStyle } from './styles/global-styles';

import useTheme from './utils/useTheme';

export const ThemeContext = createContext({
  theme: themeLight,
  toggleTheme: () => {},
});

function CustomThemeProvider({ children }: any) {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {cloneElement(children, { toggleTheme })}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default CustomThemeProvider;
