/**
 * * This file contains the validation
 * * from Yup used by Formik
 */

import * as yup from 'yup'

const validationSchema = yup.object({
    firstname: yup
    .string('Enter your first name')
    .min(2, 'first name should be of minimum 2 characters')
    .required('First Name is required'),
    lastname: yup
    .string('Enter your last name')
    .min(2, 'last name should be of minimum 2 characters')
    .required('last name is required'),
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    accounts: yup
    .string('Enter your account')
    .required('Account is required'),
    testimonial: yup
    .string('Enter your testimonial')
    .required('testimonial is required'),
    gender: yup
    .string('Enter your gender')
    .required('gender is required')
})

export default validationSchema