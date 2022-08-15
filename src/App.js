import {
  Box,
  Button,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Feed, Sidebar, Rightbar, Navbar, Add } from './components';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box backgroundColor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
