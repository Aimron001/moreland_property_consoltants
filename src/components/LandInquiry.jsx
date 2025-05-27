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
      <h3>🔍 Je, una ekari 2-3 karibu na Mombasa Highway?</h3>
      <p>
        We are looking for <strong>2-3 acres</strong> within <strong>1 km</strong> of
        Mombasa Highway, between <strong>Malili</strong> and{" "}
        <strong>Lukenya</strong>.
      </p>
      <p className="leads-text">🚀 Got any leads? Let's connect!</p>
      <button className="contact-btn" onClick={() => WhatsAppButton("I have a lead.")}>📩 Contact Us</button>

    </motion.div>
  );
}


      