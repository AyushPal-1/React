import { useState } from "react";
import "./index.css";

export const ContactForm = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    })
    const handelInputChange = (e) => {
        const {name, value} = e.target;
        setContact((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        console.log(contact);
    }

    return (
        <div className="container">
            <div className="card">
                <h1>contact Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" value={contact.username} onChange={handelInputChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required autoComplete="off" value={contact.email} onChange={handelInputChange}/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="password" required autoComplete="off" rows="6" value={contact.message} onChange={handelInputChange}></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>

        </div>
    )
}