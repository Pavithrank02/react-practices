import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 const SignupForm = () => {

  const initialValues = {
    firstName: '', 
    lastName: '', 
    email: '' 
  }
  const validationSchema= () => {Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  })}
  const handle = (values, { setSubmitting }) => {
    setTimeout(() => {
      localStorage.setItem("form", JSON.stringify(values));
      setSubmitting(false);
      
    }, 400);
  }
   return (
     <Formik
       initialValues={initialValues}
       validationSchema= {validationSchema}
       onSubmit= { handle}
     >
       <Form>
         <label htmlFor="firstName">First Name</label>
         <Field name="firstName" type="text" />
         <ErrorMessage name="firstName" />
 
         <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <ErrorMessage name="lastName" />
 
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   );
 };
 export default SignupForm