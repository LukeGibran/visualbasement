// Material UI
import {
  Card,
  Box,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';

// Formik
import { useFormik } from 'formik';
import validationSchema from '../helpers/YupValidation';

/**
 * * Validation Schema use for checking the
 * * values in Formik
 */

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      accounts: '',
      gender: '',
      testimonial: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
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
          <form onSubmit={formik.handleSubmit}>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id='firstname'
                name='firstname'
                label='First Name'
                variant='outlined'
                color='primary'
                fullWidth
                value={formik.values.firstname}
                onChange={formik.handleChange}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id='lastname'
                name='lastname'
                label='Last Name'
                variant='outlined'
                color='secondary'
                fullWidth
                value={formik.values.lastname}
                onChange={formik.handleChange}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id='email'
                name='email'
                label='Email'
                variant='outlined'
                color='primary'
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id='accounts'
                name='accounts'
                label='Accounts'
                variant='outlined'
                color='secondary'
                fullWidth
                value={formik.values.accounts}
                onChange={formik.handleChange}
                error={formik.touched.accounts && Boolean(formik.errors.accounts)}
                helperText={formik.touched.accounts && formik.errors.accounts}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id='gender'
                select
                label='Gender'
                color='primary'
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
              >
                <MenuItem value='male'>male</MenuItem>
                <MenuItem value='femail'>female</MenuItem>
              </TextField>
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id='testimonial'
                label='Testimonials'
                multiline
                rows={3}
                color='secondary'
                name="testimonial"
                value={formik.values.testimonial}
                onChange={formik.handleChange}
                error={formik.touched.testimonial && Boolean(formik.errors.testimonial)}
                helperText={formik.touched.testimonial && formik.errors.testimonial}
              />
            </FormControl>
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
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Form;
