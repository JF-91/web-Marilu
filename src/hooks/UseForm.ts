import { useState } from "react"

export const UseForm = ()=>{



    const [register, setRegister] = useState({
        name:"",
        email:"",
        password1: "",
        password2: "",
    })

    const {name, email, password1, password2} = register



    const onChanges = (event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log('change envent: ' + event.target.value);
      setRegister(prev =>({
        ...prev,
        [event.target.name]: event.target.value
    }))}


    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        register, 
        onChanges,
        setRegister,
        isValidEmail
        
    }
        
}