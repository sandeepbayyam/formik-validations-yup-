import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
const validationFun = function (x) {
  const errors = {};
  if (!x.firstname) {
    errors.firstname = 'required';
  }
  if (!x.lastname) {
    errors.lastname = 'required';
  }
  if (!x.age) {
    errors.age = 'required';
  } else {
    if (x.age < 20) {
      errors.age = 'ageless than 20';
    }
  }
  return errors;
};
const Registration = (props) => {
  const regForm = useFormik({
    initialValues: {
      firstname: 'sandeep',
      lastname: '',
      age: '',
    },
    //validate: validationFun,
    validationSchema: yup.object({
      firstname: yup
        .string()
        .required('first name is mandatory')
        .min(4, 'firstname should have atleast 4 letters'),
      lastname: yup
        .string()
        .required('lastname name is mandatory')
        .min(4, 'lastname should have atleast 4 letters'),
      age: yup.number().min(18, 'age should be min 18'),
    }),
    onSubmit: function (x, y) {
      console.log(regForm);
      console.log(x);
      console.log(y);
    },
  });
  return (
    <div className="mybox">
      <h4>Register Student</h4>
      <form onSubmit={regForm.handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={regForm.handleChange}
          value={regForm.values.firstname}
        />
        <br />
        {regForm.touched.firstname && regForm.errors.firstname && (
          <h3>{regForm.errors.firstname}</h3>
        )}
        <label htmlFor="lastname"> Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={regForm.handleChange}
          value={regForm.values.lastname}
        />
        <br />
        {regForm.touched.lastname && regForm.errors.lastname && (
          <h3>Last name is mandatory</h3>
        )}
        <label htmlFor="Age"> Age:</label>
        <input
          type="text"
          id="Age"
          name="age"
          onChange={regForm.handleChange}
          value={regForm.values.age}
        />
        <br />
        {regForm.touched.age && regForm.errors.age && (
          <h3>{regForm.errors.age}</h3>
        )}
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};
export default Registration;
