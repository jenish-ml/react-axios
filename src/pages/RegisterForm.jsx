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

        if (
            form.password !== '' &&
            form.cpassword !== '' &&
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