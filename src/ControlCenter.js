// ControlCenter.js
import React, { useState } from 'react';
import { useUser } from './UserContext';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import debounce from 'lodash.debounce';

const ControlCenter = () => {
  const { authValue } = useUser();
  const [temperatureValue, setTemperatureValue] = useState(70); // Set the default temperature value

  const debouncedAxiosRequest = debounce((value) => {
    value = ((value - 32) * 5/9)
    console.log(value)
    axios
      .get(`https://api.tessie.com/5YJ3E1EA8PF601559/command/set_temperatures?retry_duration=40&wait_for_completion=true&temperature=`+value, {
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${authValue}`, // Use authValue as the token
        }
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, 500);

  const handleTemperatureChange = (event, newValue) => {
    setTemperatureValue(newValue);
    debouncedAxiosRequest(newValue);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Control Center</h1>
      <p>Authenticated Value: {authValue}</p>

      <div style={styles.sliderContainer}>
        <div style={styles.slider}>
          <p style={styles.sliderLabel}>Temperature (Min: 59, Max: 82)</p>
          <Slider
            valueLabelDisplay="auto"
            min={59}
            max={82}
            value={temperatureValue}
            onChange={handleTemperatureChange}
            step={0.5}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #f0f2f5, #e4e7ea)',
  },
  header: {
    fontSize: '36px',
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
  },
  slider: {
    width: '100%',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
  },
};

export default ControlCenter;
