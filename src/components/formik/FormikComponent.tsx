import React from 'react'
import {useFormik, Formik, Field, Form, ErrorMessage} from 'formik'

import * as Yup from 'yup'






const FormikBasicPage = () => {


   

    const formik = useFormik({
        
        initialValues:{
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: (values)=> {
            console.log(values);
            
        },

        validationSchema: Yup.object({
                firstName: Yup.string()
                .max(15,'Debe tener mas de 15 caracteres')
                . required('Requerido'),

                lastName: Yup.string()
                .max(15,'Debe tener mas de 15 caracteres')
                . required('Requerido'),

                email: Yup.string()
                .max(20,'Debe tener mas de 20 caracteres')
                . required('Requerido')
                .email('Email no tiene un formato valido'),
        })


    })


  return (

    <div>
        <h1>Formik basic</h1>
        <Formik 
                 initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                }}
                onSubmit={ (values:any) =>{

                }}

                validationSchema ={{
                    firstName: Yup.string()
                .max(15,'Debe tener mas de 15 caracteres')
                . required('Requerido'),

                lastName: Yup.string()
                .max(15,'Debe tener mas de 15 caracteres')
                . required('Requerido'),

                email: Yup.string()
                .max(20,'Debe tener mas de 20 caracteres')
                . required('Requerido')
                .email('Email no tiene un formato valido'),
                }}
        >
            {   
                (formik) => (
                    <Form >
                        <label htmlFor="firstName">First Name</label>
                        <Field name='firstName'/>
                        <ErrorMessage name='firstName'/> 

                        <label htmlFor="lastName">Last Name</label>
                        <Field name='lastName'/> 
                        <ErrorMessage name='lastName'/>

                        <Field name='email'/>
                        <ErrorMessage name='email'/>


                        <button type='submit'>Submit</button>
                    </Form>
                )
            }

        </Formik>


        
    </div>
  )
}

export default FormikBasicPage