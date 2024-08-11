"use client";
import React from 'react'
import { FaRegEnvelope, FaCheck } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState, useRef } from 'react';
import { gsap } from "gsap";
import { getSubmit } from '@/lib/getSubmit';
import axios from 'axios';

function NewsletterForm() {
    const [input, setInput] = useState("");
    const buttonRef = useRef(null);
    const [active, setActive] = useState(false);
    const { to, fromTo, set } = gsap;
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = input;
        const button = buttonRef.current;
        console.log("Sent email:", email);
        if (!email || !button) return;
        if (!active) {
            setActive(true);
            to(button, {
                keyframes: getSubmit(set, fromTo, button, setActive, setInput),
            });
        }
        try {
            const response = await axios.post('/api/addSubscription', { email });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data && error.response.data.message;
                setMessage(errorMessage || 'An error occurred. Please try again later.');
            } else {
                console.error('An unexpected error occurred:', error);
                setMessage('An error occurred. Please try again later.');
            }
        }
    };

    const dismissMessages = () => {
        setMessage("");
      };

    return (
        <div className='flex flex-col items-center w-screen'>
            <form className='flex mt-8 newsletter-form' onSubmit={handleSubmit}>
                <div className="group flex items-center gap-x-4 py-2 pl-4 rounded-[9px] bg-[#0c0c0c] hover:bg-[#141414] shadow-outline-gray hover:shadow-transparent focus-within:bg-[#202020] focus-within:shadow-outline-gray-focus transition-all duration-300">
                    <FaRegEnvelope className="hidden sm:inline w-4 h-4 text-[#444a43] group-focus-within:text-white group-hover:text-white transition-colors duration-300" />
                    <input
                        type="email"
                        placeholder='Email address'
                        value={input}
                        required
                        onChange={(e) => setInput(e.target.value)}
                        className="flex text-white text-sm outline-none font-numans placeholder-[#444a43] group-focus-within:placeholder-white bg-transparent placeholder:transition-colors placeholder:duration-300 w-32 md:w-48"
                    />
                    <button
                        ref={buttonRef}
                        className={`${active && "active"
                            } font-bold px-2 transition ease-in-out duration-300 py-2 font-numans text-xs mx-2 rounded-lg disabled:grayscale-[100%] disabled:opacity-20 disabled:cursor-not-allowed`}
                        disabled={!input}
                        type="submit"
                    >
                        <span className="default px-2"> Subscribe </span>
                        <span className="success text-sm font-bold px-1 transition duration-50 ease-in-out">
                            Done
                            <FaCheck className='inline ml-3' />
                        </span>
                    </button>
                </div>
            </form>
            <div className='relative flex items-center justify-center align-middle'>
                {message ? (
                    <div className='animate-fade-bottom absolute top-2 text-xs text-[#729d4c] outline-1 outline outline-[#90d554]/50 hover:outline-[#90d554] w-max hover:text-white bg font-numans text-center mt-4 bg-[#0c0c0c] hover:bg-[#141414] py-4 rounded-lg pl-8 pr-4 duration-300 ease-in-out'>
                        {message}
                        <HiOutlineXMark onClick={dismissMessages} className='ml-4 inline w-4 h-4 mb-[2px] hover:text-[#90d554] duration-50 ease-in-out' />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default NewsletterForm