import React, { useEffect, useState } from 'react'


const Form = () => {
    const [formDetails, setFormDetails] = useState({ firstName: "", lastName: "", email: "", password: "", cPassword: "" });
    const [userDetailsErr, setUserDetailsErr] = useState({ firstNameErr: false, lastName: false, emailErr: false, passwordErr: false, cPasswordErr: false })



    const formHandler = (e) => {
        e.preventDefault()
        if (formDetails.firstName === "") {
            setUserDetailsErr({ ...userDetailsErr, firstNameErr: true });
        }
        if (formDetails.lastName === "") {
            setUserDetailsErr({ ...userDetailsErr, lastNameErr: true });
        }
        if (formDetails.email === "") {
            setUserDetailsErr({ ...userDetailsErr, emailErr: true });
        }
        if (formDetails.password === "") {
            setUserDetailsErr({ ...userDetailsErr, passwordErr: true });
        }
        if (formDetails.cPassword === "") {
            setUserDetailsErr({ ...userDetailsErr, cPasswordErr: true });
        }
        console.log(formDetails);
    }

    useEffect(() => {
        if (formDetails.firstName !== "") {
            setUserDetailsErr({ ...userDetailsErr, firstNameErr: false })
        }
        if (formDetails.lastName !== "") {
            setUserDetailsErr({ ...userDetailsErr, lastNameErr: false })
        }
        if (formDetails.email !== "") {
            setUserDetailsErr({ ...userDetailsErr, emailErr: false })
        }
        if (formDetails.password !== "") {
            setUserDetailsErr({ ...userDetailsErr, passwordErr: false })
        }
        if (formDetails.cPassword !== "") {
            setUserDetailsErr({ ...userDetailsErr, cPasswordErr: false })
        }
    }, [formDetails]);

    return (<>
        <div className='mt-5 ms-5'>
            <form onSubmit={formHandler} action="">
                <div>
                    <input className='p-1 formDetails' type="text" placeholder='First Name' value={formDetails.firstName} onChange={(e) => (setFormDetails({ ...formDetails, firstName: e.target.value }))} /><br /><br />
                    {userDetailsErr.firstNameErr && (<h6 className='text-danger'>Fill this field first</h6>)}
                </div>
                <div>
                    <input className='p-1 formDetails' type="text" placeholder='Second Name' value={formDetails.lastName} onChange={(e) => (setFormDetails({ ...formDetails, lastName: e.target.value }))} /><br /><br />
                    {userDetailsErr.lastName && (<h6 className='text-danger'>Fill this field first</h6>)}
                </div>
                <div>
                    <input className='p-1 formDetails' type="email" placeholder='Email' value={formDetails.email} onChange={(e) => (setFormDetails({ ...formDetails, email: e.target.value }))} /><br /><br />
                    {userDetailsErr.emailErr && (<h6 className='text-danger'>Fill this field first</h6>)}
                </div>
                <div>
                    <input className='p-1 formDetails' type="password" placeholder='Password' value={formDetails.password} onChange={(e) => (setFormDetails({ ...formDetails, password: e.target.value }))} /><br /><br />
                    {userDetailsErr.passwordErr && (<h6 className='text-danger'>Fill this field first</h6>)}
                </div>
                <div>
                    <input className='p-1 formDetails' type="password" placeholder='Confirm Password' value={formDetails.cPassword} onChange={(e) => (setFormDetails({ ...formDetails, cPassword: e.target.value }))} /><br /><br />
                    {userDetailsErr.cPasswordErr && (<h6 className='text-danger'>Fill this field first</h6>)}
                </div>
                <button type='submit' className='btn btn-dark'>Signin</button>
            </form>
        </div>
    </>
    )
}

export default Form