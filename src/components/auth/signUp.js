import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "./usersSlice";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.number("Enter your phone").required("Phone is required"),
  age: yup.number("Enter your age").required("Age is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignupForm = () => {
  const registerStatus = useSelector((state) => state.users.registerStatus);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (registerStatus === "idle") {
        dispatch(userRegister(values));
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='firstName'
          name='firstName'
          label='First Name'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          sx={{ mb: 2 }}
          placeholder='John'
        />
        <TextField
          fullWidth
          id='lastName'
          name='lastName'
          label='Last Name'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          sx={{ mb: 2 }}
          placeholder='Doe'
        />
        <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: 2 }}
          placeholder='email@example.com'
        />
        <TextField
          fullWidth
          id='phone'
          name='phone'
          label='Phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          id='age'
          name='age'
          label='Age'
          type={"number"}
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          sx={{ mb: 2 }}
        />
        <FormControl sx={{ mb: 2 }} fullWidth>
          <InputLabel id='gender'>Gender</InputLabel>
          <Select
            labelId='gender'
            id='gender'
            name='gender'
            value={formik.values.gender}
            defaultValue={"male"}
            label='gender'
            onChange={formik.handleChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: 2 }}
        />
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
