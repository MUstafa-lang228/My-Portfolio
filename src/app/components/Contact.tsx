'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan API call ya email logic lag sakta hai
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-400 mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="bg-gray-900 shadow-md rounded-lg p-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-400
            
            w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
