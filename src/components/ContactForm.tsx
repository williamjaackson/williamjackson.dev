"use client";

import { useState } from "react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        
            if (response.ok) {
                // Handle success
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject:'', message: '' });
            } else {
                // Handle error
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <form className="grid mt-4" onSubmit={handleSubmit}>
            <h3 className="text-2xl md:text-3xl text-yellow-900 font-bold">Contact Details</h3>
            <div className="grid gap-2">
                <div className="grid">
                    <label htmlFor="name" className="text-lg text-slate-500">Full Name
                        <span className="text-red-500"> *</span>
                    </label>
                    <input type="text" id="name" className="border border-gray-300 p-2 rounded-md" placeholder="What should I call you?" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className="grid">
                    <label htmlFor="email" className="text-lg text-slate-500">Email Address
                        <span className="text-red-500"> *</span>
                    </label>
                    <input type="email" id="email" className="border border-gray-300 p-2 rounded-md" placeholder="What email address can I reach you at?" value={formData.email} onChange={handleChange} required/>
                </div>
            </div>
            <h3 className="text-2xl md:text-3xl mt-4 text-yellow-900 font-bold">Message</h3>
            <div className="grid gap-2">
                <div className="grid">
                    <label htmlFor="message" className="text-lg text-slate-500">Subject
                        <span className="text-red-500"> *</span>
                    </label>
                    <input type="text" id="subject" className="border border-gray-300 p-2 rounded-md" placeholder="What is your message about?" value={formData.subject} onChange={handleChange} required/>
                </div>
                <div className="grid">
                    <label htmlFor="message" className="text-lg text-slate-500">Content
                        <span className="text-red-500"> *</span>
                    </label>
                    <textarea id="message" className="border border-gray-300 p-2 rounded-md h-32" placeholder="What would you like to say?" value={formData.message} onChange={handleChange} required/>
                </div>
            </div>
            <button className="w-fit px-8 bg-primary text-yellow-900 hover:text-white text-xl py-2 rounded-md mt-4 hover:bg-yellow-700">Send Email</button>
        </form>
    );
}