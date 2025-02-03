import React from "react";
import Sidebar from './pages/sidebar';
import { Box, Typography, Stack, Button, CardContent, CardActionArea, Card } from '@mui/material';


const App = () => {
  return (
    
  
    <div className="cards">

    
      

          <Box display="flex" height="100vh">
            <Sidebar />
            <Box flex={1} display="flex" justifyContent="center" alignItems="flex-start" p={3}>
                <Box>
                    <Typography variant="h4" gutterBottom align="center">
                        Good Afternoon, ProxyYt
                    </Typography>
                    <Stack spacing={2} alignItems="center" mt={4}>
                    <div className="cards">
                    <button className="card">Teach me about the Quadratic Formula</button>
                    <button className="card">Graph the Derivative of f(x) = x²</button>
                    <button className="card">Explain the structure of a plant cell</button>
                </div>
                    </Stack>
                </Box>
            </Box>
        </Box>

        
      {/* <Box display="flex" height="100vh">
            <Sidebar />
            <Box flex={1} p={3}>
                <Typography variant="h4" gutterBottom>
                    Good Afternoon, ProxyYt
                </Typography>
                <Stack spacing={2} direction="column" alignItems="start">
                    <Button
                        className="card"
                        variant="outlined"
                    >
                        Teach me about the Quadratic Formula
                    </Button>
                    <Button
                        className="card"
                        variant="outlined"
                    >
                        Graph the Derivative of f(x) = x²
                    </Button>
                    <Button
                        className="card"
                        variant="outlined"
                    >
                        Explain the structure of a plant cell
                    </Button>
                </Stack>
            </Box>
        </Box>
       */}

      {/* <div className="app">
            <Sidebar />
            <Box flex={1} display="flex" justifyContent="center" alignItems="flex-start" p={3}>

            <div className="content">
                <h1>Good Afternoon, ProxyYt</h1>
                <Stack spacing={2} alignItems="center" mt={4}>

                <div className="cards">
                    <button className="card">Teach me about the Quadratic Formula</button>
                    <button className="card">Graph the Derivative of f(x) = x²</button>
                    <button className="card">Explain the structure of a plant cell</button>
                </div>
                </Stack>
            </div>
            </Box>
        </div> */}

        
    </div>


    
  );
};

export default App;
