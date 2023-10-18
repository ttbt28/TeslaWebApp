// Authentication.js
import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the useUser hook

const Authentication = () => {
  const [authKey, setAuthKey] = useState('');
  const navigate = useNavigate();
  const { setAuthValue } = useUser(); // Retrieve setAuthValue from the context

  const handleAuthKeyChange = (event) => {
    setAuthKey(event.target.value);
  };

  const handleAuthentication = () => {
    // Set the authKey as the authValue when authenticated
    const isAuthenticated = true; // For simplicity, always return true

    if (isAuthenticated) {
      setAuthValue(authKey); // Set the authKey as the authValue
      navigate('/control-center');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
        <Typography variant="h5" gutterBottom>
          Please Enter Your Auth Key
        </Typography>
        <TextField
          label="Auth Key"
          variant="outlined"
          fullWidth
          value={authKey}
          onChange={handleAuthKeyChange}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
          onClick={handleAuthentication}
        >
          Authenticate
        </Button>
      </Paper>
    </Container>
  );
};

export default Authentication;
