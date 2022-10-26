import React from 'react'
import {useFormik} from 'formik'

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
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text"
                   {...formik.getFieldProps('firstName')}/>
            {formik.touched.firstName && formik.errors.firstName && <span>{formik.errors.firstName}</span>}

            <input type="text"
                    {...formik.getFieldProps('lastName')} /> 
            {formik.touched.lastName && formik.errors.lastName && <span>{formik.errors.lastName}</span>}

            <input type="email"
                    {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}


            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormikBasicPage