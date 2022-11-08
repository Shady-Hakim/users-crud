import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { editUser } from "../../../auth/usersSlice";

const UserEditForm = ({ user, setIsTable, isTable }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      age: user?.age,
    },
    onSubmit: (values) => {
      setIsTable(!isTable);
      dispatch(editUser(values));
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
          label='phone'
          type='text'
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
          label='age'
          type='number'
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          sx={{ mb: 2 }}
        />
        <Button
          sx={{ mb: 5 }}
          color='primary'
          variant='contained'
          fullWidth
          type='submit'
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserEditForm;
