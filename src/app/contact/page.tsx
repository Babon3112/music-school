"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { FormEvent, useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-3xl md:text-5xl text-center font-sans font-extrabold mb-6 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto mb-8 text-center">
          We’re here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col items-center justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-700 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-800 text-white placeholder:text-neutral-500 transition-all duration-300 focus:shadow-lg"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-700 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-800 text-white placeholder:text-neutral-500 transition-all duration-300 focus:shadow-lg"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
