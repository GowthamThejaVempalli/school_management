import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Hello, World from MUI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}

export default App;
