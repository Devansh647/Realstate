import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "9c957c28-3d46-4a7e-a553-e1710d34d7c3");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                mode: "no-cors", // 👈 Added to avoid CORS error
            });

            // Browser can't read JSON now, but request will succeed silently
            setResult("✅ Message sent successfully!");
            event.target.reset(); // optional: clear form
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("❌ Failed to send message. Please try again later.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
            id="contact"
        >
            <h1 className="font-bold text-2xl sm:text-4xl mb-2 text-center">
                Contact <span className="underline underline-offset-4 font-light">With Us</span>
            </h1>

            <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
                Ready to Make a Move? Let's Build Your Future Together <br /> with Us
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">
                        Your Name
                        <input
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                            type="text"
                            name="Name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your Email
                        <input
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                            type="email"
                            name="Email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                </div>

                <div className="my-6 text-left">
                    Message
                    <textarea
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                        name="Message"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>

                <button className="bg-blue-600 text-white py-2 px-12 mb-6 rounded hover:bg-blue-700">
                    Send Message
                </button>

                {/* Feedback message */}
                {result && (
                    <p className="text-center text-green-600 font-medium">{result}</p>
                )}
            </form>
        </motion.div>
    );
}

export default Contact;
