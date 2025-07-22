import React, {useState} from 'react';
import axios from "axios";

const Register = () => {
    const [form, setForm] = useState({
        full_name: "",
        email: "",
        username: "",
        phone: "",
        password: ""

    });
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/register/", form);
            alert("Registration successful!");
            setForm({
                full_name: "",
                email: "",
                username: "",
                phone: "",
                password: ""
            });
        } catch (error) {
            console.error("Error:", error);
            alert(
                "Registration failed. Please make sure the backend server is running."
            )
        }
    };
    return (
        <div style={{padding: 20}}>
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="Full Name" required />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
                <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
                <input name="password" value={form.password} onChange={handleChange} placeholder="Password" type="password" required />
                <button type="submit">Register</button>
            </form>
        </div>

    );
};
export default Register;
