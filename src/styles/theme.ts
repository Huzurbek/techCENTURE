import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#BBECEF",
      main: "#58A5A0", //static
      dark: "#134E43", //Hover
    },
    error: {
      light: "#BBECEF",
      main: "#EA5972", //static
      dark: "#EA5972", //Hover
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

// import { createTheme } from '@mui/material/styles';

// // Create a theme instance.
// const theme = createTheme({
//   palette: {
//     common: {
//       black: '#19192B',
//       white: '#ffffff',
//     },
//     primary: {
//       light: '#B3E5FC',
//       main: '#03A9F4',
//       dark: '#0288D1',
//       contrastText: '#212121',
//     },
//     secondary: {
//       main: '#607D8B', // omitting light and dark will calculate from main
//       contrastText: '#757575',
//     },
//     grey: {
//       '500': '#bcbcbc',
//       '700': '#79797a',
//     },
//     info: {
//       main: '#1bb2f1',
//     },
//     success: {
//       main: '#00d589',
//     },
//     error: {
//       main: '#832838',
//     },
//     background: {
//       default: '#fff',
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto',
//   },
// });

// export default theme;
