import React, { useState } from 'react'

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
        else if (form.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters'
        }
        else if (!/^[A-Za-z\s]+$/.test(form.name)) {
            newErrors.name = 'Name must contain only letters and spaces'
        }

        if (form.email === '') {
            newErrors.email = 'Email is required'
        }
        else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
        ) {
            newErrors.email = 'Invalid email format'
        }

        if (form.mobile === '') {
            newErrors.mobile = 'Mobile is required'
        }
        else if (!/^\d{10}$/.test(form.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits'
        }

        if (form.dob === '') {
            newErrors.dob = 'DOB is required'
        }
        else if (new Date(form.dob) > new Date()) {
            newErrors.dob = 'DOB cannot be in the future'
        }

        if (form.password === '') {
            newErrors.password = 'Password is required'
        }

        if (form.cpassword === '') {
            newErrors.cpassword = 'Confirm Password is required'
        }

        if (
            form.password !== form.cpassword
        ) {
            newErrors.cpassword = 'Passwords do not match'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validateForm()
        console.log(isValid);
        

        if (isValid) {
            console.log('Form submitted successfully')

            setForm({
                name: '',
                email: '',
                mobile: '',
                dob: '',
                password: '',
                cpassword: ''
            })
        }
    }

    return (
        <div
            style={{
                width: '400px',
                margin: '50px auto',
                padding: '20px',
                border: '1px solid black',
                borderRadius: '8px'
            }}
        >

            <h1>Register Form</h1>

            <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={form.name}
                onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                }
            />
            <br />

            {errors.name && (
                <span style={{ color: 'red' }}>
                    {errors.name}
                </span>
            )}

            <br /><br />


            <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                value={form.email}
                onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                }
            />
            <br />

            {errors.email && (
                <span style={{ color: 'red' }}>
                    {errors.email}
                </span>
            )}

            <br /><br />


            <input
                type="text"
                name="mobile"
                placeholder="Enter Your Mobile"
                value={form.mobile}
                onChange={(e) =>
                    setForm({ ...form, mobile: e.target.value })
                }
            />
            <br />

            {errors.mobile && (
                <span style={{ color: 'red' }}>
                    {errors.mobile}
                </span>
            )}

            <br /><br />


            <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={(e) =>
                    setForm({ ...form, dob: e.target.value })
                }
            />
            <br />

            {errors.dob && (
                <span style={{ color: 'red' }}>
                    {errors.dob}
                </span>
            )}

            <br /><br />


            <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={form.password}
                onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                }
            />
            <br />

            {errors.password && (
                <span style={{ color: 'red' }}>
                    {errors.password}
                </span>
            )}

            <br /><br />


            <input
                type="password"
                name="cpassword"
                placeholder="Enter Your Confirm Password"
                value={form.cpassword}
                onChange={(e) =>
                    setForm({ ...form, cpassword: e.target.value })
                }
            />
            <br />

            {errors.cpassword && (
                <span style={{ color: 'red' }}>
                    {errors.cpassword}
                </span>
            )}

            <br /><br />

            <button onClick={handleSubmit}>
                Register
            </button>

        </div>
    )
}

export default RegisterForm