import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
const Testimonials = () => {
    return (
        <motion.div
        initial={{opacity:0, x:100}}
                transition={{duration:1}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                
            className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
            id="testimonials"
        >
            {/* Heading */}
            <h1 className="font-bold text-2xl sm:text-4xl mb-2 text-center">
                Customer{' '}
                <span className="underline underline-offset-4 font-light">
                    Testimonials
                </span>
            </h1>

            {/* Subheading */}
            <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
                Real Stories From Those Who Found Home <br /> with Us
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                {testimonialsData.map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-full max-w-[340px] border shadow-lg rounded-2xl px-8 py-10 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white"
                    >
                        {/* User Image */}
                        <img
                            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                            src={testimonial.image}
                            alt={testimonial.alt || testimonial.name || 'Customer'}
                        />

                        {/* Name and Title */}
                        <h2 className="text-xl text-gray-700 font-semibold">
                            {testimonial.name}
                        </h2>
                        <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>

                        {/* Rating */}
                        <div className="flex justify-center gap-1 mb-4">
                            {Array.from(
                                { length: Math.min(testimonial.rating || 0, 5) },
                                (_, i) => (
                                    <img
                                        key={i}
                                        src={assets.star_icon}
                                        alt="star"
                                        className="w-5 h-5"
                                    />
                                )
                            )}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials
