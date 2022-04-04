import { useState, useEffect } from 'react';

// Material UI
import {
  Card,
  Box,
  CardContent,
  TextField,
  MenuItem,
  FormControl,
  Button,
} from '@mui/material';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { updateData, setLoading } from '.././redux/data/data.actions';
import { allData, isLoading } from '.././redux/data/data.selector';

const Form = ({ updateData, Data, isLoading, setLoading }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    emailAddress: '',
    gender: '',
  });

  useEffect(() => {
      let objectData = {}
      !isLoading && Data.forEach((d) => {
          objectData[d.fieldName] = d.value
      })
      !isLoading && setData(objectData)
  }, [Data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading()
    updateData(data)
  };

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };

  return isLoading ? (
    <h3>Loading ⌚</h3>
  ) : (
    <Box
      sx={{
        minWidth: 475,
        maxWidth: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        variant='outlined'
        sx={{
          p: '1rem',
          width: '100%',
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            {!isLoading &&
              Data.map((d, i) => {
                console.log(d.fieldName);
                return d.fieldName === 'gender' ? (
                  <FormControl sx={{ m: 1, width: '100%' }} key={i}>
                    <TextField
                      id='gender'
                      select
                      label='Gender'
                      color='primary'
                      name='gender'
                      value={data.gender}
                      onChange={handleChange}
                    >
                      {d.options.map((option, i) => (
                        <MenuItem value={option} key={i}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                ) : d.fieldName === 'age' ? (
                  <FormControl sx={{ m: 1, width: '100%' }} key={i}>
                    <TextField
                      id='age'
                      name='age'
                      label='Age'
                      variant='outlined'
                      type='number'
                      color='secondary'
                      fullWidth
                      value={data.age}
                      onChange={handleChange}
                    />
                  </FormControl>
                ) : (
                  <FormControl sx={{ m: 1, width: '100%' }} key={i}>
                    <TextField
                      id={d.fieldName}
                      name={d.fieldName}
                      label={d.fieldName}
                      variant='outlined'
                      color={i % 2 === 0 ? 'secondary' : 'primary'}
                      fullWidth
                      value={data[d.fieldName]}
                      onChange={handleChange}
                    />
                  </FormControl>
                );
              })}
            {!isLoading && (
              <FormControl sx={{ m: 1, width: '100%' }}>
                <Button
                  color='primary'
                  variant='contained'
                  fullWidth
                  type='submit'
                  size='large'
                >
                  Submit
                </Button>
              </FormControl>
            )}
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  Data: allData,
  isLoading: isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  updateData: (data) => dispatch(updateData(data)),
  setLoading: () => dispatch(setLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
