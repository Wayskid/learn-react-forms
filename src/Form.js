import { useState } from 'react'

export default function Form() {
    
    const [ formData, setData ] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        willJoin: true
    })

    function handleChange(e){
        const { name, value, type, checked } = e.target
        setData(prevData=>{
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const { password, confirmPassword, willJoin } = formData;
        console.log(
            password === confirmPassword ? "Successfully signed up" : "Passwords do not match"
        );
        console.log(
            willJoin ? "Thanks for Joining" : ""
        );
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={formData.email}
        />
        <input 
            type="password" 
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={formData.password}
        />
        <input 
            type="password" 
            placeholder='Confirm password'
            name='confirmPassword'
            onChange={handleChange}
            value={formData.confirmPassword}
        />
        <div>
            <input
                type="checkbox"
                id="willJoin"
                checked={formData.willJoin}
                onChange={handleChange}
                name="willJoin"
            />
            <label htmlFor="willJoin">I want to join the newsletter</label>
        </div>

        <button>Sign up</button>
    </form>
  )
}
