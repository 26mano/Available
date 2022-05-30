import * as React from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import palette from './palette';
import breakpoints from './breakpoints';
import shadows, { customShadows } from './shadows';
// import { SettingsContext } from './setting/SettingsContext';

ThemeProvider.propTypes = {
    children: PropTypes.node,
  };
  
export default function ThemeProvider({ children }) {
    // const { themeMode, themeDirection } = useContext(SettingsContext);
  // const isLight = themeMode === 'light';
    const themeOptions = useMemo(
        () => ({
          // palette: isLight ? palette.light : palette.dark,
          palette: palette.light,
        //   typography,
          breakpoints,
          shape: { borderRadius: 8 },
          // direction: themeDirection,
          shadows: shadows.light,
          customShadows:customShadows.light,
        }),
        []
      );

      const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst >
    <MUIThemeProvider theme={theme} >
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  </StyledEngineProvider>
    
  );
}
