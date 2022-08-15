import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button variant="outlined">Out</Button>
    </div>
  );
}

export default App;
