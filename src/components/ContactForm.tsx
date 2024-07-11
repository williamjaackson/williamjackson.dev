"use client";

import { useState } from "react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        setLoading(true);
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
                setSuccess(true);
                setFormData({ name: '', email: '', subject:'', message: '' });
            } else {
                // Handle error
                setError(true);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError(true);
        }
        setLoading(false);
    };

    return (
        <form className="grid mt-4" onSubmit={handleSubmit}>
            {
                error && <div className={`bg-red-300 border border-red-500 text-red-600 p-4 rounded-md grid md:flex gap-2 mb-4`}>
                    <span className="text-xl font-bold">Something went wrong!</span>
                    <span className="text-lg">Your message was not delivered.</span>
                </div>
            }
            {
                success && <div className="bg-gray-300 border border-gray-500 text-gray-600 p-4 rounded-md grid md:flex gap-2 mb-4">
                    <span className="text-xl font-bold">Success!</span>
                    <span className="text-lg">Your message was delivered.</span>
                </div>
            }
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
            <button className="w-fit px-8 bg-primary text-yellow-900 hover:text-white text-xl py-2 rounded-md mt-4 hover:bg-yellow-700 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed" disabled={loading}>
            {
                loading 
                ? <div className="my-2 rounded-full w-6 h-6 border-4 border-gray-600 border-t-gray-300 animate-spin"></div>
                : "Send Email"
            }
            </button>
        </form>
    );
}