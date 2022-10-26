import { Email } from '@mui/icons-material';
import React, { FC, useState } from 'react'
import { UseForm } from '../../hooks/UseForm';

const From: FC = () => {

    const {register, onChanges, setRegister, isValidEmail} = UseForm()

 
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        console.log(register);
        setRegister(prev =>({
            ...prev,
            "name":"",
            "email": "",
            "password1": "",
            "password2": ""
          }))

    }

  return (
    <>
        <h1>Register Page</h1>

        <form onSubmit={handleSubmit}>
            <input type="text"
                    value={register.name}
                    name= 'name'
                     onChange={onChanges}/>
           {
            register.name.trim().length <= 0 &&  <span className='text-danger'>Este campo es necesario</span> 
           }
            <input type="email"
                    value={register.email}
                    name= 'email'
                    onChange={onChanges}
                     />
            {
            isValidEmail(register.email) &&  <span className='text-danger'>Email no valido</span> 
           }

            <input type="password"
                    value={register.password1}
                    name= 'password1'
                    onChange={onChanges}
                     />
            {
            register.password1.trim().length <= 0 &&  <span className='text-danger'>Este campo es necesario</span> 
           }

            <input type="text"
                    value={register.password2}
                    name= 'password2'
                    onChange={onChanges}
                     />
            {
            register.password2.trim().length <= 0 &&  <span className='text-danger'>Este campo es necesario</span> 
           }

            <button type='submit'>submit</button>
        </form>
    </>
  )
}

export default From