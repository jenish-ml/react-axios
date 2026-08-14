import React from 'react'
import { useState } from 'react'

const RegisterForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        password: '',
        cpassword: ''
    })

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}

        if (form.name === '') {
            newErrors.name = 'Name is required'
        }

        if (form.email === '') {
            newErrors.email = 'Email is required'
        }

        if (form.mobile === '') {
            newErrors.mobile = 'Mobile is required'
        }

        if (form.dob === '') {
            newErrors.dob = 'DOB is required'
        }

        if (form.password === '') {
            newErrors.password = 'Password is required'
        }

        if (form.cpassword === '') {
            newErrors.cpassword = 'Confirm Password is required'
        }

        setErrors(newErrors)
    }

    console.log(form);
    console.log(errors);

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validateForm()

        if (isValid) {
            console.log('Form submitted successfully')
        }

        setForm({
            name: '',
            email: '',
            mobile: '',
            dob: '',
            password: '',
            cpassword: ''
        })
    }
    
  return (
    <>
    <h1>Register Form</h1>

    <input type="text" name='name' placeholder='Enter Your Name' value={form.name}
     onChange = {(e) => setForm({...form, name: e.target.value})}
    /><br />
    {errors.name && <span>{errors.name}</span>} <br />
    <input type="text" name='email' placeholder='Enter Your Email' value={form.email}
     onChange={(e) => setForm({...form, email : e.target.value})}
    /><br />
    {errors.email && <span>{errors.email}</span>} <br />
    <input type="text" name='mobile' placeholder='Enter Your Mobile' value={form.mobile}
     onChange={(e) => setForm({...form, mobile : e.target.value})}
    /><br />
    {errors.mobile && <span>{errors.mobile}</span>} <br />
    <input type="date" name='dob' placeholder='Enter Your DOB' value={form.dob}
     onChange={(e) => setForm({...form, dob : e.target.value})}
    /><br />
    <input type="password" name='password' placeholder='Enter Your Password' value={form.password}
     onChange={(e) => setForm({...form, password : e.target.value})}
    /><br />
    <input type="password" name='cpassword' placeholder='Enter Your Confirm Password' value={form.cpassword}
     onChange={(e) => setForm({...form, cpassword : e.target.value})}
    /><br />
    <button onClick={handleSubmit}>Register</button>

    </>
  )
}

export default RegisterForm