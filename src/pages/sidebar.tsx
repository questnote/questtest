import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const Sidebar = () => {
    return (
        <Box
            sx={{
                width: 250,
                bgcolor: '#f4f4f4',
                height: '100vh',
                boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                p: 2,
            }}
        >
            <Typography variant="h6" gutterBottom>
                Hi, ProxyYt
            </Typography>
            <List>
                {['Praxis', 'Open Canvas', 'Search Spaces', 'Test', 'Settings', 'Report Bug', 'Help', 'Refer a Friend', 'Exit to Home'].map(
                    (text, index) => (
                        <ListItem button key={index}>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );
};

export default Sidebar;
