import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsapp";

export default function LandInquiry() {
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setShake(true);
          setTimeout(() => setShake(false), 400); // Faster shaking duration
        }, 6000); // Now shakes every 6 seconds
    
        return () => clearInterval(interval);
      }, []);
    
      return (
        <motion.div
          className="land-inquiry"
          animate={{
            x: shake ? [-5, 5, -5, 5, 0] : 0, // Faster shaking effect
            scale: [1, 1.05, 1], // Pulsing effect
            backgroundColor: ["#fff", "#ffe6e6", "#fff"], // Flashing effect
            opacity: [0, 1], // Fade-in effect
            y: [shake ? -2 : 0], // Slight vertical movement
          }}
          transition={{
            duration: 1.5, // Slower background color transition
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            repeatDelay: 3, // Shorter pause between flashes
            opacity: { duration: 0.3 }, // Faster opacity change
          }}
          initial={{ opacity: 0, y: -30 }}
          whileHover={{ rotate: [0, -2, 2, 0], scale: 1.1 }} // Subtle hover effect
        >
      <h3>Prime 50-Acre Industrial Land for Sale - Lukenya, Athi River</h3>
      <p>
       Located West of Machakos Municipality, near key industrial zones, EPZ, Mombasa Road, and the Greater Eastern Bypass.</p>
      <p className="leads-text">Price: Ksh. 25 Million per Acre
</p>
      <button className="contact-btn" onClick={() => WhatsAppButton("I'm interested in the Prime 50-Acre Industrial Land for Sale")}>📩 Contact Us</button>

    </motion.div>
  );
}


      