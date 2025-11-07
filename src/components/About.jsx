import React from 'react';
import brand_img from '../assets/brand_img.png';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
        initial={{opacity:0, x:200}}
                transition={{duration:1}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                



            className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
            id="about"
        >
            <h1 className="text-2xl sm:text-4xl font-bold ">
                About{' '}
                <span className="underline underline-offset-4 decoration-1 font-light">
                    Our Brand
                </span>
            </h1>
            <p className="text-gray-500 max-w-80 text-center mb-8">
                Passionate about property, Dedicated to your Vision
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img src={brand_img}alt="brand"className="w-full sm:w-1/2 max-w-lg"/>
                <div className="flex flex-col items-center  md:items-start mt-10 text-gray-600">
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Project</p>
                    </div>
                </div>
                <p className='my-10 mx-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ab minima recusandae? Cum voluptatem amet ut laborum perspiciatis in reprehenderit aliquam nisi dicta ea praesentium hic recusandae, vel temporibus sit.</p>
                <button className='bg-blue-600 px-8 py-2 rounded  text-white'>Learn More</button>
            </div>

            </div>
            
        </motion.div>
    );
};

export default About;
