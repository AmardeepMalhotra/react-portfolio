import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const CONTACT = {
    address: "767 Fifth Avenue, New York, NY 10125",
    phoneNo: "+91 9335 602 563",
    email: "amar8@gmail.com",
  };
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>{" "}
        <a className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
